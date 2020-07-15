import { css } from 'lit-element'

export const slideDownIn20 = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
      animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slideDownIn20 {
    from {
      transform: translate3d(0px, -20px, 0px);
    }

    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  .slideDownIn20 {
    animation-name: fadeIn, slideDownIn20;
    animation-duration: 0.367s;
    animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
    animation-fill-mode: both;
  }
`
