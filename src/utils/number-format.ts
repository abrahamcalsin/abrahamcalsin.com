export const formatter = Intl.NumberFormat('en', {
  notation: 'compact',
})

export function numberFormat(number: any) {
  return formatter.format(number)
}
