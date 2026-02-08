import styled, { keyframes, css } from 'styled-components'

const navItemFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const navItemAnimation = ({ $index }) => css`
  animation: ${navItemFade} 0.4s ease forwards ${$index / 8 + 0.2}s;
`

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  transition: all 0.4s ease;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ $scroll }) =>
    $scroll === 'down' ? 'none' : '0 2px 20px rgba(142, 106, 174, 0.1)'};
  top: ${({ $scroll }) => ($scroll === 'down' ? '-70px' : '0')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 1rem;
  }
`

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 200ms ease;

  img {
    height: 50px;
    width: auto;
    object-fit: contain;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      height: 42px;
    }
  }
`

export const MenuIcon = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  display: none;
  position: relative;
  z-index: 101;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`

export const MenuLine = styled.div`
  width: 25px;
  height: 2px;
  background: ${({ theme }) => theme.colors.violetDeep};
  transition: all 0.3s ease;
  border-radius: 2px;

  &:nth-child(1) {
    transform: ${({ $open }) =>
      $open ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $open }) =>
      $open ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: all 0.4s ease;
    z-index: 99;
  }
`

export const NavItem = styled.li`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    ${({ $open }) => ($open ? navItemAnimation : null)};
  }
`

export const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.violet};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.violetDeep};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
  }
`

export const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${({ theme }) => theme.colors.greenDeep};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(111, 154, 106, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`
