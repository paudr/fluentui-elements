import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './combo-box'
import iconCode from '../icon/code'

const container = story => html`
  <div
    tabindex="0"
    @keydown="${event => event.stopPropagation()}"
    style="outline: 0"
  >
    ${story()}
  </div>
`

export default {
  title: 'ComboBox/Basic',
  component: 'fluent-combo-box',
  decorators: [container]
}

const iconOptions = Object.keys(iconCode).map(name => ({
  text: name,
  value: [name]
}))

const fruitOptions = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange' },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' }
]

const accentItems = [
  { text: 'menjàrem', value: 'menjarem' },
  { text: 'bàscula', value: 'bascula' },
  { text: 'vàlid', value: 'valid' },
  { text: 'matalàs', value: 'matalas' },
  { text: 'pàmfil', value: 'pamfil' },
  { text: 'interès', value: 'interes' },
  { text: 'bèstia', value: 'bestia' },
  { text: 'mèrit', value: 'merit' },
  { text: 'canapè', value: 'canape' },
  { text: 'perquè', value: 'perque' },
  { text: 'cèntim', value: 'centim' },
  { text: 'mòdul', value: 'modul' },
  { text: 'allò', value: 'allo' },
  { text: 'òliba', value: 'oliba' },
  { text: 'repòs', value: 'repos' },
  { text: 'Sònia', value: 'Sonia' },
  { text: 'arròsvindré', value: 'arrosvindre' },
  { text: 'créixens', value: 'creixens' },
  { text: 'haguéreu', value: 'haguereu' },
  { text: 'accés', value: 'acces' },
  { text: 'també', value: 'tambe' },
  { text: 'Berlín', value: 'Berlin' },
  { text: 'pastís', value: 'pastis' },
  { text: 'legítima', value: 'legitima' },
  { text: 'veí', value: 'vei' },
  { text: 'rítmic', value: 'ritmic' },
  { text: 'tísic', value: 'tisic' },
  { text: 'pastós', value: 'pastos' },
  { text: 'furóncol', value: 'furoncol' },
  { text: 'tórtora', value: 'tortora' },
  { text: 'cantó', value: 'canto' },
  { text: 'institució', value: 'institucio' },
  { text: 'cautxú', value: 'cautxu' },
  { text: 'múscul', value: 'muscul' },
  { text: 'fúcsia', value: 'fucsia' },
  { text: 'brúixola', value: 'bruixola' },
  { text: 'pallús', value: 'pallus' }
]

export const Normal = () => html`
  <fluent-combo-box
    label="Standard"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const WithDescription = () => html`
  <fluent-combo-box
    label="Standard"
    description="A fancy description."
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const Invalid = () => html`
  <fluent-combo-box
    invalid
    label="Invalid"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const WithErrorMessage = () => html`
  <fluent-combo-box
    label="With error message"
    errorMessage="Error message"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const Disabled = () => html`
  <fluent-combo-box
    disabled
    label="Required"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const Required = () => html`
  <style>
    fluent-combo-box {
      width: 250px;
    }
  </style>
  <p>
    <fluent-combo-box
      required
      label="Required"
      .options="${fruitOptions}"
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-combo-box>
  </p>
  <p>
    <fluent-combo-box
      required
      multiple
      .options="${fruitOptions}"
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-combo-box>
  </p>
`

export const Borderless = () => html`
  <fluent-combo-box
    borderless
    label="Required"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const Multiple = () => html`
  <fluent-combo-box
    multiple
    label="Multiple"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const NormalAllowFreedom = () => html`
  <fluent-combo-box
    allowFreeform
    label="Standar with allow freedon"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const MultipleAllowFreedom = () => html`
  <fluent-combo-box
    allowFreeform
    multiple
    label="Multiple with allow freedon"
    .options="${fruitOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const NormalAutocomplete = () => html`
  <fluent-combo-box
    allowFreeform
    autoComplete
    label="Standar with allow freedon"
    .options="${iconOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const MultipleAutocomplete = () => html`
  <fluent-combo-box
    allowFreeform
    autoComplete
    multiple
    label="Multiple with allow freedon"
    .options="${iconOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const Placeholder = () => html`
  <fluent-combo-box
    allowFreeform
    autoComplete
    multiple
    label="Multiple with allow freedon"
    placeholder="Select an element"
    .options="${iconOptions}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`

export const AccentInsensitive = () => html`
  <p>Word list: ${accentItems.map(item => item.text).join(', ')}</p>
  <p>
    <fluent-combo-box
      allowFreeform
      autoComplete
      multiple
      label="ComboBox accent sensitive"
      .options="${accentItems}"
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-combo-box>
  </p>
  <p>
    <fluent-combo-box
      allowFreeform
      autoComplete
      multiple
      accentInsensitive
      label="ComboBox accent insensitive"
      .options="${accentItems}"
      @focus="${action('focus')}"
      @blur="${action('blur')}"
      @input="${action('input')}"
      @change="${action('change')}"
    ></fluent-combo-box>
  </p>
`

export const ReadOnly = () => html`
  <fluent-combo-box
    readOnly
    label="Required"
    .options="${fruitOptions}"
    .value="${'banana'}"
    @focus="${action('focus')}"
    @blur="${action('blur')}"
    @input="${action('input')}"
    @change="${action('change')}"
  ></fluent-combo-box>
`
