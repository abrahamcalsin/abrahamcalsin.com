const formatter = Intl.NumberFormat('en', {
  notation: 'compact',
})

export function numberFormat(number: number) {
  return formatter.format(number)
}
