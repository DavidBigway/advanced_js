const add = (a, b) => `(${a} + ${b})`
const sub = (a, b) => `(${a} - ${b})`
const multi = (a, b) => `${a} * ${b}`
const div = (a, b) => `${a} / ${b}`

const discriminant = (a, b, c, d) => {
  const equation = multi(add(a, b), sub(c, d))
  return equation
}

module.exports = discriminant
