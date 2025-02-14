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
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginForm } from "@/hooks/useLoginForm";

const LoginForm = () => {
    const {
        credentials,
        errors,
        loading,
        showPassword,
        handleInputChange,
        handleBlur,
        handleLogin,
        togglePasswordVisibility,
    } = useLoginForm();
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
                        type={
                            field === "password"
                                ? showPassword
                                    ? "text"
                                    : "password"
                                : "text"
                        }
                        error={!!errors[field as keyof typeof errors]}
                        helperText={errors[field as keyof typeof errors]}
                        value={
                            credentials[field as keyof typeof credentials] || ""
                        }
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={`Enter your ${field}`}
                        sx={loginStyles.textField}
                        InputProps={{
                            endAdornment: field === "password" && (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ shrink: true }}
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
