import { FaEnvelope, FaInstagram } from 'react-icons/fa6'
import { SectionHeading } from '../styles/common/SectionHeading.styled'
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  SectionStyle
} from '../styles/sections/ContactSection.styled'

export const ContactSection = () => {
  return (
    <>
      <SectionStyle id="contact">
        <SectionHeading>
          <h1>Contact</h1>
          <p>Get in touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              Even if you are not completely sure what kind of help you need, I
              would love to be contacted by you!
            </p>
            <p>
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos provident impedit distinctio corporis, modi animi
                minus et <strong>lorem</strong> Minus
              </i>
            </p>
            <div>
              <a href="mail.to:isaacnassif.com">
                <FaEnvelope />
                <span>isaacnassif@gmail.com</span>
              </a>
              <a href="#" target="_blank">
                <FaInstagram />
                <span>My Insta</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/contact.svg" alt="contact"></img>
          </ImageWrapper>
        </DetailsWrapper>
      </SectionStyle>
    </>
  )
}
