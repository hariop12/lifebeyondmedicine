"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, FileText, Save, Edit2 } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface ContentItem {
  id?: number
  page: string
  section: string
  content_key: string
  content_value: string
}

export default function AdminContent() {
  const router = useRouter()
  const { isAuthenticated, loading: authLoading } = useAuth()
  const [selectedPage, setSelectedPage] = useState("home")
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({})

  const pages = [
    { value: "home", label: "Home Page" },
    { value: "about", label: "About Page" },
    { value: "naturopath", label: "Naturopath Page" },
    { value: "yoga", label: "Yoga Page" },
    { value: "nutritionist", label: "Nutritionist Page" },
    { value: "sujok", label: "Sujok Page" },
    { value: "meditation", label: "Meditation Page" },
    { value: "holistic", label: "Holistic Page" },
    { value: "counselor", label: "Counselor Page" },
    { value: "contact", label: "Contact Page" },
    { value: "faq", label: "FAQ Page" },
  ]

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
        router.push("/admin/login")
      } else {
        fetchContent()
      }
    }
  }, [authLoading, isAuthenticated, router, selectedPage])

  const fetchContent = async () => {
    try {
      const response = await fetch(`/api/content?page=${selectedPage}`)
      if (response.ok) {
        const data = await response.json()
        setContent(data.content || [])
      }
    } catch (error) {
      console.error("Failed to fetch content:", error)
    } finally {
      setLoading(false)
    }
  }

  const saveContent = async (item: ContentItem) => {
    setSaving(true)
    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
      if (response.ok) {
        setEditMode({ ...editMode, [`${item.section}-${item.content_key}`]: false })
        alert("Content saved successfully!")
      }
    } catch (error) {
      console.error("Failed to save content:", error)
      alert("Failed to save content")
    } finally {
      setSaving(false)
    }
  }

  const updateContentValue = (index: number, value: string) => {
    const newContent = [...content]
    newContent[index].content_value = value
    setContent(newContent)
  }

  const toggleEdit = (section: string, key: string) => {
    const editKey = `${section}-${key}`
    setEditMode({ ...editMode, [editKey]: !editMode[editKey] })
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
              <p className="text-sm text-gray-600">Edit content for all pages</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Page Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h2 className="font-semibold text-gray-900 mb-4">Select Page</h2>
              <div className="space-y-2">
                {pages.map((page) => (
                  <button
                    key={page.value}
                    onClick={() => {
                      setSelectedPage(page.value)
                      setLoading(true)
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedPage === page.value
                        ? "bg-green-600 text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Editing: {pages.find((p) => p.value === selectedPage)?.label}
                </h2>
                <FileText className="w-6 h-6 text-gray-400" />
              </div>

              {content.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No content available for this page yet.</p>
                  <p className="text-sm text-gray-500 mt-2">Content will appear here once added to the database.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {content.map((item, index) => {
                    const editKey = `${item.section}-${item.content_key}`
                    const isEditing = editMode[editKey]

                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.section}</h3>
                            <p className="text-sm text-gray-600">{item.content_key}</p>
                          </div>
                          <button
                            onClick={() => toggleEdit(item.section, item.content_key)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>

                        {isEditing ? (
                          <div className="space-y-3">
                            <textarea
                              value={item.content_value}
                              onChange={(e) => updateContentValue(index, e.target.value)}
                              rows={6}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => saveContent(item)}
                                disabled={saving}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                              >
                                <Save className="w-4 h-4" />
                                {saving ? "Saving..." : "Save"}
                              </button>
                              <button
                                onClick={() => toggleEdit(item.section, item.content_key)}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-gray-50 rounded p-3">
                            <p className="text-gray-700 whitespace-pre-wrap">{item.content_value}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
