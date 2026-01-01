"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, CheckSquare, User, Settings, ChevronLeft, X } from "lucide-react"

interface DashboardSidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar({ isOpen, onToggle }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-16",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-border">
            {isOpen && (
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">T</span>
                </div>
                <span className="font-semibold text-lg">TaskFlow</span>
              </Link>
            )}
            {!isOpen && (
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
            )}
            {/* Close button for mobile/tablet views */}
            {isOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="lg:hidden h-8 w-8 shrink-0"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    !isOpen && "justify-center",
                  )}
                  title={!isOpen ? item.name : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {isOpen && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Collapse button */}
          <div className="p-4 border-t border-border hidden lg:block">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className={cn("w-full", !isOpen && "justify-center px-0")}
            >
              <ChevronLeft className={cn("h-4 w-4 transition-transform", !isOpen && "rotate-180")} />
              {isOpen && <span className="ml-2">Collapse</span>}
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
