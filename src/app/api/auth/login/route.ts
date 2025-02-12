import { NextResponse } from "next/server";

/**
 * Handles the POST request to /api/auth/login.
 *
 * The request body must contain the `email` and `password` fields.
 *
 * If the email and password are valid, it returns a JSON object with the
 * `message`, `token`, `success`, and `user` fields. The `token` field can be used
 * to authorize the user for future requests.
 *
 * If the email or password is invalid, it returns a JSON object with the
 * `error` field and a 401 status.
 *
 * If something goes wrong, it returns a JSON object with the `error` field and
 * a 500 status.
 */
export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }

        if (email === "kashmira@demo.com" && password === "demopass@123") {
            return NextResponse.json(
                {
                    message: "Login successful!",
                    token: "dummy-token",
                    success: true,
                    user: email,
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "Invalid credentials." },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}
