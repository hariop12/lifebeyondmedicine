"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Calendar, FileText, LogOut, TrendingUp, MessageSquare, Activity, Clock } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface Stats {
  totalBookings: number
  pendingBookings: number
  confirmedBookings: number
  unreadInquiries: number
  recentBookings: any[]
}

export default function AdminDashboard() {
  const router = useRouter()
  const { user, loading: authLoading, logout, isAuthenticated } = useAuth()
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push("/admin/login")
      } else {
        fetchStats()
      }
    }
  }, [authLoading, isAuthenticated, router])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/dashboard/stats")
      if (response.ok) {
        const data = await response.json()
        setStats(data.stats)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  const statCards = [
    {
      label: "Total Bookings",
      value: stats?.totalBookings || 0,
      icon: Calendar,
      color: "bg-blue-500",
    },
    {
      label: "Pending Bookings",
      value: stats?.pendingBookings || 0,
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      label: "Confirmed Bookings",
      value: stats?.confirmedBookings || 0,
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      label: "Unread Messages",
      value: stats?.unreadInquiries || 0,
      icon: MessageSquare,
      color: "bg-purple-500",
    },
  ]

  const quickLinks = [
    { href: "/admin/bookings", label: "Manage Bookings", icon: Calendar },
    { href: "/admin/content", label: "Content Manager", icon: FileText },
    { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Life Beyond Medicine</p>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <link.icon className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
                <span className="font-medium text-gray-700 group-hover:text-green-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "New booking received", time: "2 hours ago", type: "booking" },
              { action: "Content updated", time: "5 hours ago", type: "content" },
              { action: "New inquiry received", time: "1 day ago", type: "inquiry" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 border-l-4 border-green-500 bg-gray-50 rounded">
                <Activity className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {stats?.recentBookings?.map((booking: any) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 p-3 border-l-4 border-green-500 bg-gray-50 rounded"
              >
                <Activity className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {booking.name} - {booking.service}
                  </p>
                  <p className="text-sm text-gray-600">
                    {booking.date} at {booking.time}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    booking.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
