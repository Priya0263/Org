"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, Mail, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"

export default function VerifyPage() {
  const router = useRouter()
  const [emailCode, setEmailCode] = useState("")
  const [smsCode, setSmsCode] = useState("")
  const [verificationMethod, setVerificationMethod] = useState("email")
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsVerified(true)
    }, 1500)
  }

  const handleContinue = () => {
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <div className="container flex-1 flex items-center justify-center py-6">
        <div className="mx-auto w-full max-w-[400px]">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">Verify Your Account</h1>
            <p className="text-sm text-muted-foreground">We&apos;ve sent verification codes to your email and phone</p>
          </div>

          {!isVerified ? (
            <Card>
              <CardHeader>
                <CardTitle>Account Verification</CardTitle>
                <CardDescription>Please enter the verification code to complete your registration</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={verificationMethod} onValueChange={setVerificationMethod}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="sms">SMS</TabsTrigger>
                  </TabsList>
                  <TabsContent value="email">
                    <form onSubmit={handleVerify} className="space-y-4 pt-4">
                      <div className="flex justify-center py-2">
                        <Mail className="h-12 w-12 text-primary" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-code">Email Verification Code</Label>
                        <Input
                          id="email-code"
                          placeholder="Enter 6-digit code"
                          value={emailCode}
                          onChange={(e) => setEmailCode(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Verifying..." : "Verify Email"}
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="sms">
                    <form onSubmit={handleVerify} className="space-y-4 pt-4">
                      <div className="flex justify-center py-2">
                        <MessageSquare className="h-12 w-12 text-primary" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="sms-code">SMS Verification Code</Label>
                        <Input
                          id="sms-code"
                          placeholder="Enter 6-digit code"
                          value={smsCode}
                          onChange={(e) => setSmsCode(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Verifying..." : "Verify SMS"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <div className="text-xs text-muted-foreground">
                  Didn&apos;t receive a code?{" "}
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Resend code
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Verification Successful</CardTitle>
                <CardDescription>Your account has been successfully verified</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-primary" />
                <p className="text-center">
                  Thank you for verifying your account. You can now access all features of ORGANATE.
                </p>
                <Button onClick={handleContinue} className="w-full">
                  Continue to Dashboard
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
