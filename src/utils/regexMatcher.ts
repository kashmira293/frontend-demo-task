const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isEmail(email : string) {
    return email.match(EMAIL_REGEX);
}

export function isValidPassword(password : string) {
    return password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
}