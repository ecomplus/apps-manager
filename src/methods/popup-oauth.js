import createPopup from '../lib/create-popup'

export default url => {
  const popup = createPopup(url)
  if (popup) {
    if (typeof window === 'object' && window.focus) {
      popup.focus()
    }
  }
  return popup
}
