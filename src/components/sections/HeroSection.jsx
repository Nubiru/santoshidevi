import { FaWhatsapp, FaChevronDown } from 'react-icons/fa6'
import { whatsappLink } from '../../data/contact'
import { trackWhatsAppClick } from '../../lib/analytics'
import {
  HeroSectionStyle,
  HeroContainer,
  HeroContent,
  Logo,
  Headline,
  Subheadline,
  CTAButton,
  HeroImage,
  ScrollIndicator
} from '../styles/sections/HeroSection.styled'

export const HeroSection = () => {
  const link = whatsappLink('Hola! Quiero agendar mi clase de prueba 🧘‍♀️')

  return (
    <HeroSectionStyle id="inicio">
      <HeroContainer>
        <HeroContent>
          <Logo>
            <img src="./images/logo-large.webp" alt="Santoshi Devi Yoga" />
          </Logo>

          <Headline>
            Prácticas de yoga, respiración y movimiento consciente para habitar
            el cuerpo con amor
          </Headline>

          <Subheadline>
            Clases presenciales, virtuales y a domicilio. Personalizadas o
            grupales.
          </Subheadline>

          <CTAButton
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            $whatsapp
          >
            <FaWhatsapp />
            Agenda tu clase de prueba
          </CTAButton>
        </HeroContent>

        <HeroImage>
          <img
            src="./images/vero-hero.webp"
            alt="Vero - Santoshi Devi Yoga"
          />
        </HeroImage>
      </HeroContainer>

      <ScrollIndicator href="#sobre-mi">
        <FaChevronDown />
      </ScrollIndicator>
    </HeroSectionStyle>
  )
}
