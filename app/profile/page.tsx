"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Edit, Save, User, Mail, Phone, MapPin, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { useAuth } from "@/components/auth-context"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const { userData, userRole, updateUserData } = useAuth()
  const [user, setUser] = useState(
    userData || {
      name: "",
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
    },
  )

  useEffect(() => {
    if (userData) {
      setUser(userData)
    }
  }, [userData])

  const handleSaveProfile = () => {
    updateUserData(user)
    setIsEditing(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">View and manage your personal information</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <ScrollReveal>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt={user.name} />
                        <AvatarFallback className="text-lg">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h2 className="text-xl font-bold">{user.name}</h2>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <Badge className="mt-3 capitalize">{userRole}</Badge>

                      <div className="mt-6 w-full">
                        <div className="flex items-center justify-between border-t pt-4">
                          <span className="text-sm text-muted-foreground">Member since</span>
                          <span className="text-sm">{user.joinedDate}</span>
                        </div>
                        <div className="flex items-center justify-between border-t pt-4 mt-2">
                          <span className="text-sm text-muted-foreground">Last updated</span>
                          <span className="text-sm">{user.lastUpdated}</span>
                        </div>
                      </div>

                      <div className="mt-6 w-full">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/dashboard/health">View Health Tracking</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={0.1}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Your personal and contact details</CardDescription>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="mr-2 h-4 w-4" />
                            Full Name
                          </div>
                          {isEditing ? (
                            <Input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                          ) : (
                            <p>{user.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </div>
                          {isEditing ? (
                            <Input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                          ) : (
                            <p>{user.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="mr-2 h-4 w-4" />
                            Phone
                          </div>
                          {isEditing ? (
                            <Input value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                          ) : (
                            <p>{user.phone}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            Date of Birth
                          </div>
                          {isEditing ? (
                            <Input
                              type="date"
                              value={user.dateOfBirth}
                              onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                            />
                          ) : (
                            <p>{user.dateOfBirth}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          Address
                        </div>
                        {isEditing ? (
                          <Textarea
                            value={user.address}
                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                          />
                        ) : (
                          <p>{user.address}</p>
                        )}
                      </div>
                      {isEditing && <Button onClick={handleSaveProfile}>Save Changes</Button>}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {userRole === "donor" && (
                <ScrollReveal delay={0.2} className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Donor Information</CardTitle>
                      <CardDescription>Your donation preferences and medical details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Organ Donations</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {user.organDonations?.map((organ, index) => (
                              <Badge key={index} variant="outline">
                                {organ}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Tissue Donations</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {user.tissueDonations?.map((tissue, index) => (
                              <Badge key={index} variant="outline">
                                {tissue}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Health Status</h3>
                          <p>{user.healthStatus}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}

              {userRole === "recipient" && (
                <ScrollReveal delay={0.2} className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recipient Information</CardTitle>
                      <CardDescription>Your transplant needs and medical details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Organ Needed</h3>
                          <p>{user.organNeeded}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Medical History</h3>
                          <p>{user.medicalHistory}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Urgency Level</h3>
                          <p>{user.urgencyLevel}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Health Status</h3>
                          <p>{user.healthStatus}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}

              {userRole === "medical" && (
                <ScrollReveal delay={0.2} className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medical Professional Information</CardTitle>
                      <CardDescription>Your professional details and qualifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Medical License Number</h3>
                          <p>{user.medicalLicenseNumber}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Specialization</h3>
                          <p>{user.specialization}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Hospital Affiliation</h3>
                          <p>{user.hospitalAffiliation}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Years of Experience</h3>
                          <p>{user.yearsOfExperience}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}

              {userRole === "admin" && (
                <ScrollReveal delay={0.2} className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Administrator Information</CardTitle>
                      <CardDescription>Your administrative role and details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Administrative Role</h3>
                          <p>{user.adminRole}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Department</h3>
                          <p>{user.department}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Employee ID</h3>
                          <p>{user.employeeId}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
