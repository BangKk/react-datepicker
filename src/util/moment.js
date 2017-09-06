export function getDays(year, month) {
  return new Date(year, month, 0).getDate();
}

export function format(year, month, day, d = '-') {
  if (+day < 10) {
    day = '0' + day
  }
  if (+month < 10) {
    month = '0' + month
  }
  return `${year}${d}${month}${d}${day}`
}
