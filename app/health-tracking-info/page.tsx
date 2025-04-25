import { Heart, Activity, Watch, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HealthTrackingInfoPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-12">
        <Heart className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight mb-4">Health Tracking</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Monitor your vital health metrics to ensure optimal organ health and donation compatibility.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <Activity className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Real-time Monitoring</CardTitle>
            <CardDescription>
              Track your vital health metrics in real-time with our advanced monitoring system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our health tracking feature provides continuous monitoring of key health indicators including heart rate,
              blood pressure, oxygen levels, and more. This data helps ensure your organs remain in optimal condition.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Watch className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Wearable Integration</CardTitle>
            <CardDescription>Connect your favorite wearable devices for seamless health data tracking.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Organate integrates with popular wearable devices including Apple Watch, Fitbit, Garmin, and more. Your
              health data is securely synchronized to provide the most accurate picture of your health.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CheckCircle className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Donation Compatibility</CardTitle>
            <CardDescription>
              Ensure your organs meet donation criteria with proactive health monitoring.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our system analyzes your health data to provide insights on organ donation compatibility. Receive
              personalized recommendations to maintain or improve your organ health for potential donation.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Connect Your Device</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-background rounded-full p-4 mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Create an Account</h3>
            <p className="text-sm text-muted-foreground">Register and complete your health profile</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-background rounded-full p-4 mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Connect Device</h3>
            <p className="text-sm text-muted-foreground">Link your wearable through our secure system</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-background rounded-full p-4 mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Grant Permissions</h3>
            <p className="text-sm text-muted-foreground">Allow access to necessary health metrics</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-background rounded-full p-4 mb-4">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Start Tracking</h3>
            <p className="text-sm text-muted-foreground">Begin monitoring your health in real-time</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Tracking Your Health?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Create an account to access our health tracking features and take control of your organ health.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/auth/register">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
