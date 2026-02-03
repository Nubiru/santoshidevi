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
        <FooterLogo>Santoshi Devi Yoga</FooterLogo>

        <FooterNav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodo">Método</a>
          <a href="#contacto">Contacto</a>
        </FooterNav>

        <FooterDivider />

        <FooterBottom>
          <FooterText>
            © {new Date().getFullYear()} Santoshi Devi Yoga
          </FooterText>
          <FooterText>•</FooterText>
          <FooterText>Buenos Aires, Argentina</FooterText>
        </FooterBottom>
      </FooterContent>
    </FooterStyle>
  )
}
