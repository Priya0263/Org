"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { DonationInfoModal } from "@/components/donation-info-modal"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Update the handleSubmit function to use the new login function with user data
// First, import the useAuth hook
import { useAuth } from "@/components/auth-context"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userRole, setUserRole] = useState("donor")
  const [showInfoModal, setShowInfoModal] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    // Common fields
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    bloodGroup: "",

    // Donor fields
    organDonations: [] as string[],
    tissueDonations: [] as string[],
    healthStatus: "",

    // Recipient fields
    organNeeded: "",
    medicalHistory: "",
    urgencyLevel: "",

    // Medical professional fields
    medicalLicenseNumber: "",
    specialization: "",
    hospitalAffiliation: "",
    yearsOfExperience: "",

    // Admin fields
    adminRole: "",
    department: "",
    employeeId: "",
  })

  // Then, add the useAuth hook to the component
  const { login } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (category: "organDonations" | "tissueDonations", value: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        // If "All" is selected, include all options
        if (value === "all") {
          return {
            ...prev,
            [category]:
              category === "organDonations"
                ? ["heart", "lungs", "kidneys", "liver", "pancreas", "intestine", "hands", "all"]
                : ["corneas", "skin", "bones", "heart-valves", "blood-vessels", "all"],
          }
        }
        // Add the value to the array
        return { ...prev, [category]: [...prev[category], value] }
      } else {
        // If "All" is unchecked, remove all options
        if (value === "all") {
          return { ...prev, [category]: [] }
        }
        // Remove the value from the array
        return { ...prev, [category]: prev[category].filter((item) => item !== value && item !== "all") }
      }
    })
  }

  const handleRoleChange = (value: string) => {
    setUserRole(value)
  }

  const validateStep1 = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.address ||
      !formData.dateOfBirth ||
      !formData.age ||
      !formData.gender ||
      !formData.bloodGroup
    ) {
      setError("Please fill in all required fields")
      return false
    }
    setError("")
    return true
  }

  const validateStep2 = () => {
    switch (userRole) {
      case "donor":
        if (formData.organDonations.length === 0) {
          setError("Please select at least one organ for donation")
          return false
        }
        if (!formData.healthStatus) {
          setError("Please provide your health status")
          return false
        }
        break
      case "recipient":
        if (!formData.organNeeded) {
          setError("Please select the organ needed")
          return false
        }
        if (!formData.medicalHistory) {
          setError("Please provide your medical history")
          return false
        }
        if (!formData.urgencyLevel) {
          setError("Please select your urgency level")
          return false
        }
        break
      case "medical":
        if (!formData.medicalLicenseNumber) {
          setError("Please enter your medical license number")
          return false
        }
        if (!formData.specialization) {
          setError("Please select your specialization")
          return false
        }
        if (!formData.hospitalAffiliation) {
          setError("Please enter your hospital affiliation")
          return false
        }
        break
    }
    setError("")
    return true
  }

  // Replace the handleSubmit function with:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep2()) {
      return
    }

    // In a real application, you would send this data to your backend
    console.log("Registration data:", { ...formData, userRole })

    // Create user data object based on form data
    const userData = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      dateOfBirth: formData.dateOfBirth,
      age: formData.age,
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,
      joinedDate: new Date().toLocaleDateString(),
      lastUpdated: new Date().toLocaleDateString(),
      // Add role-specific fields
      ...(userRole === "donor" && {
        organDonations: formData.organDonations.map((id) => {
          const option = organOptions.find((opt) => opt.id === id)
          return option ? option.label : id
        }),
        tissueDonations: formData.tissueDonations.map((id) => {
          const option = tissueOptions.find((opt) => opt.id === id)
          return option ? option.label : id
        }),
        healthStatus: formData.healthStatus,
      }),
      ...(userRole === "recipient" && {
        organNeeded: formData.organNeeded,
        medicalHistory: formData.medicalHistory,
        urgencyLevel: formData.urgencyLevel,
        healthStatus: formData.healthStatus,
      }),
      ...(userRole === "medical" && {
        medicalLicenseNumber: formData.medicalLicenseNumber,
        specialization: formData.specialization,
        hospitalAffiliation: formData.hospitalAffiliation,
        yearsOfExperience: formData.yearsOfExperience,
      }),
      ...(userRole === "admin" && {
        adminRole: formData.adminRole,
        department: formData.department,
        employeeId: formData.employeeId,
      }),
    }

    // Log in the user with the new data
    login(userRole, userData)

    // Simulate email verification
    router.push("/auth/verify")
  }

  const nextStep = () => {
    if (validateStep1()) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  // Organ and tissue options
  const organOptions = [
    { id: "heart", label: "Heart" },
    { id: "lungs", label: "Lungs" },
    { id: "kidneys", label: "Kidneys" },
    { id: "liver", label: "Liver" },
    { id: "pancreas", label: "Pancreas" },
    { id: "intestine", label: "Intestine" },
    { id: "hands", label: "Hands" },
    { id: "all", label: "All Organs" },
  ]

  const tissueOptions = [
    { id: "corneas", label: "Corneas/Eyeballs" },
    { id: "skin", label: "Skin" },
    { id: "bones", label: "Bones" },
    { id: "heart-valves", label: "Heart Valves" },
    { id: "blood-vessels", label: "Blood Vessels" },
    { id: "all", label: "All Tissues" },
  ]

  const renderRoleSpecificFields = () => {
    switch (userRole) {
      case "donor":
        return (
          <>
            <div className="grid gap-2 border p-4 rounded-md bg-muted/30">
              <p className="text-sm font-medium mb-2">
                In the presence of person mentioned below, I hereby equivocally authorize the removal of following
                organ(s) and/or tissue(s), from my body after being declared brain stem dead by the board of medical
                experts and consent to donate the same for therapeutic purposes.
              </p>

              <div className="grid gap-2 mt-2">
                <Label className="font-semibold">Organ(s)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {organOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`organ-${option.id}`}
                        checked={formData.organDonations.includes(option.id)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("organDonations", option.id, checked as boolean)
                        }
                      />
                      <Label htmlFor={`organ-${option.id}`} className="text-sm font-normal">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 mt-2">
                <Label className="font-semibold">Tissue(s)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {tissueOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tissue-${option.id}`}
                        checked={formData.tissueDonations.includes(option.id)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("tissueDonations", option.id, checked as boolean)
                        }
                      />
                      <Label htmlFor={`tissue-${option.id}`} className="text-sm font-normal">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                (Tissues can also be donated after Brain Stem Death as well as Cardiac Death)
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="healthStatus">Health Status</Label>
              <Textarea
                id="healthStatus"
                name="healthStatus"
                placeholder="Please provide a brief description of your current health status"
                value={formData.healthStatus}
                onChange={handleChange}
                required
                className="resize-none h-20"
              />
            </div>
          </>
        )
      case "recipient":
        return (
          <>
            <div className="grid gap-2">
              <Label htmlFor="organNeeded">Organ Needed</Label>
              <Select
                onValueChange={(value) => handleSelectChange("organNeeded", value)}
                defaultValue={formData.organNeeded}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select organ needed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kidney">Kidney</SelectItem>
                  <SelectItem value="liver">Liver</SelectItem>
                  <SelectItem value="heart">Heart</SelectItem>
                  <SelectItem value="lung">Lung</SelectItem>
                  <SelectItem value="pancreas">Pancreas</SelectItem>
                  <SelectItem value="bone-marrow">Bone Marrow</SelectItem>
                  <SelectItem value="cornea">Cornea</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="medicalHistory">Medical History</Label>
              <Textarea
                id="medicalHistory"
                name="medicalHistory"
                placeholder="Please provide relevant medical history related to your condition"
                value={formData.medicalHistory}
                onChange={handleChange}
                required
                className="resize-none h-20"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="urgencyLevel">Urgency Level</Label>
              <Select
                onValueChange={(value) => handleSelectChange("urgencyLevel", value)}
                defaultValue={formData.urgencyLevel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">Critical (Immediate)</SelectItem>
                  <SelectItem value="urgent">Urgent (Within weeks)</SelectItem>
                  <SelectItem value="standard">Standard (Within months)</SelectItem>
                  <SelectItem value="monitoring">Monitoring (Not immediate)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="healthStatus">Current Health Status</Label>
              <Textarea
                id="healthStatus"
                name="healthStatus"
                placeholder="Please describe your current health condition"
                value={formData.healthStatus}
                onChange={handleChange}
                required
                className="resize-none h-20"
              />
            </div>
          </>
        )
      case "medical":
        return (
          <>
            <div className="grid gap-2">
              <Label htmlFor="medicalLicenseNumber">Medical License Number</Label>
              <Input
                id="medicalLicenseNumber"
                name="medicalLicenseNumber"
                placeholder="Enter your medical license number"
                value={formData.medicalLicenseNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Select
                onValueChange={(value) => handleSelectChange("specialization", value)}
                defaultValue={formData.specialization}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transplant-surgeon">Transplant Surgeon</SelectItem>
                  <SelectItem value="nephrologist">Nephrologist</SelectItem>
                  <SelectItem value="cardiologist">Cardiologist</SelectItem>
                  <SelectItem value="hepatologist">Hepatologist</SelectItem>
                  <SelectItem value="pulmonologist">Pulmonologist</SelectItem>
                  <SelectItem value="anesthesiologist">Anesthesiologist</SelectItem>
                  <SelectItem value="nurse">Transplant Nurse</SelectItem>
                  <SelectItem value="coordinator">Transplant Coordinator</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hospitalAffiliation">Hospital Affiliation</Label>
              <Input
                id="hospitalAffiliation"
                name="hospitalAffiliation"
                placeholder="Enter your hospital or medical institution"
                value={formData.hospitalAffiliation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                name="yearsOfExperience"
                type="number"
                placeholder="Enter years of experience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DonationInfoModal
        open={showInfoModal}
        onOpenChange={setShowInfoModal}
        onContinue={() => setShowInfoModal(false)}
      />

      <div className="container flex-1 flex items-center justify-center py-6">
        <div className="mx-auto w-full max-w-[550px]">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Join our community to connect with donors and recipients</p>
          </div>

          <Tabs defaultValue={userRole} onValueChange={handleRoleChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="donor">Donor</TabsTrigger>
              <TabsTrigger value="recipient">Recipient</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
            </TabsList>
          </Tabs>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Registration {step === 1 ? "- Account Details" : "- Medical Information"}</CardTitle>
              <CardDescription>
                {step === 1 ? "Please provide your personal information" : "Please provide your medical information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="25"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("gender", value)}
                          defaultValue={formData.gender}
                        >
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("bloodGroup", value)}
                          defaultValue={formData.bloodGroup}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        placeholder="123 Main St, City, State, ZIP"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="resize-none h-20"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {renderRoleSpecificFields()}

                    {(userRole === "donor" || userRole === "recipient") && (
                      <div className="grid gap-2">
                        <Label>Medical Records Consent</Label>
                        <RadioGroup defaultValue="yes">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="consent-yes" />
                            <Label htmlFor="consent-yes">
                              I consent to share my medical records with matched parties
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="consent-no" />
                            <Label htmlFor="consent-no">I do not consent</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {step === 1 ? (
                <div className="flex w-full justify-end">
                  <Button onClick={nextStep}>Next</Button>
                </div>
              ) : (
                <div className="flex w-full justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="submit" onClick={handleSubmit}>
                    Register
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>

          <p className="px-8 text-center text-sm text-muted-foreground mt-4">
            By clicking register, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>
          </p>

          <p className="px-8 text-center text-sm text-muted-foreground mt-2">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline underline-offset-4 hover:text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
