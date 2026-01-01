import { SignupForm } from "@/components/auth/signup-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <SignupForm />
    </div>
  )
}
