import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Phone, Mail, Clock, Star, ArrowRight } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-40 h-12 relative">
              <div className="absolute inset-0 flex items-center justify-start">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#3bb6b0] to-[#3a74ba] bg-clip-text text-transparent">
                  Best Friends
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-end mt-5">
                <span className="text-lg font-medium text-[#3a74ba]">Cleaning Company</span>
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-[#3bb6b0] transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#3bb6b0] transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#3bb6b0] transition-colors">
              Testimonials
            </Link>
            <Link href="#service-areas" className="text-sm font-medium hover:text-[#3bb6b0] transition-colors">
              Service Areas
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#3bb6b0] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="tel:+18016891146" className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#3a74ba]" />
              <span className="text-sm font-medium">(801) 689-1146</span>
            </Link>
            <Button className="hidden sm:inline-flex bg-[#3bb6b0] hover:bg-[#3bb6b0]/90 text-white">Get a Quote</Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#3bb6b0]/10 to-[#3a74ba]/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Your Trusted Partner for a <span className="text-[#3bb6b0]">Spotless</span> Home
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-sm md:text-xl">
                    Professional cleaning services in Salt Lake City and surrounding areas. Let us make your home shine
                    while you focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="bg-[#3a74ba] hover:bg-[#3a74ba]/90 text-white">Book Now</Button>
                  <Button variant="outline" className="bg-white text-[#3bb6b0] border-[#3bb6b0]">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="inline-block rounded-full overflow-hidden border-2 border-white h-8 w-8 bg-[#3bb6b0] flex items-center justify-center text-white text-xs font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#3a74ba] text-[#3a74ba]" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Trusted by 500+ happy customers</span>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Clean living room"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Our Cleaning Services
                </h2>
                <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl/relaxed">
                  We offer a variety of cleaning services to meet your needs. All services are customizable to fit your
                  specific requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
              <ServiceCard
                title="Residential Cleaning"
                description="Regular cleaning services for homes of all sizes. We'll keep your living space spotless and comfortable."
                icon="Home"
                features={[
                  "Kitchen & Bathrooms",
                  "Bedrooms & Living Areas",
                  "Dusting & Vacuuming",
                  "Custom Cleaning Plans",
                ]}
              />
              <ServiceCard
                title="Deep Cleaning"
                description="Thorough cleaning of your entire home, including hard-to-reach areas and detailed attention to all surfaces."
                icon="Sparkles"
                features={["Baseboards & Trim", "Inside Appliances", "Window Sills & Tracks", "Cabinet Exteriors"]}
              />
              <ServiceCard
                title="Move In/Out Cleaning"
                description="Comprehensive cleaning services for when you're moving into a new home or leaving your current one."
                icon="Truck"
                features={["Complete Deep Clean", "Inside Cabinets & Drawers", "Appliance Cleaning", "Floor Scrubbing"]}
              />
              <ServiceCard
                title="Recurring Cleaning"
                description="Regular scheduled cleaning services on a weekly, bi-weekly, or monthly basis to maintain a clean home."
                icon="Calendar"
                features={[
                  "Consistent Cleaning Team",
                  "Flexible Scheduling",
                  "Customized Cleaning Plan",
                  "Discounted Rates",
                ]}
              />
              <ServiceCard
                title="Office Cleaning"
                description="Professional cleaning services for commercial spaces to maintain a clean and productive work environment."
                icon="Building"
                features={[
                  "Reception & Common Areas",
                  "Restrooms & Break Rooms",
                  "Dusting & Vacuuming",
                  "Trash Removal",
                ]}
              />
              <ServiceCard
                title="Special Event Cleaning"
                description="Pre and post-event cleaning services to prepare for and clean up after special occasions."
                icon="PartyPopper"
                features={["Pre-Event Preparation", "Post-Event Cleanup", "Quick Turnaround", "Flexible Scheduling"]}
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 bg-gradient-to-r from-[#3bb6b0]/5 to-[#3a74ba]/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] aspect-square relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Best Friends Cleaning Team"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Best Friends Cleaning
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Best Friends Cleaning Company is a locally owned and operated cleaning service based in Salt Lake
                    City, Utah. We take pride in providing exceptional cleaning services with a personal touch.
                  </p>
                </div>
                <ul className="grid gap-2">
                  {[
                    "Family-owned business with over 10 years of experience",
                    "Fully insured and bonded for your peace of mind",
                    "Eco-friendly cleaning products available upon request",
                    "Trained and background-checked cleaning professionals",
                    "100% satisfaction guarantee on all services",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3bb6b0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="bg-[#3a74ba] hover:bg-[#3a74ba]/90 text-white">Our Story</Button>
                  <Button variant="outline" className="bg-white text-[#3bb6b0] border-[#3bb6b0]">
                    Meet Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning
                  services.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <section
          id="service-areas"
          className="w-full py-12 md:py-24 bg-gradient-to-r from-[#3bb6b0]/10 to-[#3a74ba]/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Areas We Serve
                </h2>
                <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl/relaxed">
                  We provide cleaning services throughout Salt Lake City and surrounding areas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {[
                "Salt Lake City",
                "West Valley City",
                "Sandy",
                "West Jordan",
                "South Jordan",
                "Taylorsville",
                "Murray",
                "Holladay",
                "Millcreek",
                "Cottonwood Heights",
                "Draper",
                "Riverton",
                "Herriman",
                "Bluffdale",
                "Midvale",
                "South Salt Lake",
              ].map((area, index) => (
                <Card key={index} className="border-[#3bb6b0]/20 hover:border-[#3bb6b0] transition-colors">
                  <CardContent className="p-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#3a74ba]" />
                    <span className="text-sm font-medium">{area}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="bg-white text-[#3bb6b0] border-[#3bb6b0]">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base lg:text-xl/relaxed">
                    Have questions or ready to schedule a cleaning? Contact us today for a free quote.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3bb6b0]/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#3bb6b0]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground text-sm">(801) 689-1146</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3bb6b0]/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#3bb6b0]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground text-sm break-all">info@bestfriendscleaningcompany.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3bb6b0]/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#3bb6b0]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild className="bg-[#3a74ba] hover:bg-[#3a74ba]/90 text-white">
                    <Link href="/callback">Schedule a Callback</Link>
                  </Button>
                  <Button variant="outline" className="bg-white text-[#3bb6b0] border-[#3bb6b0]">
                    <Link href="tel:+18016891146">Call Us Now</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold">Request a Quote</h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[#3a74ba] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Best Friends Cleaning</h3>
              <p className="text-sm text-white/80">
                Professional cleaning services in Salt Lake City and surrounding areas. Let us make your home shine!
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-white/80">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Move In/Out Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Recurring Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Office Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Special Event Cleaning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Best Friends Cleaning Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
