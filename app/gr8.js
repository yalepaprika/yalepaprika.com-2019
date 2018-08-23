const gr8 = require('gr8')

const opts = {
  utils: [],
  spacing: [0, 0.5, 1, 2, 3, 4, 5],
  breakpointSelector: 'class'
}

const colors = {
  black: '#000',
  white: '#fff',
  paprika: 'hsl(16, 83%, 54%)'
}

const borderWeights = [1]

const borders = {}

for (let weight of borderWeights) {
  for (let color in colors) {
    borders[weight + '-' + color] = `${weight}px solid ${colors[color]}`
  }
}

opts.utils.push({
  prop: [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ],
  vals: borders
})

opts.utils.push({
  prop: { bgc: 'background-color' },
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: 'color',
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: 'font-family',
  join: '-',
  vals: {
    sans: `-apple-system, BlinkMacSystemFont, 'helvetica neue', helvetica, ubuntu, roboto, noto, arial, sans-serif`
  }
})

opts.utils.push({
  prop: 'overflow',
  vals: ['auto']
})


opts.utils.push({
  prop: {
    mx: 'max-width',
    my: 'max-height'
  },
  unit: '%',
  vals: [100]
})

opts.utils.push({
  prop: 'text-decoration',
  vals: {
    'u-hover': 'underline',
    'o-hover': 'overline',
    'lt-hover': 'line-through',
    'n-hover': 'none'
  },
  tail: ':hover'
})


module.exports = function() {
  return gr8(opts)
}
