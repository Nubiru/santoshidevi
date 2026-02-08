import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import {
  Logo,
  MenuIcon,
  MenuLine,
  Nav,
  NavItem,
  NavLink,
  NavList,
  WhatsAppButton
} from '../styles/layout/Nav.styled'
import useScrollDirection from '../../hooks/useScrollDirection'

const navItems = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Sobre mí', href: '#sobre-mi' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Guías', href: '#productos' },
  { text: 'Testimonios', href: '#testimonios' },
  { text: 'Contacto', href: '#contacto' }
]

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection('down')

  // WhatsApp config
  const whatsappNumber = '5491157940342' // +54 911 5794 0342
  const whatsappMessage = encodeURIComponent(
    'Hola! Me interesa conocer más sobre las clases de yoga 🧘‍♀️'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <Nav $scroll={scrollDirection}>
      <Logo href="#inicio">
        <img src="./images/logo-nav.webp" alt="Santoshi Devi Yoga" />
      </Logo>

      <MenuIcon $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <MenuLine $open={menuOpen} />
        <MenuLine $open={menuOpen} />
        <MenuLine $open={menuOpen} />
      </MenuIcon>

      <NavList $open={menuOpen}>
        {navItems.map((item, index) => (
          <NavItem key={index} $index={index} $open={menuOpen}>
            <NavLink href={item.href} onClick={() => setMenuOpen(false)}>
              {item.text}
            </NavLink>
          </NavItem>
        ))}
        <NavItem $index={navItems.length} $open={menuOpen}>
          <WhatsAppButton
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <FaWhatsapp />
            WhatsApp
          </WhatsAppButton>
        </NavItem>
      </NavList>
    </Nav>
  )
}
