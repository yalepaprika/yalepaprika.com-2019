import Packer from 'muuri/src/Packer/Packer'
import Prando from 'prando'

const SPREADS = ['full', 'half', 'quarter']

class Grid {
  constructor(lastModified) {
    this.packer = new Packer()
    this.items = []
    const seed = lastModified || "determinism"
    this.rng = new Prando(seed)
    this.margin = 0
  }

  addFold(fold) {
    let aspect = fold.meta.fold_front.media_details.height /
      fold.meta.fold_front.media_details.width
    let creases = fold.meta.creases
    let spread = SPREADS[this.rng.nextInt(0, creases)]
    let item =  { fold, aspect, spread }
    switch (spread) {
      case 'full':
        item._width = 50
        item._height = aspect * 50
        break;
      case 'half':
        item._width = 50 / 2
        item._height = aspect * 50
        break;
      case 'quarter':
        item._width = 50 / 2
        item._height = aspect * 50 / 2
        break;
    }
    item._marginLeft = item._marginRight = item._marginBottom = item._marginTop = this.margin
    this.items.push(item)
  }

  layout() {
    let layout = this.packer.getLayout(this.items, 100, 100)
    layout.items = this.items
    return layout
  }
}

export default Grid
