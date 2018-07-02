import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import './WDButton.scss';

import templates from './WDButton.soy.js';

/**
 * WDButton component.
 */
class WDButton extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
WDButton.STATE = {
  /**
   * ID to be applied to the element.
   * @type {!String}
   * @default example
   */
  id: Config.string().value('example'),
};

Soy.register(WDButton, templates);

export {WDButton};
export default WDButton;
