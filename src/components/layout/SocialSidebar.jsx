import { FaWhatsapp, FaInstagram, FaYoutube, FaStore } from 'react-icons/fa6'
import {
  SidebarContainer,
  SidebarLink
} from '../styles/layout/SocialSidebar.styled'
import {
  whatsappLink,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  HOTMART_YOGA_ARCOIRIS
} from '../../data/contact'
import { trackWhatsAppClick } from '../../lib/analytics'

export const SocialSidebar = () => {
  const link = whatsappLink(
    'Hola Vero! Me gustaría recibir más info sobre las clases 🧘‍♀️'
  )

  return (
    <SidebarContainer>
      <SidebarLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        onClick={() => trackWhatsAppClick('sidebar')}
        $color="#25D366"
      >
        <FaWhatsapp />
      </SidebarLink>
      <SidebarLink
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        $color="#E4405F"
      >
        <FaInstagram />
      </SidebarLink>
      <SidebarLink
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        $color="#FF0000"
      >
        <FaYoutube />
      </SidebarLink>
      <SidebarLink
        href={HOTMART_YOGA_ARCOIRIS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hotmart"
        $color="#F04E23"
      >
        <FaStore />
      </SidebarLink>
    </SidebarContainer>
  )
}
