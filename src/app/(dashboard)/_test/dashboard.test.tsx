import {
    render,
    screen,
    fireEvent,
    cleanup,
} from "@testing-library/react";
import Topbar from "../_components/Topbar/index";
import SidebarDrawer from "../_components/Sidebar/index";
import DashboardContent from "../_components/DashboardContent";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/auth/reducer";

jest.mock("@/redux/hook", () => ({
    useAppSelector: jest.fn(),
    useAppDispatch: jest.fn(),
}));

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

jest.mock("@mui/icons-material", () => ({
    __esModule: true,
    Menu: () => "MenuIcon",
    Notifications: () => "NotificationsIcon",
    Settings: () => "SettingsIcon",
    Logout: () => "LogoutIcon",
    Home: () => "HomeIcon",
    Group: () => "GroupIcon",
    Email: () => "EmailIcon",
    Description: () => "DescriptionIcon",
}));

// Mock data
const mockUsers = [
    { id: 1, name: "kashmira", email: "kashmira@example.com" },
    { id: 2, name: "krish Smith", email: "jane@example.com" },
];

const mockPosts = [
    { id: 1, title: "Post 1", body: "Content 1" },
    { id: 2, title: "Post 2", body: "Content 2" },
];


describe("Topbar Component", () => {
    it("renders logout button and avatar", () => {
        const mockToggle = jest.fn();
        render(<Topbar handleDrawerToggle={mockToggle} />);

        expect(screen.getByText("Logout")).toBeInTheDocument();
        expect(screen.getByText("A")).toBeInTheDocument();
    });

    it("triggers logout action when logout button is clicked", () => {
        const mockDispatch = jest.fn();
        const mockRouterPush = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
        (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });

        render(<Topbar handleDrawerToggle={jest.fn()} />);
        fireEvent.click(screen.getByText("Logout"));

        expect(mockDispatch).toHaveBeenCalledWith(logout());
        expect(mockRouterPush).toHaveBeenCalledWith("/login");
    });
});

describe("SidebarDrawer Component", () => {
    it("renders sidebar content correctly", () => {
        render(<SidebarDrawer />);

        expect(screen.getByText("Admin Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Dashboard")).toBeInTheDocument();
    });
});

describe("DashboardContent Component", () => {
    beforeEach(() => {
        (useAppSelector as jest.Mock).mockImplementation((selector) =>
            selector({
                dashboard: {
                    users: mockUsers,
                    posts: mockPosts,
                    isLoading: false,
                },
            })
        );
    });

    it("displays loading state initially", () => {
        (useAppSelector as jest.Mock).mockImplementation((selector) =>
            selector({
                dashboard: { isLoading: true },
            })
        );

        render(<DashboardContent />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });



    it("displays recent users and posts lists", () => {
        render(<DashboardContent />);

        expect(screen.getByText("Recent Users")).toBeInTheDocument();
        expect(screen.getByText("kashmira")).toBeInTheDocument();
        expect(screen.getByText("Recent Posts")).toBeInTheDocument();
        expect(screen.getByText("Post 1")).toBeInTheDocument();
    });

    afterEach(() => {
        cleanup();
    });
});