"use client"

import { useState } from "react"
import { Bell, Calendar, Home, LogOut, HelpCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useAuth } from "@/components/auth-context"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const router = useRouter()
  const { logout } = useAuth()

  const { userData, userRole } = useAuth()
  const user = userData || {
    name: "User",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    bloodGroup: "",
    organDonations: [],
    tissueDonations: [],
    healthStatus: "",
    joinedDate: "",
    lastUpdated: "",
  }

  // Mock activity data
  const activities = [
    { id: 1, type: "profile_update", date: "March 21, 2025", description: "Updated health status information" },
    { id: 2, type: "document_upload", date: "March 20, 2025", description: "Uploaded medical records" },
    { id: 3, type: "verification", date: "March 15, 2025", description: "Account verified" },
    { id: 4, type: "registration", date: "March 15, 2025", description: "Account created" },
  ]

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 py-6">
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex flex-col gap-2 py-2">
            <Button
              variant={activeTab === "profile" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant={activeTab === "activity" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("activity")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Activity Log
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/help">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Link>
            </Button>
            <div className="mt-auto pt-4">
              <Button variant="ghost" className="justify-start w-full text-muted-foreground" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </div>
          </nav>
        </aside>
        <main className="flex w-full flex-col">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <TabsList className="md:hidden">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your personal information and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt={user.name} />
                        <AvatarFallback className="text-lg">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Change Photo
                      </Button>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                          <p className="text-base">{user.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                          <p className="text-base">{user.email}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                          <p className="text-base">{user.phone}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                          <p className="text-base">{user.address}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">Edit Profile</Button>
                        <Button size="sm" variant="outline">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                  <CardDescription>Your medical details and donation preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Date of Birth</h3>
                      <p className="text-base">{user.dateOfBirth}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Age</h3>
                      <p className="text-base">{user.age}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Gender</h3>
                      <p className="text-base">{user.gender}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Blood Group</h3>
                      <p className="text-base">{user.bloodGroup}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Account Type</h3>
                      <p className="text-base capitalize">{userRole}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Health Status</h3>
                    <p className="text-base">{user.healthStatus}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Track your recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4 border-b pb-4 last:border-0">
                        <div className="rounded-full bg-primary/10 p-2">
                          {activity.type === "profile_update" && <User className="h-4 w-4 text-primary" />}
                          {activity.type === "document_upload" && <Calendar className="h-4 w-4 text-primary" />}
                          {activity.type === "verification" && <Bell className="h-4 w-4 text-primary" />}
                          {activity.type === "registration" && <Home className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Member Since</h3>
                      <p className="text-base">{user.joinedDate}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Last Profile Update</h3>
                      <p className="text-base">{user.lastUpdated}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
