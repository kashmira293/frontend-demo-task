import { NextResponse } from "next/server";

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
