import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import './tag-picker'
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
  title: 'TagPicker/Underlined',
  component: 'fluent-tag-picker',
  decorators: [container]
}

const iconItems = Object.keys(iconCode).map(name => ({
  text: name,
  value: [name]
}))

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

function getMockRest (options) {
  return function mockRest (text) {
    return new Promise(resolve => {
      const lower = text.toLowerCase()
      const items = options.filter(item =>
        item.text.toLowerCase().startsWith(lower)
      )
      setTimeout(() => resolve(items), Math.random() * 700 + 50)
    })
  }
}

export const Normal = () => html`
  <fluent-tag-picker
    underlined
    label="Tag Picker"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const WithDescription = () => html`
  <fluent-tag-picker
    underlined
    label="Standard"
    description="A fancy description."
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const Invalid = () => html`
  <fluent-tag-picker
    underlined
    invalid
    label="Invalid"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const WithErrorMessage = () => html`
  <fluent-tag-picker
    underlined
    label="With error message"
    errorMessage="Error message"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const Disabled = () => html`
  <p>
    <fluent-tag-picker
      underlined
      disabled
      label="Disabled Tag Picker"
      .getItems="${getMockRest(iconItems)}"
      .getItemsRate="250"
      @change="${action('change')}"
    ></fluent-tag-picker>
  </p>
  <p>
    <fluent-tag-picker
      underlined
      label="Disabled Tag Picker with selected values"
      disabled="true"
      .value="${[
        { text: 'Hello', key: 'hello' },
        { text: 'World', key: 'world' }
      ]}"
      .getItems="${getMockRest(iconItems)}"
      .getItemsRate="250"
      @change="${action('change')}"
    ></fluent-tag-picker>
  </p>
`

export const Required = () => html`
  <style>
    fluent-tag-picker {
      width: 250px;
    }
  </style>
  <p>
    <fluent-tag-picker
      underlined
      required
      label="Required"
      .getItems="${getMockRest(iconItems)}"
      .getItemsRate="250"
      @change="${action('change')}"
    ></fluent-tag-picker>
  </p>
  <p>
    <fluent-tag-picker
      underlined
      required
      .getItems="${getMockRest(iconItems)}"
      .getItemsRate="250"
      @change="${action('change')}"
    ></fluent-tag-picker>
  </p>
`

export const Placeholder = () => html`
  <fluent-tag-picker
    underlined
    label="Tag Picker"
    placeholder="Pick an item"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const FilterSelectedItems = () => html`
  <fluent-tag-picker
    underlined
    label="Tag Picker"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    filterItems
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const MaxSelectedItems = () => html`
  <fluent-tag-picker
    underlined
    label="Pick up to three elements"
    maxSelectedItems="3"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const MaxSelectedItemsWithPlaceholder = () => html`
  <fluent-tag-picker
    underlined
    label="Pick up to three elements"
    placeholder="Pick an item"
    maxSelectedItems="3"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const AccentInsensitive = () => html`
  <p>Word list: ${accentItems.map(item => item.text).join(', ')}</p>
  <p>
    <fluent-tag-picker
      underlined
      label="Tag Picker accent sensitive"
      .getItems="${getMockRest(accentItems)}"
      .getItemsRate="250"
      @change="${action('change')}"
    ></fluent-tag-picker>
  </p>
  <p>
    <fluent-tag-picker
      underlined
      accentInsensitive
      label="Tag Picker accent insensitive"
      .getItems="${getMockRest(accentItems)}"
      .getItemsRate="250"
      @change="${action('change')}"
    ></fluent-tag-picker>
  </p>
`
