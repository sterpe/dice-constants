/* global
  jest
  describe
  it
  expect
*/

const FILE = '..'

jest.dontMock(FILE)

describe([
  'index.js'
].join(' '), function () {
  it([
    'should export the constants'
  ].join(' '), function () {
    const CONSTANT = require(FILE)

    expect(CONSTANT.OPERATOR).toBe('OPERATOR')
    expect(CONSTANT.DIE).toBe('DIE')
    expect(CONSTANT.LITERAL).toBe('LITERAL')
  })
})
