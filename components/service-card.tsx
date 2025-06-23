import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Sparkles, Truck, Calendar, Building, PartyPopper } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Home" | "Sparkles" | "Truck" | "Calendar" | "Building" | "PartyPopper"
  features: string[]
}

export function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const IconComponent = {
    Home,
    Sparkles,
    Truck,
    Calendar,
    Building,
    PartyPopper,
  }[icon]

  return (
    <Card className="border-[#3bb6b0]/20 hover:border-[#3bb6b0] transition-colors">
      <CardHeader className="pb-2 p-4 sm:p-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3bb6b0]/10 flex items-center justify-center mb-2">
          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-[#3bb6b0]" />
        </div>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
        <ul className="grid gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#3a74ba] flex-shrink-0" />
              <span className="text-xs sm:text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
