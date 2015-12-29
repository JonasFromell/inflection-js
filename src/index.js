class Inflection {

  constructor() {
    throw 'You\'re trying to instantiate a singleton class'
  }

  static plural = new Map([
    // Story => Stories
    [new RegExp('([^aieouy]|qu)y$', 'gi'), '$1ies'],
    // Car => Cars
    [new RegExp('$', 'gi'), 's']
  ])

  static singular = new Map([
    // Stories => Story
    [new RegExp('([^aieouy]|qu)ies$', 'gi'), '$1y'],
    // Cars => Car
    [new RegExp('s$', 'gi'), '']
  ])

  static enforce(str, rules) {
    for (let [k, v] of rules) {
      if (str.match(k)) {
        str = str.replace(k, v)
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
