import { type NextRequest, NextResponse } from "next/server"
import { createResetToken, sendResetEmail, checkRateLimit } from "@/lib/password-reset"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check rate limit (using IP address as identifier)
    // In production, you might want to use a combination of IP and email
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many password reset requests. Please try again later." }, { status: 429 })
    }

    // In a real app, check if the email exists in your database
    // For demo purposes, we'll assume all valid email formats are valid users

    // Generate a reset token
    const token = createResetToken(email)

    // Send the reset email
    sendResetEmail(email, token)

    // Return success response
    // Note: For security reasons, we don't reveal whether the email exists in our system
    return NextResponse.json({
      success: true,
      message: "If an account with that email exists, a password reset link has been sent.",
    })
  } catch (error) {
    console.error("Password reset request error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
