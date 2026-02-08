import {
  FooterStyle,
  FooterContent,
  FooterLogo,
  FooterNav,
  FooterDivider,
  FooterBottom,
  FooterText
} from '../styles/layout/Footer.styled'

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterContent>
        <FooterLogo href="#inicio">
          <img src="./images/logo-large.webp" alt="Santoshi Devi Yoga" />
        </FooterLogo>

        <FooterNav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#productos">Guías</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </FooterNav>

        <FooterDivider />

        <FooterBottom>
          <FooterText>
            © {new Date().getFullYear()} Santoshi Devi Yoga
          </FooterText>
          <FooterText>Buenos Aires, Argentina</FooterText>
        </FooterBottom>
      </FooterContent>
    </FooterStyle>
  )
}
