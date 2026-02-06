import styled from 'styled-components'

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 0 12px 12px 0;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    flex-direction: row;
    justify-content: center;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.08);
  }
`

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.colors.violetDeep};
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${({ $color }) => $color || '#8E6AAE'};
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50px;
    height: 50px;

    svg {
      font-size: 1.3rem;
    }
  }
`
