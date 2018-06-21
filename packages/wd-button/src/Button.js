import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './Button.soy.js';

/**
 * Button component.
 */
class Button extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Button.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!String}
   * @default example
   */
  id: Config.string().value('example'),
};

Soy.register(Button, templates);

export {Button};
export default Button;
