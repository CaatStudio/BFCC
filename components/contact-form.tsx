"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#3bb6b0]/10 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-[#3bb6b0]" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">We've received your request and will get back to you shortly.</p>
        <Button
          variant="outline"
          className="bg-white text-[#3bb6b0] border-[#3bb6b0]"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Needed</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential Cleaning</SelectItem>
            <SelectItem value="deep">Deep Cleaning</SelectItem>
            <SelectItem value="move">Move In/Out Cleaning</SelectItem>
            <SelectItem value="recurring">Recurring Cleaning</SelectItem>
            <SelectItem value="office">Office Cleaning</SelectItem>
            <SelectItem value="event">Special Event Cleaning</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Tell us about your cleaning needs..." rows={3} />
      </div>
      <Button type="submit" className="bg-[#3a74ba] hover:bg-[#3a74ba]/90 text-white w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request a Quote"}
      </Button>
    </form>
  )
}
