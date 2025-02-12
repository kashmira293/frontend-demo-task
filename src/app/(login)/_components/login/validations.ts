const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

export const validateField = (name: string, value: string): string => {
        if (!value) return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        
        if (name === 'email' && !EMAIL_REGEX.test(value)) {
            return 'Invalid email format';
        }
        if (name === 'password' && value.length < MIN_PASSWORD_LENGTH) {
            return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
        }
        return '';
    };