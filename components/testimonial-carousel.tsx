"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Salt Lake City",
    text: "Best Friends Cleaning has been cleaning my home for over a year now, and I couldn't be happier with their service. They are thorough, reliable, and always go the extra mile to make sure my home is spotless.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    location: "Sandy",
    text: "I hired Best Friends for a deep cleaning before hosting a family gathering, and they exceeded my expectations. Every corner was spotless, and they even cleaned areas I hadn't thought to mention. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer Davis",
    location: "West Jordan",
    text: "As a busy professional, I don't have time to keep my house as clean as I'd like. Best Friends Cleaning comes bi-weekly and has transformed my home. Their attention to detail is impressive, and the team is always friendly.",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    location: "South Jordan",
    text: "We used Best Friends for our move-out cleaning, and our landlord was amazed at how clean the apartment was. We got our full deposit back! Their pricing is fair, and the service is exceptional.",
    rating: 5,
  },
  {
    name: "Emily Martinez",
    location: "Taylorsville",
    text: "I've tried several cleaning services in the area, and Best Friends Cleaning is by far the best. They're consistent, thorough, and use products that don't trigger my allergies. Plus, they're always on time!",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className="border-[#3bb6b0]/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[#3a74ba] text-[#3a74ba]" />
                    ))}
                  </div>
                  <p className="italic mb-4 text-sm sm:text-base">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 sm:mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white text-[#3bb6b0] border-[#3bb6b0] h-8 w-8 sm:h-10 sm:w-10"
          onClick={() => {
            setAutoplay(false)
            prev()
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-2 h-2 p-0 rounded-full ${
              index === current ? "bg-[#3bb6b0] border-[#3bb6b0]" : "bg-transparent border-[#3bb6b0]/30"
            }`}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white text-[#3bb6b0] border-[#3bb6b0] h-8 w-8 sm:h-10 sm:w-10"
          onClick={() => {
            setAutoplay(false)
            next()
          }}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
