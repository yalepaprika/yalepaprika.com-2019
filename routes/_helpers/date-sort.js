import dateToIso from './date-to-iso'

export default function (a, b) {
  let aDate = new Date(dateToIso(a.meta.publication_date))
  let bDate = new Date(dateToIso(b.meta.publication_date))
  if (aDate > bDate) return -1
  if (aDate < bDate) return 1
  return 0
}
