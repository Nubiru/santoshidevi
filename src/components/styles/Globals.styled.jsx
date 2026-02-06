import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Poppins:wght@300;400;500;600&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        line-height: 1.6;
    }

    body {
        background: ${({ theme }) => theme.colors.white};
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* Mobile: add bottom padding for fixed social sidebar */
    @media (max-width: ${({ theme }) => theme.mobile}) {
        main {
            padding-bottom: 50px;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.violetDeep};
        line-height: 1.3;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.violetDeep};
        transition: color 200ms ease;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.violet};
        }
    }

    ul {
        list-style: none;
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.7;
        max-width: 70ch;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* Focus states for keyboard navigation */
    *:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.violetDeep};
        outline-offset: 2px;
        border-radius: 4px;
    }

    /* Remove default outline only when not using keyboard */
    :focus:not(:focus-visible) {
        outline: none;
    }

    /* Respect reduced motion preference */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }

        html {
            scroll-behavior: auto;
        }
    }

    /* Horizontal separator line */
    hr {
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.violetLight} 0%,
            ${({ theme }) => theme.colors.violet} 50%,
            ${({ theme }) => theme.colors.violetLight} 100%
        );
        border: 0;
        height: 1px;
        margin: 2rem 0;
        opacity: 0.5;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.violetLight};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.violet};
        border-radius: 30px;

        &:hover {
            background: ${({ theme }) => theme.colors.violetDeep};
        }
    }

    /* Selection color */
    ::selection {
        background: ${({ theme }) => theme.colors.violetLight};
        color: ${({ theme }) => theme.colors.violetDeep};
    }
`
