"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#3bb6b0] to-[#3a74ba] bg-clip-text text-transparent">
                Best Friends
              </span>
              <span className="text-base font-medium text-[#3a74ba]">Cleaning</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 mt-4">
            <Link
              href="#services"
              className="text-base font-medium hover:text-[#3bb6b0] transition-colors py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-base font-medium hover:text-[#3bb6b0] transition-colors py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-base font-medium hover:text-[#3bb6b0] transition-colors py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Testimonials
            </Link>
            <Link
              href="#service-areas"
              className="text-base font-medium hover:text-[#3bb6b0] transition-colors py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Service Areas
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium hover:text-[#3bb6b0] transition-colors py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-6">
            <Link
              href="tel:+18016891146"
              className="flex items-center gap-2 text-[#3a74ba] font-medium mb-4"
              onClick={handleLinkClick}
            >
              <Phone className="h-4 w-4" />
              <span>(801) 689-1146</span>
            </Link>
            <Button className="w-full bg-[#3bb6b0] hover:bg-[#3bb6b0]/90 text-white" onClick={handleLinkClick}>
              Get a Quote
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
