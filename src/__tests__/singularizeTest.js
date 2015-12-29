import { expect } from 'chai'
import { describe, it } from 'mocha'

import { singularize } from '../index'

describe('Cars => Car', () => {
  it('Singularizes by removing `s`', () => {
    let subject = 'Cars'
    let expected = 'Car'

    expect(singularize(subject)).to.eql(expected)
  })
})
