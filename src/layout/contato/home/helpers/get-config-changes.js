export function getConfigChanges(inputConfig, payload) {
  const propertiesToValidate = Object.keys(inputConfig)

  const inputProperties = {}

  for (const property of propertiesToValidate) {
    const config = inputConfig[property]

    if (typeof config === 'object') inputProperties[property] = config[payload]
    if (typeof config === 'function') inputProperties[property] = config(payload)
    if (typeof config === 'boolean') inputProperties[property] = config
  }

  return inputProperties
}
