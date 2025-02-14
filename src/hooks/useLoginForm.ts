"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/slices/auth/thunk";
import toast from "react-hot-toast";
import { LoginCredentials, LoginErrors } from "@/app/types/auth/types";
import { validateField } from "@/app/(login)/_components/login/validations";

const INITIAL_STATE = { email: "", password: "" };

export const useLoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState<LoginCredentials>(INITIAL_STATE);
    const [showPassword, setShowPassword] = useState(false);
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
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
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
            toast.error("Network error occurred. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return {
        credentials,
        errors,
        loading,
        showPassword,
        handleInputChange,
        handleBlur,
        handleLogin,
        togglePasswordVisibility,
    };
};
