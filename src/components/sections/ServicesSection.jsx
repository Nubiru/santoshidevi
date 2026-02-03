import { FaLaptop, FaHouse, FaHeart, FaSpa } from 'react-icons/fa6'
import { FaChevronRight } from 'react-icons/fa6'
import {
  SectionStyle,
  SectionContainer,
  SectionHeader,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  CTAContainer,
  CTAButton
} from '../styles/sections/ServicesSection.styled'

const services = [
  {
    icon: FaSpa,
    title: 'Clases de yoga presenciales',
    description:
      'Encuentros en un espacio acogedor, creado con amor. Yoga integral, terapéutico y adaptado.'
  },
  {
    icon: FaLaptop,
    title: 'Clases de yoga online',
    description: 'Prácticas en vivo a través de Google Meet. Yoga desde la comodidad de tu hogar.'
  },
  {
    icon: FaHouse,
    title: 'Yoga a domicilio',
    description:
      'Yoga adaptado especialmente para vos, en tu hogar. Prácticas personalizadas.'
  },
  {
    icon: FaHeart,
    title: 'Sesiones de Reiki',
    description:
      'Sanación energética presencial o a distancia. Armonización de cuerpo y espíritu.'
  }
]

export const ServicesSection = () => {
  // WhatsApp config
  const whatsappNumber = '5491157940342' // +54 911 5794 0342
  const whatsappMessage = encodeURIComponent(
    'Hola! Quiero reservar una práctica 🧘‍♀️'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <SectionStyle id="servicios">
      <SectionContainer>
        <SectionHeader>
          <h2>Mis servicios</h2>
          <p>Prácticas conscientes para cada momento de tu vida</p>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                <service.icon />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTAContainer>
          <CTAButton
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservá tu práctica
            <FaChevronRight />
          </CTAButton>
        </CTAContainer>
      </SectionContainer>
    </SectionStyle>
  )
}
