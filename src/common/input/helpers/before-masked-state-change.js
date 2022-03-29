export function beforeMaskedStateChange({ previousState, currentState, nextState }) {
  if (previousState?.value.includes('_') && !currentState.value.includes('_')) {
    let str = '(__) _ ____-____'

    for (const value of currentState.value) {
      str = str.replace('_', value)
    }

    return { ...nextState, value: str }
  }

  return {
    ...nextState,
  }
}
