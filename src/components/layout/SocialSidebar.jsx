import { FaWhatsapp, FaInstagram, FaYoutube, FaStore } from 'react-icons/fa6'
import {
  SidebarContainer,
  SidebarLink
} from '../styles/layout/SocialSidebar.styled'

export const SocialSidebar = () => {
  const whatsappNumber = '5491157940342'
  const whatsappMessage = encodeURIComponent(
    'Hola! Me interesa conocer más sobre las clases de yoga 🧘‍♀️'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <SidebarContainer>
      <SidebarLink
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        $color="#25D366"
      >
        <FaWhatsapp />
      </SidebarLink>
      <SidebarLink
        href="https://instagram.com/santoshideviyoga"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        $color="#E4405F"
      >
        <FaInstagram />
      </SidebarLink>
      <SidebarLink
        href="https://www.youtube.com/@santoshideviyoga"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        $color="#FF0000"
      >
        <FaYoutube />
      </SidebarLink>
      <SidebarLink
        href="https://hotmart.com/es/marketplace/productos/yoga-arcoiris/N101700640M"
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
