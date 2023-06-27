// @ts-check
import { SVGLength } from './SVGLength.js'

export class SVGAnimatedLength {
  baseVal

  /**
  * @param {Element} element
  * @param {string} attributeName
  */
  constructor(element, attributeName) {
    this.baseVal = new SVGLength(element, attributeName)
  }

  get animVal() {
    throw new Error('animVal is not implemented')
  }
}
