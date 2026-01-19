import { CTAButton } from '../styles/common/CTAButton.styled'
import {
  AboutContent,
  SectionStyle,
  DarkCircle,
  GradientCircle,
  Heading,
  Image,
  ImageContainer,
  StyledEmoji
} from '../styles/sections/AbouSection.styled'
import { useTranslation } from 'react-i18next'

export const AboutSection = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <SectionStyle id="about">
        <ImageContainer>
          <GradientCircle />
          <DarkCircle />
          <Image src="./images/profile.png" alt="Santoshidevi Yoga" />
        </ImageContainer>
        <AboutContent>
          <Heading>
            {t('about.greeting')} <StyledEmoji>👋</StyledEmoji>
          </Heading>
          <p>{t('about.body')}</p>
          <p>
            Our journey began with a simple belief: yoga is for everyone. We blend traditional wisdom with modern accessibility, offering everything from beginner-friendly courses to advanced practices. Whether you're looking for inner peace, physical strength, or community connection, Santoshidevi is your sanctuary.
          </p>
          <CTAButton href="#services">
            {t('about.cta')}
          </CTAButton>
        </AboutContent>
      </SectionStyle>
      <hr />
    </>
  )
}
