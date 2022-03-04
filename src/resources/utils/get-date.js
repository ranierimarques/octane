export function getDate() {
  const date = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const dateHour = new Date().toLocaleTimeString('pt-BR')

  return `${date} às ${dateHour}`
}
