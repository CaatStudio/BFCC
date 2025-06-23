// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const mobileMenuClose = document.getElementById("mobileMenuClose")

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active")
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active")
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu)
mobileMenuClose.addEventListener("click", closeMobileMenu)

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu)
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    closeMobileMenu()
  }
})

// Testimonial Carousel
let currentTestimonial = 0
const testimonials = document.querySelectorAll(".testimonial-card")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

function showTestimonial(index) {
  // Hide all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active")
  })

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  // Show current testimonial and activate corresponding dot
  testimonials[index].classList.add("active")
  dots[index].classList.add("active")
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  showTestimonial(currentTestimonial)
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
  showTestimonial(currentTestimonial)
}

// Event listeners for testimonial controls
nextBtn.addEventListener("click", nextTestimonial)
prevBtn.addEventListener("click", prevTestimonial)

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index
    showTestimonial(currentTestimonial)
  })
})

// Auto-advance testimonials
setInterval(nextTestimonial, 5000)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    // Show success message
    showSuccessMessage("Thank you for your request! We'll get back to you within 24 hours.")

    // Reset form
    contactForm.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1500)
})

// Callback Modal Functions
const callbackModal = document.getElementById("callbackModal")
const callbackForm = document.getElementById("callbackForm")

function openCallbackModal() {
  callbackModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("callbackDate").setAttribute("min", today)
}

function closeCallbackModal() {
  callbackModal.classList.remove("active")
  document.body.style.overflow = ""

  // Reset form
  callbackForm.reset()

  // Hide success message if visible
  const successMessage = callbackModal.querySelector(".success-message")
  if (successMessage) {
    successMessage.remove()
  }

  // Show form if hidden
  const modalBody = callbackModal.querySelector(".modal-body")
  const form = modalBody.querySelector(".callback-form")
  if (form) {
    form.style.display = "grid"
  }
}

// Close modal when clicking outside
callbackModal.addEventListener("click", (e) => {
  if (e.target === callbackModal) {
    closeCallbackModal()
  }
})

// Callback Form Handling
callbackForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(callbackForm)
  const data = Object.fromEntries(formData)

  // Validate business hours (Monday-Friday)
  const selectedDate = new Date(data.callbackDate)
  const dayOfWeek = selectedDate.getDay()

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    alert("Please select a weekday (Monday-Friday) for your callback.")
    return
  }

  // Simulate form submission
  const submitBtn = callbackForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Scheduling..."
  submitBtn.disabled = true

  setTimeout(() => {
    // Hide form and show success message
    callbackForm.style.display = "none"

    const modalBody = callbackModal.querySelector(".modal-body")
    const successMessage = document.createElement("div")
    successMessage.className = "success-message active"
    successMessage.innerHTML = `
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Callback Scheduled!</h3>
            <p>We've scheduled your callback for:</p>
            <p><strong>${formatDate(data.callbackDate)} at ${data.callbackTime}</strong></p>
            <p>One of our cleaning specialists will call you during this time to discuss your cleaning needs and provide a personalized quote.</p>
            <button class="btn btn-outline" onclick="closeCallbackModal()">Close</button>
        `

    modalBody.appendChild(successMessage)

    // Reset button
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1500)
})

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function showSuccessMessage(message) {
  // Create and show a temporary success message
  const successDiv = document.createElement("div")
  successDiv.className = "alert alert-success"
  successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #c3e6cb;
        z-index: 3000;
        max-width: 300px;
    `
  successDiv.textContent = message

  document.body.appendChild(successDiv)

  // Remove after 5 seconds
  setTimeout(() => {
    successDiv.remove()
  }, 5000)
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Show first testimonial
  showTestimonial(0)

  // Add click handlers for quote buttons
  const quoteButtons = document.querySelectorAll(".btn:not([onclick])")
  quoteButtons.forEach((btn) => {
    if (btn.textContent.includes("Quote") || btn.textContent.includes("Book")) {
      btn.addEventListener("click", openCallbackModal)
    }
  })
})
