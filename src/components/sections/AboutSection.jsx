import { FaHeart, FaEye, FaSpa } from 'react-icons/fa6'
import {
  SectionStyle,
  SectionContainer,
  ImageContainer,
  AboutContent,
  HighlightBox,
  CertificationsList,
  CertBadge,
  MetodoSection,
  MetodoContainer,
  MetodoHeader,
  MetodoGrid,
  MetodoCard
} from '../styles/sections/AboutSection.styled'

const certifications = [
  'Yoga Purna Integral',
  'Yoga Terapéutico',
  'Yoga Vinyasa',
  'Yoga Nidra',
  'Yoga Embarazadas',
  'Reiki'
]

export const AboutSection = () => {
  return (
    <>
      <SectionStyle id="sobre-mi">
        <SectionContainer>
          <AboutContent>
            <h2>Hola, soy Vero</h2>
            <p>
              Santoshi Devi Yoga nace de mi recorrido personal y profesional
              compartiendo prácticas de yoga y bienestar desde el año 2018. Es un
              espacio sagrado, creado con amor y con el deseo de compartir todo
              aquello que haga bien al cuerpo, la mente y el espíritu.
            </p>
            <p>
              Mi misión es acompañarte a habitar tu cuerpo con conciencia,
              cultivando el bienestar y el amor propio, respetando las posibilidades
              reales de tu cuerpo en cada práctica.
            </p>

            <HighlightBox>
              <p>
                &quot;La práctica se adapta al cuerpo, no el cuerpo a la práctica.
                Cada día es distinto, cada cuerpo es único.&quot;
              </p>
            </HighlightBox>

            <CertificationsList>
              {certifications.map((cert, index) => (
                <CertBadge key={index}>{cert}</CertBadge>
              ))}
            </CertificationsList>
          </AboutContent>

          <ImageContainer>
            <img src="./images/vero-meditation.webp" alt="Vero en meditación - Santoshi Devi Yoga" loading="lazy" />
          </ImageContainer>
        </SectionContainer>
      </SectionStyle>

      <MetodoSection id="metodo">
        <MetodoContainer>
          <MetodoHeader>
            <h2>Método Santoshi Devi</h2>
            <p>Un enfoque consciente y terapéutico</p>
          </MetodoHeader>

          <MetodoGrid>
            <MetodoCard>
              <FaHeart />
              <h3>Conciencia corporal</h3>
              <p>
                Escucha profunda del cuerpo, adaptando la práctica a tus posibilidades
                físicas y emocionales del momento.
              </p>
            </MetodoCard>

            <MetodoCard>
              <FaEye />
              <h3>Presencia y sensibilidad</h3>
              <p>
                No se busca forzar ni exigir, sino acompañar con respeto,
                entendiendo que el cuerpo es cambiante y vivo.
              </p>
            </MetodoCard>

            <MetodoCard>
              <FaSpa />
              <h3>Respeto por los ciclos</h3>
              <p>
                Honramos los ritmos naturales del cuerpo, los ciclos vitales
                y las posibilidades de cada momento.
              </p>
            </MetodoCard>
          </MetodoGrid>
        </MetodoContainer>
      </MetodoSection>
    </>
  )
}
