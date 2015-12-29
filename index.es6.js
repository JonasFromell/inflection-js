class Inflection {

  constructor() {
    throw 'You\'re trying to instantiate a singleton class'
  }

  static plural = [
    // Child => Children
    [new RegExp('(child)$', 'gi'), '$1ren'],
    // Category => Categories
    [new RegExp('([^aeiouy]|qu)y$', 'gi'), '$1ies'],
    // Cart => Carts
    [new RegExp('$', 'gi'), 's']
  ]

  static enforce(str, rules) {
    for (let i = 0; i < rules.length; ++i) {
      if (str.match(rules[i][0])) {
        str = str.replace(rules[i][0], rules[i][1])
        break
      }
    }

    return new String(str)
  }

}

export function pluralize(str) {
  return Inflection.enforce(str, Inflection.plural)
}
