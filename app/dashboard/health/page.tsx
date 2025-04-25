"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Activity,
  AlertTriangle,
  Bell,
  Clock,
  Heart,
  TreesIcon as Lungs,
  Settings,
  Shield,
  Waves,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { PulsingHeart } from "@/components/animations/pulsing-heart"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedCard } from "@/components/animations/animated-card"

// Mock health data
const healthData = {
  heartRate: [
    { time: "00:00", value: 62 },
    { time: "04:00", value: 58 },
    { time: "08:00", value: 71 },
    { time: "12:00", value: 84 },
    { time: "16:00", value: 78 },
    { time: "20:00", value: 72 },
    { time: "23:59", value: 65 },
  ],
  bloodPressure: [
    { time: "00:00", systolic: 118, diastolic: 76 },
    { time: "04:00", systolic: 115, diastolic: 74 },
    { time: "08:00", systolic: 124, diastolic: 80 },
    { time: "12:00", systolic: 129, diastolic: 84 },
    { time: "16:00", systolic: 126, diastolic: 82 },
    { time: "20:00", systolic: 122, diastolic: 79 },
    { time: "23:59", systolic: 120, diastolic: 78 },
  ],
  oxygenLevels: [
    { time: "00:00", value: 97 },
    { time: "04:00", value: 96 },
    { time: "08:00", value: 98 },
    { time: "12:00", value: 97 },
    { time: "16:00", value: 96 },
    { time: "20:00", value: 97 },
    { time: "23:59", value: 96 },
  ],
  activityData: [
    { day: "Mon", steps: 8245, calories: 320, distance: 5.2 },
    { day: "Tue", steps: 10123, calories: 410, distance: 6.8 },
    { day: "Wed", steps: 7890, calories: 290, distance: 4.9 },
    { day: "Thu", steps: 9456, calories: 380, distance: 6.1 },
    { day: "Fri", steps: 11234, calories: 450, distance: 7.4 },
    { day: "Sat", steps: 6789, calories: 260, distance: 4.2 },
    { day: "Sun", steps: 5432, calories: 210, distance: 3.5 },
  ],
  weeklyHeartRate: [
    { day: "Mon", min: 58, max: 142, avg: 72 },
    { day: "Tue", min: 56, max: 138, avg: 70 },
    { day: "Wed", min: 57, max: 145, avg: 73 },
    { day: "Thu", min: 59, max: 150, avg: 75 },
    { day: "Fri", min: 60, max: 155, avg: 76 },
    { day: "Sat", min: 55, max: 130, avg: 68 },
    { day: "Sun", min: 54, max: 125, avg: 65 },
  ],
  weeklyBloodPressure: [
    { day: "Mon", systolicAvg: 122, diastolicAvg: 78 },
    { day: "Tue", systolicAvg: 120, diastolicAvg: 76 },
    { day: "Wed", systolicAvg: 124, diastolicAvg: 80 },
    { day: "Thu", systolicAvg: 126, diastolicAvg: 82 },
    { day: "Fri", systolicAvg: 128, diastolicAvg: 84 },
    { day: "Sat", systolicAvg: 118, diastolicAvg: 75 },
    { day: "Sun", systolicAvg: 116, diastolicAvg: 74 },
  ],
  weeklyOxygenLevels: [
    { day: "Mon", min: 95, max: 99, avg: 97 },
    { day: "Tue", min: 94, max: 99, avg: 96 },
    { day: "Wed", min: 95, max: 99, avg: 97 },
    { day: "Thu", min: 94, max: 98, avg: 96 },
    { day: "Fri", min: 95, max: 99, avg: 97 },
    { day: "Sat", min: 94, max: 98, avg: 96 },
    { day: "Sun", min: 95, max: 99, avg: 97 },
  ],
}

