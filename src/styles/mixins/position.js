const {includes} = require('lodash/fp')

const POSITIONS = ['absolute']
const DIRECTIONS = ['top', 'bottom', 'left', 'right']

const position = (rule, position, ...directions) => {
  if (!includes(position, POSITIONS)) throw rule.error(`Invalid position: ${position}.`)
  const style = {
    position,
  }
  DIRECTIONS.forEach(direction => {
    if (includes(direction, directions)) {
      style[direction] = 0
    }
  })
  return style
}

module.exports = position
