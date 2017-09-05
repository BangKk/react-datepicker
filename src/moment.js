export function getDays(year = new Date().getFullYear(), month) {
  return new Date(year, month + 1, 0).getDate();
}