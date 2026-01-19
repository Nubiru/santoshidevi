import { FaInstagram, FaLink } from 'react-icons/fa6'
import { ProductItems } from '../../data/ProductItems'
import { SectionHeading } from '../styles/common/SectionHeading.styled'
import {
  Description,
  ImageContainer,
  SectionStyle,
  SingleProject,
  SlantedCard,
  Tags
} from '../styles/sections/ProjectSection.styled'

export const ProjectSection = () => {
  return (
    <>
      <SectionStyle id="projects">
        <SectionHeading>
          <h1>Products & Courses</h1>
          <p>Discover our yoga offerings</p>
        </SectionHeading>
        <div>
          {ProductItems &&
            ProductItems.map((product, index) => (
              <SingleProject key={index}>
                <ImageContainer href={product.projectLink} target="_blank">
                  <img src={product.thumbnail} alt={product.title} />
                  <SlantedCard />
                </ImageContainer>

                <Description>
                  <h1>{product.title}</h1>
                  <Tags>
                    {product.tags &&
                      product.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{product.paragraph}</p>
                  <div>
                    <a href={product.codeLink} target="_blank">
                      <FaInstagram />
                      <span>Instagram</span>
                    </a>
                    <a href={product.projectLink} target="_blank">
                      <FaLink />
                      <span>{product.projectLinkText}</span>
                    </a>
                  </div>
                </Description>
              </SingleProject>
            ))}
        </div>
      </SectionStyle>
      <hr />
    </>
  )
}
