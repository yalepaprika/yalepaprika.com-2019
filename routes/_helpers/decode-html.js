import decode from 'unescape'
import h2p from 'html2plaintext'

export default function decodehtml(str) {
  return h2p(decode(str, 'all'))
}
