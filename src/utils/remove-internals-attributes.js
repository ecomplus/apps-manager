import isEmpty from 'lodash.isempty'

export const removeInternals = (data) => {
  if (!data) return

  const keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].startsWith('__')) {
      delete data[keys[i]]
      continue
    }

    let value = data[keys[i]]

    if (Array.isArray(value)) {
      for (let x = 0; x < value.length; x++) {
        value[x] = removeInternals(value[x])
      }
      value = value.filter(x => !isEmpty(x))
    }
    data[keys[i]] = value

    if (typeof (value) === 'object') {
      data[keys[i]] = removeInternals(value)
      if (isEmpty(data[keys[i]])) {
        delete data[keys[i]]
      }
    }

    if (value && !Array.isArray(value) && typeof (value) !== 'object') {
      data[keys[i]] = value
    }
  }
  return data
}

