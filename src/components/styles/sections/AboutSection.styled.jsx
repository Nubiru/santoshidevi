import styled from 'styled-components'

export const SectionStyle = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.greenLight} 100%
  );
`

export const SectionContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 380px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    order: -1;

    img {
      max-width: 260px;
    }
  }
`

export const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.violetDeep};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    h2 {
      font-size: 2rem;
    }
  }
`

export const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-left: 4px solid ${({ theme }) => theme.colors.violet};
  padding: 1.2rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 10px 10px 0;

  p {
    font-style: italic;
    margin: 0;
    color: ${({ theme }) => theme.colors.violetDeep};
  }
`

export const CertificationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`

export const CertBadge = styled.span`
  background: ${({ theme }) => theme.colors.violetLight};
  color: ${({ theme }) => theme.colors.violetDeep};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`

// Método section
export const MetodoSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.violetLight};
`

export const MetodoContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`

export const MetodoHeader = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.violetDeep};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 2rem;
    }
  }
`

export const MetodoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto;
  }
`

export const MetodoCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(142, 106, 174, 0.1);

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.violet};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.violetDeep};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }
`
