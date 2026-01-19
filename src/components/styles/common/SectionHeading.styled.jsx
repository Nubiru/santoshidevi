import styled from 'styled-components'

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 7rem;
  h1 {
    /* all section headings */

    text-transform: uppercase;
    display: inline-block;
    font-size: 2rem;
    margin: 0.5rem 0 1.5rem 0;
    position: relative;

    /* the line under all section headings */
    &::after {
      content: '';
      display: block;
      height: 5px;
      width: 50%;
      background: ${({ theme }) => theme.colors.purple};
      position: absolute;
      border-radius: 30px;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
    }
  }

  /* the tag under all section headings */

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    margin-bottom: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
  }
`
