export function formStart(action, state) {
  const data = { ...state.data, [action.id]: action.payload }
  return Object.values(data).some(value => value !== '')
}
