import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { TasksManager } from "@/components/dashboard/tasks-manager"

export default function TasksPage() {
  return (
    <DashboardLayout>
      <TasksManager />
    </DashboardLayout>
  )
}
