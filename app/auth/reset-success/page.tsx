"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResetSuccessPage() {
  const router = useRouter()

  // Redirect to login after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/login")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Password Reset Successful</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Your password has been successfully reset. You can now log in with your new password.</p>
          <p className="text-sm text-muted-foreground">You will be redirected to the login page in 5 seconds...</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/auth/login">Log In Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
