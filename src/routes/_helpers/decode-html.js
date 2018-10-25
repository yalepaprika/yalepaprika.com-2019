import decode from 'unescape'

export default function decodehtml(str) {
  return decode(str, 'all')
}
