import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLocationDot,
  FaRegClock
} from 'react-icons/fa6'
import {
  whatsappLink,
  EMAIL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  GOOGLE_MAPS_URL,
  ADDRESS,
  SCHEDULE
} from '../../data/contact'
import { trackWhatsAppClick } from '../../lib/analytics'
import {
  SectionStyle,
  SectionContainer,
  SectionHeader,
  ContactCard,
  ContactText,
  VisitInfo,
  VisitItem,
  WhatsAppCTA,
  ContactLinks,
  ContactLink,
  SocialLinks,
  SocialLink
} from '../styles/sections/ContactSection.styled'

export const ContactSection = () => {
  const link = whatsappLink(
    'Hola Vero! Me gustaría recibir más info sobre las clases 🧘‍♀️'
  )

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

          <VisitInfo>
            <VisitItem>
              <FaLocationDot />
              <div>
                <h3>Dónde</h3>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ADDRESS.street}, {ADDRESS.neighborhood}
                </a>
                <span>{ADDRESS.city}</span>
                <span>También clases online y a domicilio</span>
              </div>
            </VisitItem>

            <VisitItem>
              <FaRegClock />
              <div>
                <h3>Horarios</h3>
                {SCHEDULE.map((slot) => (
                  <span key={slot.days}>
                    <strong>{slot.days}</strong> · {slot.times} ({slot.mode})
                  </span>
                ))}
              </div>
            </VisitItem>
          </VisitInfo>

          <WhatsAppCTA
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('contacto')}
          >
            <FaWhatsapp />
            Escribime para más info
          </WhatsAppCTA>

          <ContactLinks>
            <ContactLink href={`mailto:${EMAIL}`}>
              <FaEnvelope />
              {EMAIL}
            </ContactLink>
          </ContactLinks>

          <SocialLinks>
            <SocialLink
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href={YOUTUBE_URL}
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