// Mock alerts
const healthAlerts = [
  {
    id: 1,
    type: "heart_rate",
    severity: "medium",
    message: "Heart rate elevated to 110 BPM during rest period",
    timestamp: "2025-03-21T10:23:15",
    read: false,
  },
  {
    id: 2,
    type: "blood_pressure",
    severity: "high",
    message: "Blood pressure reading of 145/95 detected",
    timestamp: "2025-03-20T16:45:22",
    read: false,
  },
  {
    id: 3,
    type: "oxygen",
    severity: "low",
    message: "Oxygen level dropped to 93% for 15 minutes",
    timestamp: "2025-03-19T22:12:08",
    read: true,
  },
]

// Mock connected devices
const connectedDevices = [
  { id: 1, name: "Apple Watch Series 9", type: "apple_health", connected: true, lastSync: "2025-03-21T11:30:45" },
  { id: 2, name: "Fitbit Charge 5", type: "fitband", connected: true, lastSync: "2025-03-21T10:15:22" },
]

export default function HealthDashboardPage() {
  const [timeRange, setTimeRange] = useState("today")
  const [activeTab, setActiveTab] = useState("overview")
  const [dataSharing, setDataSharing] = useState({
    heartRate: true,
    bloodPressure: true,
    oxygenLevels: true,
    activityData: true,
  })
  const prefersReducedMotion = useReducedMotion()

  const handleDataSharingChange = (metric: keyof typeof dataSharing) => {
    setDataSharing((prev) => ({
      ...prev,
      [metric]: !prev[metric],
    }))
  }

  const getCustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-sm p-2 text-xs">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  // Animation variants for chart data
  const chartVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PulsingHeart className="h-6 w-6" />
            <span className="text-xl font-bold">ORGANATE</span>
          </motion.div>
          <motion.nav
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link href="/dashboard/health" className="text-sm font-medium text-primary">
                Health Tracking
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link href="/dashboard/matches" className="text-sm font-medium transition-colors hover:text-primary">
                Matches
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link href="/dashboard/messages" className="text-sm font-medium transition-colors hover:text-primary">
                Messages
              </Link>
            </motion.div>
          </motion.nav>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <motion.span
                className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  delay: 0.6,
                }}
              >
                2
              </motion.span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </header>

      <div className="container py-6">
        <div className="flex flex-col gap-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Health Tracking</h1>
              <p className="text-muted-foreground">Monitor your health metrics and share with medical professionals</p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <motion.div whileHover={{ rotate: prefersReducedMotion ? 0 : 90 }} transition={{ duration: 0.3 }}>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {healthAlerts.filter((alert) => !alert.read).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Health Alerts</AlertTitle>
                <AlertDescription>
                  You have {healthAlerts.filter((alert) => !alert.read).length} unread health alerts that require your
                  attention.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatedCard index={0} className="overflow-visible">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                <motion.div whileHover={{ scale: prefersReducedMotion ? 1 : 1.2 }} transition={{ duration: 0.3 }}>
                  <PulsingHeart className="h-4 w-4" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {healthData.heartRate[healthData.heartRate.length - 1].value} BPM
                </motion.div>
                <p className="text-xs text-muted-foreground">Normal range: 60-100 BPM</p>
                <div className="h-[80px] mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                      <AreaChart data={healthData.heartRate} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <defs>
                          <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(148 60% 40%)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(148 60% 40%)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="hsl(148 60% 40%)"
                          fillOpacity={1}
                          fill="url(#heartRateGradient)"
                        />
                      </AreaChart>
                    </motion.div>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard index={1} className="overflow-visible">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
                <motion.div
                  whileHover={{
                    y: prefersReducedMotion ? 0 : [0, -5, 0, -5, 0],
                    transition: { duration: 1 },
                  }}
                >
                  <Waves className="h-4 w-4 text-primary" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {healthData.bloodPressure[healthData.bloodPressure.length - 1].systolic}/
                  {healthData.bloodPressure[healthData.bloodPressure.length - 1].diastolic} mmHg
                </motion.div>
                <p className="text-xs text-muted-foreground">Normal range: &lt;120/80 mmHg</p>
                <div className="h-[80px] mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                      <RechartsLineChart
                        data={healthData.bloodPressure}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <Line
                          type="monotone"
                          dataKey="systolic"
                          stroke="hsl(210 60% 50%)"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="diastolic"
                          stroke="hsl(148 60% 40%)"
                          strokeWidth={2}
                          dot={false}
                        />
                      </RechartsLineChart>
                    </motion.div>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard index={2} className="overflow-visible">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Oxygen Level</CardTitle>
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: [1, 1.1, 1, 1.1, 1],
                          transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 },
                        }
                  }
                >
                  <Lungs className="h-4 w-4 text-primary" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {healthData.oxygenLevels[healthData.oxygenLevels.length - 1].value}%
                </motion.div>
                <p className="text-xs text-muted-foreground">Normal range: 95-100%</p>
                <div className="h-[80px] mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                      <AreaChart data={healthData.oxygenLevels} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <defs>
                          <linearGradient id="oxygenGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(210 60% 50%)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(210 60% 50%)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="hsl(210 60% 50%)"
                          fillOpacity={1}
                          fill="url(#oxygenGradient)"
                        />
                      </AreaChart>
                    </motion.div>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard index={3} className="overflow-visible">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Activity</CardTitle>
                <motion.div
                  whileHover={{
                    rotate: prefersReducedMotion ? 0 : 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Activity className="h-4 w-4 text-primary" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {healthData.activityData[6].steps.toLocaleString()} steps
                </motion.div>
                <p className="text-xs text-muted-foreground">Goal: 10,000 steps</p>
                <div className="h-[80px] mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                      <BarChart data={healthData.activityData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <Bar dataKey="steps" fill="hsl(148 60% 40%)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </motion.div>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="devices">Devices</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="overview" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <ScrollReveal>
                        <Card>
                          <CardHeader>
                            <CardTitle>Heart Rate</CardTitle>
                            <CardDescription>
                              {timeRange === "today" ? "Today's heart rate measurements" : "Weekly heart rate trends"}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[300px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                                  {timeRange === "today" ? (
                                    <RechartsLineChart
                                      data={healthData.heartRate}
                                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="time" />
                                      <YAxis domain={[50, "auto"]} />
                                      <RechartsTooltip content={getCustomTooltip} />
                                      <Line
                                        type="monotone"
                                        dataKey="value"
                                        name="BPM"
                                        stroke="hsl(148 60% 40%)"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                      />
                                    </RechartsLineChart>
                                  ) : (
                                    <RechartsLineChart
                                      data={healthData.weeklyHeartRate}
                                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="day" />
                                      <YAxis domain={[50, "auto"]} />
                                      <RechartsTooltip content={getCustomTooltip} />
                                      <Line
                                        type="monotone"
                                        dataKey="min"
                                        name="Min BPM"
                                        stroke="#8884d8"
                                        strokeWidth={2}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="avg"
                                        name="Avg BPM"
                                        stroke="hsl(148 60% 40%)"
                                        strokeWidth={2}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="max"
                                        name="Max BPM"
                                        stroke="#ff7300"
                                        strokeWidth={2}
                                      />
                                    </RechartsLineChart>
                                  )}
                                </motion.div>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollReveal>

                      <ScrollReveal delay={0.2}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Blood Pressure</CardTitle>
                            <CardDescription>
                              {timeRange === "today"
                                ? "Today's blood pressure measurements"
                                : "Weekly blood pressure trends"}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[300px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                                  {timeRange === "today" ? (
                                    <RechartsLineChart
                                      data={healthData.bloodPressure}
                                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="time" />
                                      <YAxis domain={[60, "auto"]} />
                                      <RechartsTooltip content={getCustomTooltip} />
                                      <Line
                                        type="monotone"
                                        dataKey="systolic"
                                        name="Systolic"
                                        stroke="hsl(210 60% 50%)"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="diastolic"
                                        name="Diastolic"
                                        stroke="hsl(148 60% 40%)"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                      />
                                    </RechartsLineChart>
                                  ) : (
                                    <RechartsLineChart
                                      data={healthData.weeklyBloodPressure}
                                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="day" />
                                      <YAxis domain={[60, "auto"]} />
                                      <RechartsTooltip content={getCustomTooltip} />
                                      <Line
                                        type="monotone"
                                        dataKey="systolicAvg"
                                        name="Systolic Avg"
                                        stroke="hsl(210 60% 50%)"
                                        strokeWidth={2}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="diastolicAvg"
                                        name="Diastolic Avg"
                                        stroke="hsl(148 60% 40%)"
                                        strokeWidth={2}
                                      />
                                    </RechartsLineChart>
                                  )}
                                </motion.div>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollReveal>

                      <ScrollReveal delay={0.3}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Oxygen Levels</CardTitle>
                            <CardDescription>
                              {timeRange === "today"
                                ? "Today's oxygen level measurements"
                                : "Weekly oxygen level trends"}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[300px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                                  {timeRange === "today" ? (
                                    <RechartsLineChart
                                      data={healthData.oxygenLevels}
                                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="time" />
                                      <YAxis domain={[90, 100]} />
                                      <RechartsTooltip content={getCustomTooltip} />
                                      <Line
                                        type="monotone"
                                        dataKey="value"
                                        name="SpO2 %"
                                        stroke="hsl(210 60% 50%)"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                      />
                                    </RechartsLineChart>
                                  ) : (
                                    <RechartsLineChart
                                      data={healthData.weeklyOxygenLevels}
                                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="day" />
                                      <YAxis domain={[90, 100]} />
                                      <RechartsTooltip content={getCustomTooltip} />
                                      <Line
                                        type="monotone"
                                        dataKey="min"
                                        name="Min SpO2 %"
                                        stroke="#8884d8"
                                        strokeWidth={2}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="avg"
                                        name="Avg SpO2 %"
                                        stroke="hsl(210 60% 50%)"
                                        strokeWidth={2}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="max"
                                        name="Max SpO2 %"
                                        stroke="#ff7300"
                                        strokeWidth={2}
                                      />
                                    </RechartsLineChart>
                                  )}
                                </motion.div>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollReveal>

                      <ScrollReveal delay={0.4}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Activity Data</CardTitle>
                            <CardDescription>Weekly activity summary</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[300px]">
                              <ResponsiveContainer width="100%" height="100%">
                                <motion.div initial="hidden" animate="visible" variants={chartVariants}>
                                  <BarChart
                                    data={healthData.activityData}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <RechartsTooltip content={getCustomTooltip} />
                                    <Legend />
                                    <Bar dataKey="steps" name="Steps" fill="hsl(148 60% 40%)" radius={[4, 4, 0, 0]} />
                                    <Bar
                                      dataKey="calories"
                                      name="Calories"
                                      fill="hsl(210 60% 50%)"
                                      radius={[4, 4, 0, 0]}
                                    />
                                  </BarChart>
                                </motion.div>
                              </ResponsiveContainer>
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollReveal>
                    </div>
                  </TabsContent>

                  <TabsContent value="alerts" className="space-y-6 mt-6">
                    <ScrollReveal>
                      <Card>
                        <CardHeader>
                          <CardTitle>Health Alerts</CardTitle>
                          <CardDescription>Notifications about abnormal health parameters</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {healthAlerts.length > 0 ? (
                              healthAlerts.map((alert, index) => (
                                <motion.div
                                  key={alert.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                  }}
                                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                                    !alert.read ? "bg-muted/50" : ""
                                  } ${
                                    alert.severity === "high"
                                      ? "border-destructive/50"
                                      : alert.severity === "medium"
                                        ? "border-orange-500/50"
                                        : "border-muted-foreground/20"
                                  }`}
                                >
                                  <motion.div
                                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
                                    className={`rounded-full p-2 ${
                                      alert.severity === "high"
                                        ? "bg-destructive/20 text-destructive"
                                        : alert.severity === "medium"
                                          ? "bg-orange-500/20 text-orange-500"
                                          : "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {alert.type === "heart_rate" && <Heart className="h-4 w-4" />}
                                    {alert.type === "blood_pressure" && <Waves className="h-4 w-4" />}
                                    {alert.type === "oxygen" && <Lungs className="h-4 w-4" />}
                                  </motion.div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <p className={`text-sm ${!alert.read ? "font-medium" : ""}`}>{alert.message}</p>
                                      {!alert.read && (
                                        <Badge variant="outline" className="text-xs">
                                          New
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {new Date(alert.timestamp).toLocaleString()}
                                    </p>
                                  </div>
                                </motion.div>
                              ))
                            ) : (
                              <div className="text-center py-8">
                                <p className="text-muted-foreground">No health alerts at this time</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="w-full flex justify-between items-center">
                            <Button variant="outline" size="sm">
                              Mark All as Read
                            </Button>
                            <Button variant="outline" size="sm">
                              Alert Settings
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Alert Configuration</CardTitle>
                          <CardDescription>Customize when you receive health alerts</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <h3 className="text-sm font-medium">Heart Rate Alerts</h3>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="heart-rate-high">High threshold (BPM)</Label>
                                  <Input
                                    id="heart-rate-high"
                                    type="number"
                                    className="w-20 text-right"
                                    defaultValue="100"
                                  />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="heart-rate-low">Low threshold (BPM)</Label>
                                  <Input
                                    id="heart-rate-low"
                                    type="number"
                                    className="w-20 text-right"
                                    defaultValue="50"
                                  />
                                </div>
                              </motion.div>

                              <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                              >
                                <h3 className="text-sm font-medium">Blood Pressure Alerts</h3>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="bp-systolic-high">High systolic (mmHg)</Label>
                                  <Input
                                    id="bp-systolic-high"
                                    type="number"
                                    className="w-20 text-right"
                                    defaultValue="140"
                                  />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="bp-diastolic-high">High diastolic (mmHg)</Label>
                                  <Input
                                    id="bp-diastolic-high"
                                    type="number"
                                    className="w-20 text-right"
                                    defaultValue="90"
                                  />
                                </div>
                              </motion.div>

                              <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                              >
                                <h3 className="text-sm font-medium">Oxygen Level Alerts</h3>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="oxygen-low">Low threshold (%)</Label>
                                  <Input id="oxygen-low" type="number" className="w-20 text-right" defaultValue="94" />
                                </div>
                              </motion.div>

                              <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                              >
                                <h3 className="text-sm font-medium">Activity Alerts</h3>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="steps-goal">Daily steps goal</Label>
                                  <Input
                                    id="steps-goal"
                                    type="number"
                                    className="w-20 text-right"
                                    defaultValue="10000"
                                  />
                                </div>
                              </motion.div>
                            </div>

                            <motion.div
                              className="space-y-2 pt-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              <h3 className="text-sm font-medium">Alert Delivery</h3>
                              <div className="flex items-center space-x-2">
                                <Switch id="alert-email" defaultChecked />
                                <Label htmlFor="alert-email">Email notifications</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="alert-sms" defaultChecked />
                                <Label htmlFor="alert-sms">SMS notifications</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="alert-app" defaultChecked />
                                <Label htmlFor="alert-app">In-app notifications</Label>
                              </div>
                            </motion.div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Save Alert Settings</Button>
                        </CardFooter>
                      </Card>
                    </ScrollReveal>
                  </TabsContent>

                  <TabsContent value="devices" className="space-y-6 mt-6">
                    <ScrollReveal>
                      <Card>
                        <CardHeader>
                          <CardTitle>Connected Devices</CardTitle>
                          <CardDescription>Manage your health tracking devices</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {connectedDevices.map((device, index) => (
                              <motion.div
                                key={device.id}
                                className="flex items-center justify-between p-4 rounded-lg border"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.2,
                                  type: "spring",
                                  stiffness: 100,
                                }}
                                whileHover={{
                                  scale: prefersReducedMotion ? 1 : 1.02,
                                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                <div className="flex items-center gap-4">
                                  <div className="rounded-full p-2 bg-primary/10">
                                    {device.type === "apple_health" && <Activity className="h-5 w-5 text-primary" />}
                                    {device.type === "fitband" && <Activity className="h-5 w-5 text-primary" />}
                                  </div>
                                  <div>
                                    <p className="font-medium">{device.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                      Last synced: {new Date(device.lastSync).toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant={device.connected ? "default" : "outline"} className="text-xs">
                                    {device.connected ? "Connected" : "Disconnected"}
                                  </Badge>
                                  <motion.div
                                    whileHover={{ rotate: prefersReducedMotion ? 0 : 90 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Button variant="ghost" size="sm">
                                      <Settings className="h-4 w-4" />
                                    </Button>
                                  </motion.div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline">Sync Now</Button>
                          <Button>Connect New Device</Button>
                        </CardFooter>
                      </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Connect a New Device</CardTitle>
                          <CardDescription>Add a new health tracking device or app</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div
                              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                              whileHover={{
                                scale: prefersReducedMotion ? 1 : 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Activity className="h-12 w-12 mb-4" />
                              <h3 className="font-medium">Connect Apple Health</h3>
                              <p className="text-sm text-muted-foreground text-center mt-2">
                                Sync data from your iPhone or Apple Watch
                              </p>
                            </motion.div>

                            <motion.div
                              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                              whileHover={{
                                scale: prefersReducedMotion ? 1 : 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Activity className="h-12 w-12 mb-4" />
                              <h3 className="font-medium">Connect Fitbit</h3>
                              <p className="text-sm text-muted-foreground text-center mt-2">
                                Sync data from your Fitbit device
                              </p>
                            </motion.div>

                            <motion.div
                              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                              whileHover={{
                                scale: prefersReducedMotion ? 1 : 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Heart className="h-12 w-12 mb-4" />
                              <h3 className="font-medium">Connect Garmin</h3>
                              <p className="text-sm text-muted-foreground text-center mt-2">
                                Sync data from your Garmin device
                              </p>
                            </motion.div>

                            <motion.div
                              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                              whileHover={{
                                scale: prefersReducedMotion ? 1 : 1.05,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Plus className="h-12 w-12 mb-4" />
                              <h3 className="font-medium">Other Devices</h3>
                              <p className="text-sm text-muted-foreground text-center mt-2">
                                Connect other compatible health devices
                              </p>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </TabsContent>

                  <TabsContent value="privacy" className="space-y-6 mt-6">
                    <ScrollReveal>
                      <Card>
                        <CardHeader>
                          <CardTitle>Data Sharing Preferences</CardTitle>
                          <CardDescription>Control who can access your health data</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <h3 className="text-sm font-medium">Share with Medical Professionals</h3>
                              <motion.div
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="space-y-0.5">
                                  <Label htmlFor="share-heart-rate">Heart Rate Data</Label>
                                  <p className="text-xs text-muted-foreground">Share your heart rate measurements</p>
                                </div>
                                <Switch
                                  id="share-heart-rate"
                                  checked={dataSharing.heartRate}
                                  onCheckedChange={() => handleDataSharingChange("heartRate")}
                                />
                              </motion.div>
                              <motion.div
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                              >
                                <div className="space-y-0.5">
                                  <Label htmlFor="share-blood-pressure">Blood Pressure Data</Label>
                                  <p className="text-xs text-muted-foreground">
                                    Share your blood pressure measurements
                                  </p>
                                </div>
                                <Switch
                                  id="share-blood-pressure"
                                  checked={dataSharing.bloodPressure}
                                  onCheckedChange={() => handleDataSharingChange("bloodPressure")}
                                />
                              </motion.div>
                              <motion.div
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                              >
                                <div className="space-y-0.5">
                                  <Label htmlFor="share-oxygen">Oxygen Level Data</Label>
                                  <p className="text-xs text-muted-foreground">Share your oxygen level measurements</p>
                                </div>
                                <Switch
                                  id="share-oxygen"
                                  checked={dataSharing.oxygenLevels}
                                  onCheckedChange={() => handleDataSharingChange("oxygenLevels")}
                                />
                              </motion.div>
                              <motion.div
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                              >
                                <div className="space-y-0.5">
                                  <Label htmlFor="share-activity">Activity Data</Label>
                                  <p className="text-xs text-muted-foreground">Share your activity and exercise data</p>
                                </div>
                                <Switch
                                  id="share-activity"
                                  checked={dataSharing.activityData}
                                  onCheckedChange={() => handleDataSharingChange("activityData")}
                                />
                              </motion.div>
                            </div>

                            <div className="space-y-4 pt-4 border-t">
                              <h3 className="text-sm font-medium pt-2">Access Control</h3>
                              <div className="space-y-4">
                                <motion.div
                                  className="flex items-center justify-between p-3 rounded-lg border"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5 }}
                                  whileHover={{
                                    scale: prefersReducedMotion ? 1 : 1.02,
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Smith" />
                                      <AvatarFallback>DS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="font-medium">Dr. Sarah Smith</p>
                                      <p className="text-xs text-muted-foreground">Nephrologist • City Hospital</p>
                                    </div>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    Manage Access
                                  </Button>
                                </motion.div>

                                <motion.div
                                  className="flex items-center justify-between p-3 rounded-lg border"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  whileHover={{
                                    scale: prefersReducedMotion ? 1 : 1.02,
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Johnson" />
                                      <AvatarFallback>MJ</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="font-medium">Dr. Michael Johnson</p>
                                      <p className="text-xs text-muted-foreground">Cardiologist • Heart Center</p>
                                    </div>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    Manage Access
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="w-full flex justify-between items-center">
                            <Button variant="outline">
                              <Shield className="mr-2 h-4 w-4" />
                              View Access Logs
                            </Button>
                            <Button>Save Privacy Settings</Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Data Management</CardTitle>
                          <CardDescription>Manage your health data storage and retention</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <motion.div
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="space-y-0.5">
                                <Label>Data Retention Period</Label>
                                <p className="text-xs text-muted-foreground">How long your health data is stored</p>
                              </div>
                              <Select defaultValue="1-year">
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select period" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="3-months">3 Months</SelectItem>
                                  <SelectItem value="6-months">6 Months</SelectItem>
                                  <SelectItem value="1-year">1 Year</SelectItem>
                                  <SelectItem value="3-years">3 Years</SelectItem>
                                  <SelectItem value="indefinite">Indefinite</SelectItem>
                                </SelectContent>
                              </Select>
                            </motion.div>

                            <motion.div
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <div className="space-y-0.5">
                                <Label htmlFor="data-anonymization">Data Anonymization</Label>
                                <p className="text-xs text-muted-foreground">
                                  Anonymize your data for research purposes
                                </p>
                              </div>
                              <Switch id="data-anonymization" defaultChecked />
                            </motion.div>

                            <motion.div
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            >
                              <div className="space-y-0.5">
                                <Label htmlFor="data-encryption">Enhanced Encryption</Label>
                                <p className="text-xs text-muted-foreground">
                                  Apply additional encryption to your health data
                                </p>
                              </div>
                              <Switch id="data-encryption" defaultChecked />
                            </motion.div>

                            <motion.div
                              className="pt-4 space-y-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 }}
                            >
                              <Button variant="outline" className="w-full">
                                <Clock className="mr-2 h-4 w-4" />
                                Download My Health Data
                              </Button>
                              <Button variant="destructive" className="w-full">
                                Delete All Health Data
                              </Button>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
