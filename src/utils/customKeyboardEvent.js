export default function customKeyboardEvent(type, key) {
  return document.dispatchEvent(new KeyboardEvent(type, { key }))
}
