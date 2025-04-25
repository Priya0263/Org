"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AlertCircle, ArrowLeft, CheckCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // In a real application, this would call an API endpoint
      // For demo purposes, we'll simulate the process

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address")
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if email exists in our simulated database
      // For demo, we'll accept any valid email format

      // Simulate sending reset email
      console.log(`Password reset link sent to: ${email}`)

      // Show success message
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>Enter your email address and we'll send you a link to reset your password.</CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Email sent!</AlertTitle>
              <AlertDescription>
                If an account exists with the email <strong>{email}</strong>, you will receive a password reset link
                shortly. Please check your inbox and spam folder.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Reset Link...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <div className="flex flex-col items-center space-y-2">
            <Link href="/auth/login" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
