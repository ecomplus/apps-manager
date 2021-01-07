
export const removeInternals = (data={}) => {
  if (!data) return

  const keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].startsWith('__')) {
      delete data[keys[i]]
    }
  }
  return data
}

