// Single source of truth for Vero's contact details.
// These appear in NavBar, HeroSection, ServicesSection, ContactSection and
// SocialSidebar — change them here, not in the components.

export const WHATSAPP_NUMBER = '5491157940342' // +54 911 5794 0342

export const EMAIL = 'santoshideviyoga11@gmail.com'

export const INSTAGRAM_URL = 'https://instagram.com/santoshideviyoga'
export const YOUTUBE_URL = 'https://www.youtube.com/@santoshideviyoga'

// Her Google Business listing ("Santoshi Devi Yoga, Terrada 3600, C1419 CABA"),
// where the reviews in TestimonialsSection come from. Shown in ContactSection
// and referenced by the LocalBusiness structured data in index.html.
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/3bqhS1vQpdAHTeDQ7'

// Studio location and class schedule. Google reads these from the JSON-LD in
// index.html, so the visible copy here and the markup there must agree — if the
// schedule changes, update both.
export const ADDRESS = {
  street: 'Terrada 3600',
  neighborhood: 'Agronomía',
  city: 'Ciudad Autónoma de Buenos Aires',
  postalCode: 'C1419'
}

export const SCHEDULE = [
  { days: 'Martes y jueves', times: '10:00 · 16:30 · 18:00 · 19:30', mode: 'Presencial' },
  { days: 'Miércoles', times: '17:00', mode: 'Online grupal' }
]

// Hotmart product pages. Also used by the storefront icon in SocialSidebar,
// which points at Yoga Arcoíris.
export const HOTMART_YOGA_ARCOIRIS =
  'https://hotmart.com/es/marketplace/productos/yoga-arcoiris/N101700640M'
export const HOTMART_CICLO_FEMENINO = 'https://go.hotmart.com/N98543505A?dp=1'

// Builds a wa.me link with a prefilled message. Keep messages aligned with the
// button label that opens them — a CTA promising a trial class shouldn't open a
// chat that says something else.
export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
