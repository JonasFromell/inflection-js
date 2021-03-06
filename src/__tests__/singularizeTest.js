import { expect } from 'chai'
import { describe, it } from 'mocha'

import { singularize } from '../index'

const tests = new Map([
  ['Cars', 'Car'],
  ['Stories', 'Story'],
  ['People', 'Person'],
  ['Men', 'Man'],
  ['Children', 'Child']
])

for (let [k, v] of tests) {
  describe('Singularize', () => {
    it(`turns ${k} into ${v}`, () => {
      expect(singularize(k)).to.eql(v)
    })
  })
}
