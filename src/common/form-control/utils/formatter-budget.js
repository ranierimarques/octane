export function formatterBudget(budget) {
  const formattedBudget = budget.toLocaleString('pt-br', {
    minimumFractionDigits: 0,
  })

  return formattedBudget
}
