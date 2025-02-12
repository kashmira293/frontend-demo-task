"use client";
import React, { useState } from "react";
import { loginStyles } from "@/styles/login/styles";
import {
    TextField,
    Button,
    Box,
    CircularProgress,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/slices/auth/thunk";
import toast from "react-hot-toast";
import { LoginCredentials, LoginErrors } from "@/app/types/auth/types";
import { validateField } from "./validations";
import { Google } from "@mui/icons-material";
const INITIAL_STATE = { email: "", password: "" };

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] =
        useState<LoginCredentials>(INITIAL_STATE);
    const [errors, setErrors] = useState<LoginErrors>(INITIAL_STATE);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        if (!error) setErrors((prev) => ({ ...prev, [name]: "" }));
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };
    const validateForm = (): boolean => {
        const newErrors = {
            email: validateField("email", credentials.email),
            password: validateField("password", credentials.password),
        };
        setErrors(newErrors);
        return !newErrors.email && !newErrors.password;
    };
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const resultAction = await dispatch(login(credentials));
            if (login.fulfilled.match(resultAction)) {
                router.push("/dashboard");
                toast.success("Login successful!");
            } else {
                toast.error("Invalid credentials. Please try again.");
            }
        } catch (error) {
            toast.error(
                "Network error occurred. Please check your connection."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Box component="form" noValidate onSubmit={handleLogin}>
                {["email", "password"].map((field) => (
                    <TextField
                        key={field}
                        margin="normal"
                        required
                        fullWidth
                        name={field}
                        label={field === "email" ? "Email Address" : "Password"}
                        type={field === "password" ? "password" : "text"}
                        error={!!errors[field as keyof LoginErrors]}
                        helperText={errors[field as keyof LoginErrors]}
                        value={credentials[field as keyof LoginCredentials]}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={`Enter your ${field}`}
                        sx={loginStyles.textField}
                    />
                ))}
                <Box sx={loginStyles.formOptionsRow}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="rememberMe"
                                sx={loginStyles.checkbox}
                            />
                        }
                        label="Remember me"
                        sx={loginStyles.checkbox}
                    />
                    <Typography variant="body2" sx={loginStyles.forgotPassword}>
                        Forgot password?
                    </Typography>
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={loginStyles.button}
                >
                    {loading ? (
                        <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                        "Sign in"
                    )}
                </Button>
            </Box>
        </>
    );
};
export default LoginForm;
