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
  buttons: Config.arrayOf(
    Config.shapeOf({
      disabled: Config.bool().value(false),
      elementClasses: Config.string(),
      style: Config.oneOf(['primary', 'outline', 'ghost', 'danger', 'destructive', 'float']).value('primary'),
      color: Config.oneOf(['accent', 'black', 'blue', 'blue-light', 'green', 'orange', 'red', 'violet', 'yellow']).value('accent'),
      size: Config.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']).value('sm'),
      width: Config.string(),
      hardWidth: Config.bool().value(false),
      darkTheme: Config.bool(),
      href: Config.string(),
      icon: Config.any(),
      classIcon: Config.string(),
      iconAlignment: Config.oneOf(['right-center', 'left-center', 'right-justified', 'left-justified']),
      id: Config.string(),
      label: Config.any(),
      name: Config.string(),
      rel: Config.string(),
      target: Config.oneOf(['_blank', '_self', '_parent', '_top']),
      type: Config.oneOf(['button', 'reset', 'submit']).value('button'),
      value: Config.string(),
    })
  ).value([{}]),
};

Soy.register(WDButtonGroup, templates);

export {WDButtonGroup};
export default WDButtonGroup;
