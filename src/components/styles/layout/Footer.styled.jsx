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

export const FooterLogo = styled.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  transition: opacity 200ms ease;

  img {
    height: 80px;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  &:hover {
    opacity: 0.8;
  }
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
    transition: color 0.3s ease;

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
