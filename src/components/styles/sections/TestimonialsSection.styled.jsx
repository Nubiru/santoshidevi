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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  /* Center the last row when items don't fill it */
  & > :last-child:nth-child(3n + 1) {
    grid-column: 2;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    & > :last-child:nth-child(3n + 1) {
      grid-column: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`

export const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.violetLight};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(142, 106, 174, 0.12);
  }

  &::before {
    content: '\u201C';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 4rem;
    font-family: 'Cormorant Garamond', serif;
    color: ${({ theme }) => theme.colors.violet};
    opacity: 0.5;
    line-height: 1;
  }
`

export const TestimonialText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.violet};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  flex-shrink: 0;
`

export const AuthorInfo = styled.div`
  h4 {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.violetDeep};
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }
`
