import { FaLaptop, FaHouse, FaHeart, FaSpa, FaPersonRunning } from 'react-icons/fa6'
import { FaChevronRight } from 'react-icons/fa6'
import { whatsappLink } from '../../data/contact'
import { trackWhatsAppClick } from '../../lib/analytics'
import {
  SectionStyle,
  SectionContainer,
  SectionHeader,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceQuote,
  ActivitiesList,
  ActivityTag,
  CTAContainer,
  CTAButton
} from '../styles/sections/ServicesSection.styled'

const services = [
  {
    icon: FaSpa,
    title: 'Yoga Presencial',
    description:
      'Encuentros en un espacio acogedor, creado con amor. Yoga integral, terapéutico y adaptado.'
  },
  {
    icon: FaLaptop,
    title: 'Yoga Online',
    description: 'Prácticas en vivo a través de Google Meet. Yoga desde la comodidad de tu hogar.'
  },
  {
    icon: FaHouse,
    title: 'Yoga a Domicilio',
    description:
      'Yoga adaptado especialmente para vos, en tu hogar. Prácticas personalizadas.'
  },
  {
    icon: FaPersonRunning,
    title: 'Yoga para Deportistas',
    description:
      'Acompañamiento consciente para alumnas, profes y mujeres que practican deporte. Un enfoque amoroso que cuida el cuerpo y respeta los ciclos naturales, integrando conciencia corporal y propiocepción para mejorar el rendimiento de manera sostenible y consciente.',
    quote:
      'Este enfoque te puede servir tanto para entender tu propio cuerpo como para acompañar a mujeres de tu entorno (alumnas, compañeras, amigas) desde una mirada respetuosa y amorosa.'
  },
  {
    icon: FaHeart,
    title: 'Sesiones de Reiki',
    description:
      'Sanación energética presencial o a distancia. Armonización de cuerpo y espíritu.'
  }
]

const activities = [
  'Yoga en duplas',
  'Yoga para deportistas',
  'Yoga para el ciclo femenino',
  'Ceremonias de mujeres',
  'Cumples holísticos'
]

export const ServicesSection = () => {
  const link = whatsappLink('Hola! Quiero agendar mi clase de prueba 🧘‍♀️')

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
              {service.quote && <ServiceQuote>{service.quote}</ServiceQuote>}
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ActivitiesList>
          {activities.map((activity, index) => (
            <ActivityTag key={index}>{activity}</ActivityTag>
          ))}
        </ActivitiesList>

        <CTAContainer>
          <CTAButton
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('servicios')}
          >
            Agenda tu clase de prueba
            <FaChevronRight />
          </CTAButton>
        </CTAContainer>
      </SectionContainer>
    </SectionStyle>
  )
}
