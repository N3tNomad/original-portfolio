"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "../app/contact-action"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitResult(result)

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Send a Message</CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input name="firstName" placeholder="John" required />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input name="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email <span className="text-red-500">*</span>
            </label>
            <Input name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Service Needed</label>
            <select
              name="service"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="virtual-assistant">Virtual Assistant</option>
              <option value="wordpress-development">WordPress Development</option>
              <option value="video-editing">Video Editing</option>
              <option value="multiple-services">Multiple Services</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea name="message" placeholder="Tell me about your project..." rows={4} required />
          </div>

          {submitResult && (
            <div
              className={`p-4 rounded-lg flex items-center space-x-2 ${
                submitResult.success
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitResult.success ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              <span className="text-sm">{submitResult.message}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
          >
            <Mail className="mr-2 h-5 w-5" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
