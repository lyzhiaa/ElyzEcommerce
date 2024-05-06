import { cookies } from "next/headers";
import { NextResponse } from "next/server";

//Create post reaquest handle for logout
export async function POST() {
    // Get the refresh token from the client-side cookies
    const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
    const cookieStore = cookies();
    const credential = cookieStore.get(cookieName);

    // If the refresh token is not found, return an error message to the client-side
    if(!credential) {
        return NextResponse.json(
            {
                message: "Token not found !!!",
            },
            {
                status: 400,
            }
        );
    }

    // Get the refresh token value
    const refreshToken = credential.value;

    // If refresh toekn exist, delete the refresh token from the client side cookid
    if (refreshToken) {

        cookieStore.delete(cookieName)
        
        return NextResponse.json(
            {
                message: "Logout Successful !!!",
            },
            {
                status: 200,
            }
        );
    }

    //If the refresh token is not found, return the error message to the client-side
    return NextResponse.json(
        {
            message: "Failed to logout !!!",
        },
        {
            status: 400,
        }
    );
}