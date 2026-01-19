import styled, { keyframes, css } from 'styled-components'

const navItemFade = keyframes`
  from{
  opacity: 0;
  transform: translate(50px);
  }
  to{
  opacity: 1;
  transform: translate(0px);
  }
`

const navItemAnimation = ({ $index }) => css`
  animation: ${navItemFade} 0.5s ease forwards ${$index / 6 + 0.5}s;
`

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background: rgba(2, 12, 27, 0.8);
  top: ${({ $scroll }) => ($scroll === 'down' ? '-80px' : '40px')};
  //TODO: change else of top from 0 to 40px if there is a top banner in use
`

export const Logo = styled.img`
  width: 55px;
  border-radius: 50%;
`

//Language Switch
export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: auto;
  }
`

export const LngBtn = styled.button`
  border: none;
  border-radius: 25px;
  margin-top: 5px;
  padding: 5px 10px;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    background: linear-gradient(
      to left,
      rgba(249, 105, 14, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    transform: scale(0.95);
  }
`

//when the screen is too small, this menu opener appears. composed of following components too
export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ theme, $open }) =>
    $open ? 'none' : theme.colors.lightNavyBlue};
  transition: ${({ theme }) => theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`

export const LineOne = styled.div`
  width: 15px;
  height: 2px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ $open }) =>
    $open ? 'rotate(-45deg) scaleX(2) translate(-6px)' : 'none'};
`

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: ${({ $open }) => ($open ? 0 : 1)};
  transition: ${({ theme }) => theme.transition};
`

export const LineThree = styled.div`
  width: 15px;
  height: 2px;
  margin: 5px 0;
  margin-left: ${({ $open }) => ($open ? 0 : '15px')};
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ $open }) =>
    $open ? 'rotate(45deg) scaleX(2) translate(-5px,1px)' : 'none'};
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? 0 : '-24rem')};
    padding: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 9;
    transition: ${({ theme }) => theme.transition};
  }
`

export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ $open }) => ($open ? navItemAnimation : null)};
  }
`

export const NavLink = styled.a`
  text-transform: lowerscase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 3px;
    background: ${({ theme }) => theme.colors.orange};
    transition: all 300ms ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`
export const SocialIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`
