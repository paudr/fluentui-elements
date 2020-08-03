import { css } from 'lit-element'

import { normalize, getLabelStyle, getFocusStyle } from '../../theme/mixins.css'
import {
  blackTranslucent40,
  neutralLight,
  neutralLighter,
  neutralSecondary,
  redDark,
  themeLight,
  themePrimary,
  white
} from '../../theme/color.css'
import { fontStyle } from '../../theme/typografy.css'
import { slideDownIn20 } from '../../theme/animation.css'

export default css`
  ${getLabelStyle('label')}

  #container {
    position: relative;
    ${normalize};
    user-select: none;
    outline: 0px;
  }

  #field {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    min-width: 180px;
    min-height: 30px;
    border: 1px solid ${neutralSecondary};
    border-radius: 2px;
  }

  #itemsWrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }

  fluent-autofill {
    height: 30px;
    flex-grow: 1;
    padding: 0px 6px;
    align-self: flex-end;
  }

  ${getFocusStyle('#container:not(.open) #field:focus-within', {
    color: themePrimary,
    radius: css`2px`
  })}

  #items {
    ${normalize};
    background-color: ${white};
    display: none;
    position: absolute;
    width: 100%;
    z-index: 400;
    max-width: 100%;
    box-shadow: 0 0px 15px -5px ${blackTranslucent40};
    border: 1px solid ${neutralLight};
    user-select: none;
  }

  .open #items {
    display: block;
  }

  :host([disabled]) #field {
    background: ${neutralLighter};
    border-color: ${neutralLighter};
  }

  #errorMessage {
    ${fontStyle.small}
    color: ${redDark};
    padding-top: 5px;
  }

  #container.invalid #field {
    border-color: ${redDark};
  }

  ${getFocusStyle('#container.invalid:not(.open) #field:focus-within', {
    color: redDark,
    radius: css`2px`
  })}

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

  ${slideDownIn20}
`
