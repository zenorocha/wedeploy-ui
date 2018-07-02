import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import 'wd-button';
import './WDButtonGroup.scss';

import templates from './WDButtonGroup.soy.js';

/**
 * WDButtonGroup component.
 */
class WDButtonGroup extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
WDButtonGroup.STATE = {
  /**
   * @type {?string}
   * @default 'default'
   */
  type: Config.oneOf(['default', 'segmented']).value('default'),

  /**
   * @type {?string}
   * @default '0px'
   */
  spacing: Config.string().value('0px'),

  /**
   * @type {?Array}
   * @default empty
   */
  buttons: Config.array().value([]),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  id: Config.string(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  name: Config.string(),
};

Soy.register(WDButtonGroup, templates);

export {WDButtonGroup};
export default WDButtonGroup;
