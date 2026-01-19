import { useState } from 'react'
import { NavItems } from '../../data/NavItems'
import {
  LineOne,
  LineThree,
  LineTwo,
  LngBtn,
  Logo,
  MenuIcon,
  Nav,
  NavItem,
  NavLink,
  NavList,
  Profile,
  SocialIcon,
  SwitchContainer
} from '../styles/layout/Nav.styled'
import { FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa6'
import { CTAButton } from '../styles/common/CTAButton.styled'
import useScrollDirection from '../../hooks/useScrollDirection'
import { useTranslation } from 'react-i18next'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection('down')

  const [t, i18n] = useTranslation('global')

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <Nav $scroll={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo.png" />
          </a>
        </div>
        <MenuIcon $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne $open={menuOpen} />
          <LineTwo $open={menuOpen} />
          <LineThree $open={menuOpen} />
        </MenuIcon>
        {/* //Todo: This must be caught in App, and passed down to all app, control language */}
        <SwitchContainer>
          <p>{t('header.language')}</p>
          <LngBtn onClick={() => handleChangeLanguage('es')}>Español</LngBtn>
          <LngBtn onClick={() => handleChangeLanguage('en')}>English</LngBtn>
        </SwitchContainer>

        <NavList $open={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItem
                key={index}
                $index={index}
                $open={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile && (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img
                        src="./images/profile.png"
                        alt="Cesar Isaac Nasif"
                      ></img>
                      <span>Cesar Isaac Nassif</span>
                    </Profile>
                  </NavLink>
                )}
                {navItem.text && (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                )}
                {navItem.hasSocialIcons && (
                  <SocialIcon>
                    <NavLink href="#" target="_blank">
                      <FaYoutube />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaInstagram />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaTwitter />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaGithub />
                    </NavLink>
                  </SocialIcon>
                )}
                {navItem.hasCTA && (
                  <CTAButton href="#contact">Contactame</CTAButton>
                )}
              </NavItem>
            ))}
        </NavList>
      </Nav>
    </>
  )
}
