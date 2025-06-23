"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format, addDays, isAfter, isBefore, isToday, startOfDay } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

// Available time slots
const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
]

// Business days (0 = Sunday, 6 = Saturday)
const businessDays = [1, 2, 3, 4, 5] // Monday to Friday

export function CallbackScheduler() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Function to check if a date is a business day
  const isBusinessDay = (date: Date) => {
    const day = date.getDay()
    return businessDays.includes(day)
  }

  // Function to disable weekends and past dates
  const disableDate = (date: Date) => {
    const today = startOfDay(new Date())
    const maxDate = addDays(today, 14) // Allow booking up to 2 weeks in advance

    return !isBusinessDay(date) || isBefore(date, today) || isAfter(date, maxDate)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !timeSlot || !name || !phone || !email) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call to Google Calendar
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // In a real implementation, you would:
      // 1. Call your backend API to create a Google Calendar event
      // 2. Send notification to the business about the callback request
      // 3. Send confirmation email to the customer
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[#3bb6b0]/10 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-[#3bb6b0]" />
        </div>
        <h3 className="text-xl font-bold mb-2">Callback Scheduled!</h3>
        <p className="text-muted-foreground mb-2">We've scheduled your callback for:</p>
        <p className="font-medium text-lg mb-4">
          {format(date!, "EEEE, MMMM d, yyyy")} at {timeSlot}
        </p>
        <p className="text-muted-foreground mb-4">
          One of our cleaning specialists will call you during this time to discuss your cleaning needs and provide a
          personalized quote.
        </p>
        <Button
          variant="outline"
          className="bg-white text-[#3bb6b0] border-[#3bb6b0]"
          onClick={() => {
            setIsSubmitted(false)
            setDate(undefined)
            setTimeSlot(undefined)
            setName("")
            setPhone("")
            setEmail("")
            setMessage("")
          }}
        >
          Schedule Another Callback
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label>Select a Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "EEEE, MMMM d, yyyy") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} disabled={disableDate} initialFocus />
          </PopoverContent>
        </Popover>
        {date && (
          <p className="text-xs text-muted-foreground">
            {isToday(date) ? "Today" : format(date, "EEEE, MMMM d, yyyy")}
          </p>
        )}
      </div>

      {date && (
        <div className="space-y-2">
          <Label>Select a Time</Label>
          <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Card
                  key={slot}
                  className={cn(
                    "cursor-pointer transition-colors",
                    timeSlot === slot ? "border-[#3bb6b0]" : "border-muted",
                  )}
                >
                  <CardContent className="p-3 flex items-center gap-2" onClick={() => setTimeSlot(slot)}>
                    <RadioGroupItem value={slot} id={slot} className="text-[#3bb6b0]" />
                    <Label htmlFor={slot} className="cursor-pointer flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#3a74ba]" />
                      <span>{slot}</span>
                    </Label>
                  </CardContent>
                </Card>
              ))}
            </div>
          </RadioGroup>
        </div>
      )}

      {date && timeSlot && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your cleaning needs (optional)</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please provide any details about your cleaning needs to help us prepare for our call."
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#3a74ba] hover:bg-[#3a74ba]/90 text-white"
            disabled={isSubmitting || !date || !timeSlot || !name || !phone || !email}
          >
            {isSubmitting ? "Scheduling..." : "Schedule Callback"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By scheduling a callback, you agree to be contacted by our team during your selected time slot.
          </p>
        </div>
      )}
    </form>
  )
}
