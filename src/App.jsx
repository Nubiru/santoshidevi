//import reactLogo from './assets/react.svg'
//import Logo from '/logo.svg'
// import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
// import { Switch } from './components/layout/Switch'
import { GlobalStyles } from './components/styles/Globals.styled'
import { NavBar } from './components/layout/NavBar'
import { TopBanner } from './components/layout/TopBanner'
import { HeroSection } from './components/sections/HeroSection'
import { Container } from './components/styles/common/Container.styled'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectSection } from './components/sections/ProjectSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/layout/Footer'
// import { FaFlagUsa } from 'react-icons/fa6'

export default function App() {
  const theme = {
    colors: {
      white: 'rgba(255, 255, 255, 1)',
      cream: 'rgba(250, 245, 235, 1)',
      sage: 'rgba(156, 175, 136, 1)',
      deepPurple: 'rgba(75, 46, 131, 1)',
      lotus: 'rgba(216, 191, 216, 1)',
      earth: 'rgba(139, 119, 101, 1)',
      accent: 'rgba(212, 175, 55, 1)'
    },
    mobile: '768px',
    transition: 'all 650ms ease-in-out'
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopBanner />
        <NavBar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ProjectSection />
          <ServicesSection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}
