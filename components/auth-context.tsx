"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type UserType = {
  name: string
  email: string
  phone: string
  address: string
  dateOfBirth: string
  age: string
  gender: string
  bloodGroup: string
  organDonations?: string[]
  tissueDonations?: string[]
  healthStatus?: string
  organNeeded?: string
  medicalHistory?: string
  urgencyLevel?: string
  medicalLicenseNumber?: string
  specialization?: string
  hospitalAffiliation?: string
  yearsOfExperience?: string
  adminRole?: string
  department?: string
  employeeId?: string
  joinedDate: string
  lastUpdated: string
}

type AuthContextType = {
  isLoggedIn: boolean
  userRole: string | null
  userData: UserType | null
  login: (role: string, userData: UserType) => void
  logout: () => void
  updateUserData: (data: Partial<UserType>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserType | null>(null)

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn")
    const storedUserRole = localStorage.getItem("userRole")
    const storedUserData = localStorage.getItem("userData")

    if (storedLoginState === "true") {
      setIsLoggedIn(true)
      setUserRole(storedUserRole)
      if (storedUserData) {
        try {
          setUserData(JSON.parse(storedUserData))
        } catch (e) {
          console.error("Failed to parse user data", e)
        }
      }
    }
  }, [])

  const login = (role: string, newUserData: UserType) => {
    setIsLoggedIn(true)
    setUserRole(role)
    setUserData(newUserData)
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userRole", role)
    localStorage.setItem("userData", JSON.stringify(newUserData))
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
    setUserData(null)
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userRole")
    localStorage.removeItem("userData")
  }

  const updateUserData = (data: Partial<UserType>) => {
    if (userData) {
      const updatedData = { ...userData, ...data, lastUpdated: new Date().toLocaleDateString() }
      setUserData(updatedData)
      localStorage.setItem("userData", JSON.stringify(updatedData))
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, userData, login, logout, updateUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
