export function thousandPointFormat(value?: number) {
  if (value) {
    return Math.round(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  else return ''
}
