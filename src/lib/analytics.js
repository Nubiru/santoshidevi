// Google Analytics 4, loaded only when a measurement ID is configured.
//
// The ID lives in the VITE_GA_ID environment variable (set it in Vercel →
// Project → Settings → Environment Variables, and in a local .env for dev).
// Without it every function here is a no-op and no third-party script is
// requested at all, so the site works exactly the same with analytics off.

const GA_ID = import.meta.env.VITE_GA_ID

export const initAnalytics = () => {
  if (!GA_ID || window.gtag) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  // gtag pushes `arguments` verbatim, so it can't be an arrow function.
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

// Fires a GA4 custom event. Safe to call before (or without) initAnalytics.
export const trackEvent = (name, params = {}) => {
  window.gtag?.('event', name, params)
}

// The two conversions worth counting: someone opening a WhatsApp chat, and
// someone leaving for a Hotmart product page. `location` says which button
// they used, so the report shows which part of the page actually converts.
export const trackWhatsAppClick = (location) =>
  trackEvent('whatsapp_click', { location })

export const trackProductClick = (product) =>
  trackEvent('product_click', { product })
