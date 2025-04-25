"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { AlertCircle, ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null)

  useEffect(() => {
    // Validate token
    const validateToken = async () => {
      // In a real app, this would verify the token with the backend
      // For demo purposes, we'll simulate token validation

      if (!token) {
        setIsTokenValid(false)
        return
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo, we'll consider any token that's at least 20 chars as valid
      setIsTokenValid(token.length >= 20)
    }

    validateToken()
  }, [token])

  useEffect(() => {
    // Calculate password strength
    if (!password) {
      setPasswordStrength(0)
      return
    }

    let strength = 0

    // Length check
    if (password.length >= 8) strength += 25

    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 25

    // Contains number
    if (/[0-9]/.test(password)) strength += 25

    // Contains special char
    if (/[^A-Za-z0-9]/.test(password)) strength += 25

    setPasswordStrength(strength)
  }, [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Validate passwords
      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters long")
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match")
      }

      if (passwordStrength < 75) {
        throw new Error("Please choose a stronger password")
      }

      // In a real app, this would call an API endpoint to reset the password
      // For demo purposes, we'll simulate the process

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push("/auth/reset-success")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStrengthColor = () => {
    if (passwordStrength < 25) return "bg-red-500"
    if (passwordStrength < 50) return "bg-orange-500"
    if (passwordStrength < 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStrengthText = () => {
    if (passwordStrength < 25) return "Very Weak"
    if (passwordStrength < 50) return "Weak"
    if (passwordStrength < 75) return "Medium"
    return "Strong"
  }

  if (isTokenValid === null) {
    return (
      <div className="container flex items-center justify-center min-h-screen py-10">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <p>Validating your reset link...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isTokenValid === false) {
    return (
      <div className="container flex items-center justify-center min-h-screen py-10">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Invalid or Expired Link</CardTitle>
            <CardDescription>The password reset link you clicked is invalid or has expired.</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Invalid Reset Link</AlertTitle>
              <AlertDescription>Please request a new password reset link to continue.</AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/auth/forgot-password">Request New Link</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>Create a new password for your account.</CardDescription>
        </CardHeader>
        <CardContent>
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
                <label htmlFor="password" className="text-sm font-medium">
                  New Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pr-10"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {password && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Password strength:</span>
                      <span className={passwordStrength >= 75 ? "text-green-600" : "text-amber-600"}>
                        {getStrengthText()}
                      </span>
                    </div>
                    <Progress value={passwordStrength} className={`h-1 ${getStrengthColor()}`} />
                    <ul className="text-xs text-gray-500 space-y-1 mt-2">
                      <li className={password.length >= 8 ? "text-green-600" : ""}>• At least 8 characters</li>
                      <li className={/[A-Z]/.test(password) ? "text-green-600" : ""}>
                        • At least one uppercase letter
                      </li>
                      <li className={/[0-9]/.test(password) ? "text-green-600" : ""}>• At least one number</li>
                      <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-600" : ""}>
                        • At least one special character
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full pr-10"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {password && confirmPassword && (
                  <p className={`text-xs ${password === confirmPassword ? "text-green-600" : "text-red-600"}`}>
                    {password === confirmPassword ? "Passwords match" : "Passwords do not match"}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Resetting Password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>
            </div>
          </form>
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
