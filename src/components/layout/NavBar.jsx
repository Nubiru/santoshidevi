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
import { whatsappLink } from '../../data/contact'
import { trackWhatsAppClick } from '../../lib/analytics'

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
  // 'up' keeps the bar visible on load; Nav.styled hides it only on 'down'.
  const scrollDirection = useScrollDirection({ initialDirection: 'up' })

  const link = whatsappLink('Hola Vero! Tengo una consulta 🧘‍♀️')

  return (
    <Nav $scroll={scrollDirection}>
      <Logo href="#inicio">
        <img src="./images/logo-nav.webp" alt="Santoshi Devi Yoga" />
        <span>Santoshi Devi</span>
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
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick('nav')
              setMenuOpen(false)
            }}
          >
            <FaWhatsapp />
            Consultas
          </WhatsAppButton>
        </NavItem>
      </NavList>
    </Nav>
  )
}
