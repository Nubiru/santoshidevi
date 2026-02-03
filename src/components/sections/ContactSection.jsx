import { FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa6'
import {
  SectionStyle,
  SectionContainer,
  SectionHeader,
  ContactCard,
  ContactText,
  WhatsAppCTA,
  ContactLinks,
  ContactLink,
  SocialLinks,
  SocialLink
} from '../styles/sections/ContactSection.styled'

export const ContactSection = () => {
  // WhatsApp config
  const whatsappNumber = '5491112345678'
  const whatsappMessage = encodeURIComponent(
    'Hola Vero! Me gustaría consultar sobre las clases de yoga 🧘‍♀️'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <SectionStyle id="contacto">
      <SectionContainer>
        <SectionHeader>
          <h2>Contacto</h2>
          <p>Estoy acá para acompañarte</p>
        </SectionHeader>

        <ContactCard>
          <ContactText>
            Si tenés dudas, querés reservar una clase o simplemente conocer más
            sobre las prácticas, escribime. Estaré feliz de acompañarte en tu
            camino.
          </ContactText>

          <WhatsAppCTA
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Escribime por WhatsApp
          </WhatsAppCTA>

          <ContactLinks>
            <ContactLink href="mailto:santoshideviyoga11@gmail.com">
              <FaEnvelope />
              santoshideviyoga11@gmail.com
            </ContactLink>
          </ContactLinks>

          <SocialLinks>
            <SocialLink
              href="https://instagram.com/santoshideviyoga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href="https://youtube.com/@santoshideviyoga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </ContactCard>
      </SectionContainer>
    </SectionStyle>
  )
}
