import { expect } from 'chai'
import { describe, it } from 'mocha'

import { pluralize } from '../index'

describe('Car => Cars', () => {
  it('Pluralizes words by adding `s`', () => {
    let subject = "Car"
    let expected = "Cars"

    expect(pluralize(subject)).to.eql(expected)
  })
})
