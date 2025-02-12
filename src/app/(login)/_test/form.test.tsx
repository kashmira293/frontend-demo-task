import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "../_components/login/form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";


jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));


jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}));


// Mocking the validation helper function 
jest.mock("../_components/login/validations", () => ({
    validateField: jest.fn((name: string, value: string) => {
        if (!value) {
            return name === "email"
                ? "Email is required"
                : "Password is required";
        }
        return "";
    }),
}));

describe("LoginForm", () => {
    let mockDispatch: jest.Mock;
    let mockPush: jest.Mock;

    beforeEach(() => {
        mockDispatch = jest.fn();
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

        mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

        jest.clearAllMocks();
    });

    test("renders form inputs and buttons", () => {
        render(<LoginForm />);
        // Check for email and password inputs by label text
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        // Check for the sign in button 
        expect(
            screen.getByRole("button", { name: /Sign in/i })
        ).toBeInTheDocument();
    });

    test("updates input fields on change", () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(
            /Email Address/i
        ) as HTMLInputElement;
        const passwordInput = screen.getByLabelText(
            /Password/i
        ) as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: "kashmira@demo.com" } });
        fireEvent.change(passwordInput, { target: { value: "demopass@123" } });

        expect(emailInput.value).toBe("kashmira@demo.com");
        expect(passwordInput.value).toBe("demopass@123");
    });

    test("displays error messages on blur when fields are empty", async () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/Email Address/i);
        const passwordInput = screen.getByLabelText(/Password/i);

        // Trigger blur events without entering any value.
        fireEvent.blur(emailInput);
        fireEvent.blur(passwordInput);

        await waitFor(() => {
            expect(screen.getByText("Email is required")).toBeInTheDocument();
            expect(
                screen.getByText("Password is required")
            ).toBeInTheDocument();
        });
    });

});
