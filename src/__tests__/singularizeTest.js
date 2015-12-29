import { expect } from 'chai'
import { describe, it } from 'mocha'

import { singularize } from '../index'

const tests = new Map([
  ['Cars', 'Car'],
  ['Stories', 'Story']
])

for (let [k, v] of tests) {
  describe('Singularize', () => {
    it(`turns ${k} into ${v}`, () => {
      expect(singularize(k)).to.eql(v)
    })
  })
}
