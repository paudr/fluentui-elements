import { css } from 'lit-element'

import { normalize } from '../../theme/mixins.css'
import { themeLight, themePrimary, white } from '../../theme/color.css'
import { fontStyle } from '../../theme/typografy.css'

export default css`
  #field {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-width: 180px;
    min-height: 30px;
    border: 0;
  }

  #itemsWrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }

  fluent-autofill {
    flex: 1 1 0px;
    height: 32px;
    padding: 0px 6px;
    align-self: flex-end;
  }

  #items {
    ${normalize};
    background-color: ${white};
    width: 100%;
    max-width: 100%;
  }

  #spinner {
    display: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
  }

  .loading #spinner {
    display: flex;
  }

  .loading fluent-select {
    display: none;
  }

  @keyframes Spinner-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  #circle {
    box-sizing: border-box;
    border-radius: 50%;
    border: 1.5px solid ${themeLight};
    border-top-color: ${themePrimary};
    animation: Spinner-spin 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67);
    width: 20px;
    height: 20px;
  }

  #loadingText {
    ${fontStyle.medium};
    color: ${themePrimary};
    margin: 0px 10px;
    text-align: center;
  }
`
