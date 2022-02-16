export function formatterBudgetValue(budgetValue) {
  const formattedValue = Number(budgetValue).toLocaleString('pt-br', {
    minimumFractionDigits: 0,
  })

  return formattedValue
}
