import {
  BannerSection,
  TopBannerStyle
} from '../styles/layout/TopBanner.styled'

export const TopBanner = () => {
  return (
    <>
      <TopBannerStyle>
        <BannerSection $show="true">
          <a href="mail.to:isaacnassif.com">isaacnassif@gmail.com</a>
        </BannerSection>
        <BannerSection>
          <p>Available for Hire!</p>
        </BannerSection>
      </TopBannerStyle>
    </>
  )
}
