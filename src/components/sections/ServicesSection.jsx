import { FaHeart, FaLeaf, FaPerson } from 'react-icons/fa6'
import { SectionHeading } from '../styles/common/SectionHeading.styled'
import {
  IconWrapper,
  ServicesContainer,
  SectionStyle,
  SingleService
} from '../styles/sections/ServiecesSection.styled'

export const ServicesSection = () => {
  return (
    <>
      <SectionStyle id="services">
        <SectionHeading>
          <h1>Services</h1>
          <p>Our yoga and wellness offerings</p>
        </SectionHeading>
        <ServicesContainer>
          <SingleService>
            <IconWrapper>
              <FaPerson />
            </IconWrapper>
            <h1>Online Yoga Classes</h1>
            <p>
              Live and recorded yoga sessions accessible from anywhere. Join our community of practitioners for daily classes in Hatha, Vinyasa, and restorative yoga styles.
            </p>
          </SingleService>

          <SingleService>
            <IconWrapper>
              <FaLeaf />
            </IconWrapper>
            <h1>Wellness Products</h1>
            <p>
              Premium eco-friendly yoga mats, blocks, straps, and sustainable yoga apparel. All products are ethically sourced and designed for comfort and durability.
            </p>
          </SingleService>

          <SingleService>
            <IconWrapper>
              <FaHeart />
            </IconWrapper>
            <h1>Personal Coaching</h1>
            <p>
              One-on-one sessions with certified yoga instructors tailored to your goals. Whether you're a beginner or advanced practitioner, we guide your journey.
            </p>
          </SingleService>
        </ServicesContainer>
      </SectionStyle>
      <hr />
    </>
  )
}
