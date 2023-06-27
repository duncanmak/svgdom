import { SVGAnimatedLength } from './SVGAnimatedLength.js'
import { SVGGraphicsElement } from './SVGGraphicsElement.js'

export class SVGForeignObjectElement extends SVGGraphicsElement {
  height = new SVGAnimatedLength(this, 'height')
  width = new SVGAnimatedLength(this, 'width')
  x = new SVGAnimatedLength(this, 'x')
  y = new SVGAnimatedLength(this, 'y')

}
