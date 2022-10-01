const discriminant = require('../../calc')

describe('квадратное уровнение', () => {
  it('(x+2)(y-3)', () => {
    expect(discriminant('x', 2, 'y', 3)).toBe('(x + 2) * (y - 3)')
  })
})
