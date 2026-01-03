"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MessageSquare, Eye, Trash2 } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface Inquiry {
  id: number
  name: string
  email: string
  subject: string
  message: string
  status: "unread" | "read"
  created_at: string
}

export default function AdminInquiries() {
  const router = useRouter()
  const { isAuthenticated, loading: authLoading } = useAuth()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push("/admin/login")
      } else {
        // In production, fetch from API
        // For now, using mock data
        setInquiries([])
        setLoading(false)
      }
    }
  }, [authLoading, isAuthenticated, router])

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
              <p className="text-sm text-gray-600">View and respond to customer inquiries</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {inquiries.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No inquiries found</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{inquiry.subject}</h3>
                      {inquiry.status === "unread" && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">New</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      From: {inquiry.name} ({inquiry.email})
                    </p>
                    <p className="text-gray-700">{inquiry.message}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
