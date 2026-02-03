import styled from 'styled-components'

export const SectionStyle = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.violetLight} 0%,
    ${({ theme }) => theme.colors.white} 100%
  );
`

export const SectionContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.violetDeep};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 2rem;
    }
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`

export const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(142, 106, 174, 0.12);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 35px rgba(142, 106, 174, 0.18);
  }
`

export const ProductImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.violetLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`

export const ProductContent = styled.div`
  padding: 1.5rem;
`

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.violetDeep};
  margin-bottom: 0.8rem;
  font-weight: 500;
`

export const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

export const ProductButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.greenDeep};
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: white;
    transform: translateX(5px);
  }
`
