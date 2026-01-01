"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CheckCircle2, Clock, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Tasks",
    value: "24",
    change: "+12%",
    icon: Activity,
    description: "from last month",
  },
  {
    title: "Completed",
    value: "18",
    change: "+8%",
    icon: CheckCircle2,
    description: "from last month",
  },
  {
    title: "In Progress",
    value: "4",
    change: "+2",
    icon: Clock,
    description: "active now",
  },
  {
    title: "Productivity",
    value: "94%",
    change: "+5%",
    icon: TrendingUp,
    description: "completion rate",
  },
]

const recentTasks = [
  { id: 1, title: "Design new dashboard layout", status: "completed", time: "2 hours ago" },
  { id: 2, title: "Fix authentication bug", status: "in-progress", time: "5 hours ago" },
  { id: 3, title: "Update documentation", status: "pending", time: "1 day ago" },
  { id: 4, title: "Review pull requests", status: "completed", time: "2 days ago" },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here&apos;s what&apos;s happening with your tasks today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-primary font-medium">{stat.change}</span> {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest tasks and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      task.status === "completed"
                        ? "bg-green-500"
                        : task.status === "in-progress"
                          ? "bg-primary"
                          : "bg-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.time}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    task.status === "completed"
                      ? "bg-green-500/10 text-green-500"
                      : task.status === "in-progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {task.status.replace("-", " ")}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
