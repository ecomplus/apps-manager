export default (url, title = 'Authentication') => {
  if (typeof window !== 'object') {
    throw new Error('Method available for browser only')
  }

  const { screen } = window
  let width
  if (screen) {
    // set window width based on screen width
    if (screen.width >= 640) {
      width = 900
    } else {
      width = screen.width
    }
  } else {
    width = 380
  }

  // open new browser window
  return window.open(url, title, `height=500,width=${width}`)
}
