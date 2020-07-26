export function normalize (text, accentInsensitive) {
  return accentInsensitive
    ? text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
    : text.toLowerCase()
}

export function equalInsensitive (a, b, accentInsensitive = false) {
  return normalize(a, accentInsensitive) === normalize(b, accentInsensitive)
}
