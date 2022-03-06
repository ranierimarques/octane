export function getPosition(sliderValue, sliderMin, sliderMax, sliderRef) {
  const sliderThumbWidth = 12
  const sliderWidth = sliderRef.current.offsetWidth // 452

  const maxWidth = sliderWidth - sliderThumbWidth

  const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
  const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

  return { widthInPercentage, positionInPixels }
}
