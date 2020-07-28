import { html } from 'lit-html'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
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
  title: 'TagPicker',
  component: 'fluent-tag-picker',
  decorators: [container, withKnobs]
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
    label="Tag Picker"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const Placeholder = () => html`
  <fluent-tag-picker
    label="Tag Picker"
    placeholder="Pick an item"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const Disabled = () => html`
  <fluent-tag-picker
    label="Disabled Tag Picker"
    disabled="true"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
  <fluent-tag-picker
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
`

export const Required = () => html`
  <fluent-tag-picker
    label="Tag Picker"
    required="true"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const FilterSelectedItems = () => html`
  <fluent-tag-picker
    label="Tag Picker"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    filterItems
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const MaxSelectedItems = () => html`
  <fluent-tag-picker
    label="Pick up to three elements"
    maxSelectedItems="3"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const MaxSelectedItemsWithPlaceholder = () => html`
  <fluent-tag-picker
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
  <fluent-tag-picker
    label="Tag Picker accent sensitive"
    .getItems="${getMockRest(accentItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
  <fluent-tag-picker
    accentInsensitive
    label="Tag Picker accent insensitive"
    .getItems="${getMockRest(accentItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const WithErrorMessage = () => html`
  <fluent-tag-picker
    label="Tag Picker"
    errorMessage="Error message"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="250"
    @change="${action('change')}"
  ></fluent-tag-picker>
`

export const Sandbox = () => html`
  <fluent-tag-picker
    .label="${text('label', 'Tag Picker')}"
    .loadingText="${text('loadingText', 'Carregant')}"
    .disabled="${boolean('disabled', false)}"
    .required="${boolean('required', false)}"
    .getItems="${getMockRest(iconItems)}"
    .getItemsRate="${number('getItemsRate', 250)}"
    .accentInsensitive="${boolean('accentInsensitive', false)}"
    .maxSelectedItems="${number('maxSelectedItems', -1)}"
    .errorMessage="${text('errorMessage', '')}"
    @change="${action('change')}"
  ></fluent-tag-picker>
`
