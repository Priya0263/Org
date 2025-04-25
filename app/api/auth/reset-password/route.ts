import { type NextRequest, NextResponse } from "next/server"
import { verifyResetToken, consumeResetToken } from "@/lib/password-reset"

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    // Validate token
    const tokenVerification = verifyResetToken(token)
    if (!tokenVerification.valid) {
      return NextResponse.json({ error: "Invalid or expired reset token" }, { status: 400 })
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
    }

    // In a real app, update the user's password in your database
    // For demo purposes, we'll just consume the token

    // Mark the token as used
    consumeResetToken(token)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Password has been successfully reset",
    })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
