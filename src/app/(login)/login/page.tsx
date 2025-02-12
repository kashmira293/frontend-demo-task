"use client";
import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/material";
import LoginForm from "../_components/login/form";
import { loginStyles } from "@/styles/login/styles";
import userIcon from "@/assests/icons/user.svg";
const LoginPage = () => {
    return (
        <Box sx={loginStyles.wrapper}>
            <Container component="main" maxWidth="sm">
                <Paper elevation={0} sx={loginStyles.paper}>
                    <Box sx={loginStyles.logoWrapper}>
                        <Box sx={loginStyles.logoContainer}>
                            <Box sx={loginStyles.logoBox}>
                                <Image
                                    src={userIcon}
                                    alt="Logo"
                                    width={120}
                                    height={120}
                                    style={{ objectFit: "contain" }}
                                />
                            </Box>
                        </Box>
                        <Typography variant="h3" sx={loginStyles.title}>
                            Welcome Back
                        </Typography>
                        <Typography variant="body1" sx={loginStyles.subtitle}>
                            Sign in to continue to your account
                        </Typography>
                    </Box>
                    <LoginForm />
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;
