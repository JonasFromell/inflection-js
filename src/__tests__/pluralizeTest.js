import { expect } from 'chai'
import { describe, it } from 'mocha'

import { pluralize } from '../index'

const tests = new Map([
  ['Car', 'Cars'],
  ['Story', 'Stories'],
  ['Person', 'People'],
  ['Man', 'Men']
])

for (let [k, v] of tests) {
  describe('Pluralize', () => {
    it(`turns ${k} into ${v}`, () => {
      expect(pluralize(k)).to.eql(v)
    })
  })
}
