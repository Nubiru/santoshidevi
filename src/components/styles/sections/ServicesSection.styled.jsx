import styled from 'styled-components'

export const SectionStyle = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
`

export const SectionContainer = styled.div`
  max-width: 1200px;
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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`

export const ActivitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2.5rem;
`

export const ActivityTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: ${({ theme }) => theme.colors.violetLight};
  color: ${({ theme }) => theme.colors.violetDeep};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.violet};
`

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(142, 106, 174, 0.1);
  transition: transform 200ms ease, box-shadow 200ms ease;
  border: 1px solid ${({ theme }) => theme.colors.violetLight};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(142, 106, 174, 0.15);
  }
`

export const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.2rem;
  background: ${({ theme }) => theme.colors.violetLight};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.violetDeep};
  }
`

export const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.violetDeep};
  margin-bottom: 0.8rem;
  font-weight: 500;
`

export const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`

export const ServiceQuote = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.violetDeep};
  font-style: italic;
  line-height: 1.5;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px solid ${({ theme }) => theme.colors.violetLight};
`

export const CTAContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.greenDeep};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(111, 154, 106, 0.3);
  }
`
