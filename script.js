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

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", toggleMobileMenu)
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", closeMobileMenu)
}

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu)
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (mobileMenu && !mobileMenu.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
    closeMobileMenu()
  }
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")

if (contactForm) {
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
      showSuccessMessage("Thank you for your message! We'll get back to you within 24 hours.")

      // Reset form
      contactForm.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 1500)
  })
}

// Utility Functions
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
  console.log("Best Friends Cleaning Company website loaded successfully!")
})
