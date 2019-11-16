import dateToIso from './date-to-iso'

export default function (a, b) {
  if (!a.meta || !b.meta) return 1
  let aDate = new Date(dateToIso(a.meta.publication_date))
  let bDate = new Date(dateToIso(b.meta.publication_date))
  if (aDate > bDate) return -1
  if (aDate < bDate) return 1
  if (!a.meta.bulletin && b.meta.bulletin) return -1
  if (a.meta.bulletin && !b.meta.bulletin) return 1
  return 0
}
