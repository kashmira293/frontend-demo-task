export interface AuthState {
    user: null | any;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupCredentials {
    email: string;
    password: string;
    name: string;
}

export interface AuthResponse {
    message: string;
    token: string;
    user: string;
    success: boolean;
}

export interface LoginErrors {
    email: string;
    password: string;
}