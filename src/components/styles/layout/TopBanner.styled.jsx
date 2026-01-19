import styled from 'styled-components'

export const TopBannerStyle = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 40px;
  background: grey;
  color: ${({ theme }) => theme.colors.navyBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 20px;
  z-index: 11;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`

export const BannerSection = styled.div`
  font-family: 'poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  top: 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ show }) => (show ? 'inline-block' : 'none')};
  }
`
