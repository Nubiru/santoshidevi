import { useTranslation } from 'react-i18next'
import { CTAButton } from '../styles/common/CTAButton.styled'
import {
  ArrowDownStyle,
  HeroContent,
  HeroSectionStyle,
  SocialIcon,
  SocialIconLink
} from '../styles/sections/HeroSection.styled'
import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa6'

export const HeroSection = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <HeroSectionStyle id="hero-section">
        <HeroContent>
          <h1>Santoshidevi</h1>
          <h3>{t('hero.profession')}</h3>
          <p>{t('hero.specialization')}</p>
          <div>
            <CTAButton href="#projects">{t('hero.cta1')}</CTAButton>
            <CTAButton href="#contact" $primary="true" $margin="0 0 0 20px">
              {t('hero.cta2')}
            </CTAButton>
          </div>
        </HeroContent>
        <ArrowDownStyle href="#about">
          <FaArrowDown />
        </ArrowDownStyle>
        <SocialIcon>
          <SocialIconLink href="#" target="_blank">
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaTwitter />
          </SocialIconLink>
        </SocialIcon>
      </HeroSectionStyle>
    </>
  )
}
