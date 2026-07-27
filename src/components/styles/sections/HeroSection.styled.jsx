import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`

export const HeroSectionStyle = styled.section`
  width: 100%;
  min-height: 85vh;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.violetLight} 0%,
    rgba(201, 163, 216, 0.3) 30%,
    rgba(239, 230, 244, 0.8) 60%,
    ${({ theme }) => theme.colors.white} 100%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  overflow: hidden;

  /* Tighter on mobile so the WhatsApp CTA clears the fold and the fixed
     SocialSidebar bar at the bottom of the viewport. */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 4.5rem 1.5rem 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 70%;
    height: 150%;
    background: radial-gradient(
      ellipse at center,
      rgba(201, 163, 216, 0.4) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
  }
`

/* Heights match the old rendered size: the source used to carry ~45% transparent
   padding, so 250px/180px only ever showed ~138px/~100px of actual logo. The
   asset is now trimmed, so these are the real visible heights. */
export const Logo = styled.div`
  margin-bottom: 0.5rem;

  img {
    height: 140px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      height: 100px;
    }
  }
`

export const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2.2rem;
  }
`

export const Subheadline = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.7;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.05rem;
    max-width: 100%;
  }
`

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${({ $whatsapp, theme }) =>
    $whatsapp ? theme.colors.greenDeep : theme.colors.violet};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  transition: all 200ms ease;
  box-shadow: 0 4px 15px rgba(111, 154, 106, 0.3);

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(111, 154, 106, 0.4);
    color: white;
    background: ${({ $whatsapp, theme }) =>
      $whatsapp ? theme.colors.green : theme.colors.violetDeep};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
`

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: ${float} 6s ease-in-out infinite;

  img {
    max-width: 100%;
    max-height: 520px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 220px;

    img {
      max-height: 280px;
    }
  }
`

export const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.violet};
  font-size: 0.8rem;
  animation: ${float} 3s ease-in-out infinite;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.violetDeep};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    bottom: 1rem;
  }
`
