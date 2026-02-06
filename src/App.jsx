import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Globals.styled'
import { NavBar } from './components/layout/NavBar'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ProductsSection } from './components/sections/ProductsSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/layout/Footer'
import { SocialSidebar } from './components/layout/SocialSidebar'

export default function App() {
  const theme = {
    colors: {
      // Violeta/Lavanda (marca)
      violet: '#C9A3D8',
      violetLight: '#EFE6F4',
      violetDeep: '#8E6AAE',
      // Verde suave (tierra)
      green: '#A7C7A1',
      greenLight: '#E6F0E4',
      greenDeep: '#6F9A6A',
      // Neutros
      white: '#FAF9F7',
      text: '#4A4A4A',
      // WhatsApp green
      whatsapp: '#25D366'
    },
    mobile: '768px',
    transition: 'all 400ms ease-in-out'
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <SocialSidebar />
    </ThemeProvider>
  )
}
