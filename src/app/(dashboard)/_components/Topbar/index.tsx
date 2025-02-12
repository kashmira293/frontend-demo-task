import React from "react";
import {
    Box,
    Avatar,
    AppBar,
    Toolbar,
    IconButton,
    Button,
} from "@mui/material";
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";
import { styles, DRAWER_WIDTH } from "@/styles/dashboard/style";
import { useAppDispatch } from "@/redux/hook";
import { logout } from "@/redux/slices/auth/reducer";
import { useRouter } from "next/navigation";
export default function Topbar({
    handleDrawerToggle,
}: {
    handleDrawerToggle: () => void;
}) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    return (
        <AppBar position="fixed" sx={styles.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={styles.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <Button
                    startIcon={<LogoutIcon />}
                    onClick={handleLogout}
                    sx={styles.logoutButton}
                >
                    Logout
                </Button>
                <Avatar sx={styles.avatar}>A</Avatar>
            </Toolbar>
        </AppBar>
    );
}
