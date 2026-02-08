import styled from 'styled-components'

export const FooterStyle = styled.footer`
  background: ${({ theme }) => theme.colors.violetDeep};
  color: white;
  padding: 3rem 2rem 2rem;
  text-align: center;
`

export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: all 200ms ease;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    color: white;
  }
`

export const FooterLogo = styled.div`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  color: white;
`

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 200ms ease;

    &:hover {
      color: white;
    }
  }
`

export const FooterDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1.5rem 0;
`

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`

export const FooterText = styled.span``
