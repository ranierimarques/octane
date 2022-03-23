export function clearAllInputErrors(state) {
  const errors = {}
  Object.keys(state.data).forEach(key => {
    errors[key] = { ...state[key], error: { error: null } }
  })
  return { ...state, ...errors }
}
