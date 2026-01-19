import { CodedBy, FooterNav, FooterStyle } from '../styles/layout/Footer.styled'

export const Footer = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <>
      <FooterStyle>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </FooterNav>
        <CodedBy>Built with React.js</CodedBy>
        <div>
          &copy; Santoshidevi | {months[new Date().getMonth()]}{' '}
          {new Date().getFullYear()}
        </div>
      </FooterStyle>
      <hr />
    </>
  )
}
