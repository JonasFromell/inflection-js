class Inflection {

  constructor() {
    throw 'You\'re trying to instantiate a singleton class'
  }

  static plural = [
    // Story => Stories
    [new RegExp('([^aeiouy]|qu)y$', 'gi'), '$1ies'],
    // Car => Cars
    [new RegExp('$', 'gi'), 's']
  ]

  static singular = [
    // Stories => Story
    [new RegExp('([^aeiouy]|qu)ies$', 'gi'), '$1y'],
    // Cars => Car
    [new RegExp('s$', 'gi'), '']
  ]

  static enforce(str, rules) {
    for (let i = 0; i < rules.length; ++i) {
      if (str.match(rules[i][0])) {
        str = str.replace(rules[i][0], rules[i][1])
        break
      }
    }

    return '' + str
  }

}

export function pluralize(str) {
  return Inflection.enforce(str, Inflection.plural)
}

export function singularize(str) {
  return Inflection.enforce(str, Inflection.singular)
}
