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
    image: './images/yoga-arcoiris.webp',
    title: 'Yoga Arcoíris',
    description:
      'Recorrido consciente por los chakras, para conectar con cada centro energético. Incluye prácticas, meditaciones y acompañamiento grupal.',
    link: '#', // Replace with actual Hotmart link
    linkText: 'Ver en Hotmart'
  },
  {
    image: './images/yoga-arcoiris.webp', // Will be replaced with ciclo femenino image
    title: 'Sintoniza con tu Ciclo Femenino',
    description:
      'Yoga consciente para acompañar, comprender y respetar tu ciclicidad femenina. Dirigido a mujeres deportistas y profesoras.',
    link: '#', // Replace with actual Hotmart link
    linkText: 'Ver en Hotmart'
  }
]

export const ProductsSection = () => {
  return (
    <SectionStyle id="productos">
      <SectionContainer>
        <SectionHeader>
          <h2>Programas y Ebooks</h2>
          <p>Recursos digitales para tu práctica personal</p>
        </SectionHeader>

        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage>
                <img src={product.image} alt={product.title} />
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
