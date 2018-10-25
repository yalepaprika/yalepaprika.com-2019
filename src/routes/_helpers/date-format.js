import dayjs from 'dayjs'

export default function format(date) {
  return dayjs(date).format('MMMM D, YYYY')
}
