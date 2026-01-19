import styled from 'styled-components'

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 2.5rem;
  color: #7e91ae;
  text-align: center;
  font-size: 16px;
`
export const FooterNav = styled.div`
  a {
    margin-right: 2rem;
  }

  &:last-child {
    margin: 0;
  }
`
export const CodedBy = styled.div`
  margin: 0.7rem 0;
`
