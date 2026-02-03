import styled from 'styled-components'

export const SectionStyle = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.violetLight} 100%
  );
`

export const SectionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

export const SectionHeader = styled.div`
  margin-bottom: 2rem;

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

export const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 30px rgba(142, 106, 174, 0.15);
`

export const ContactText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export const WhatsAppCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: ${({ theme }) => theme.colors.greenDeep};
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 2rem;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(111, 154, 106, 0.4);
  }
`

export const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.violetLight};
`

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.violet};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.violetDeep};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.violetLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.violetDeep};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.violet};
    color: white;
    transform: translateY(-3px);
  }
`
