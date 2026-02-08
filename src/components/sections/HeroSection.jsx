import { FaWhatsapp, FaChevronDown } from 'react-icons/fa6'
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
  // WhatsApp number
  const whatsappNumber = '5491157940342' // +54 911 5794 0342
  const whatsappMessage = encodeURIComponent(
    'Hola! Me interesa conocer más sobre las clases de yoga 🧘‍♀️'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <HeroSectionStyle id="inicio">
      <HeroContainer>
        <HeroContent>
          <Logo>
            <img src="./images/logo-large.webp" alt="Santoshi Devi Yoga" />
          </Logo>

          <Headline>
            Prácticas para habitar el cuerpo con conciencia
          </Headline>

          <Subheadline>
            Yoga amoroso para todas las etapas de tu vida, respetando el cuerpo
            y sus ritmos naturales.
          </Subheadline>

          <CTAButton
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            $whatsapp
          >
            <FaWhatsapp />
            Contactame por WhatsApp
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
