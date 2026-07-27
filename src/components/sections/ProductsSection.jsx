import { FaArrowRight } from 'react-icons/fa6'
import {
  SectionStyle,
  SectionContainer,
  SectionHeader,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductDescription,
  ProductButton
} from '../styles/sections/ProductsSection.styled'

const products = [
  {
    image: './images/tapa-yoga-arcoiris.webp',
    title: 'Yoga Arcoíris',
    description:
      'Recorrido consciente por los chakras, para conectar con cada centro energético. Incluye prácticas, meditaciones y acompañamiento grupal.',
    link: 'https://hotmart.com/es/marketplace/productos/yoga-arcoiris/N101700640M',
    linkText: 'Ver en Hotmart'
  },
  {
    image: './images/tapa-ciclo-femenino.webp',
    title: 'Sintoniza con tu Ciclo Femenino',
    description:
      'Guía de yoga y conciencia corporal dirigida a mujeres, profes y personas que acompañan mujeres en actividades físicas o deportivas. Propone conocer y respetar los ciclos femeninos de manera amorosa, cuidando el cuerpo y la energía, y favoreciendo un rendimiento consciente y sostenible.',
    link: 'https://go.hotmart.com/N98543505A?dp=1',
    linkText: 'Ver en Hotmart'
  }
]

export const ProductsSection = () => {
  return (
    <SectionStyle id="productos">
      <SectionContainer>
        <SectionHeader>
          <h2>Guías Digitales</h2>
          <p>Guías digitales con recursos para cultivar tu práctica</p>
        </SectionHeader>

        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage>
                <img src={product.image} alt={product.title} loading="lazy" />
              </ProductImage>
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductButton
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.linkText}
                  <FaArrowRight />
                </ProductButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </SectionContainer>
    </SectionStyle>
  )
}
