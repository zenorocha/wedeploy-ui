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

  /**
   * @type {?boolean}
   * @default false
   */
  disabled: Config.bool().value(false),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  elementClasses: Config.string(),

  /**
   * @type {?string}
   * @default 'primary'
   */
  style: Config.oneOf(['primary', 'outline', 'ghost', 'danger', 'destructive', 'float']).value('primary'),

  /**
   * @type {?string}
   * @default 'accent'
   */
  color: Config.oneOf(['accent', 'black', 'green', 'blue-light', 'blue', 'violet', 'red', 'orange', 'yellow']).value('accent'),

  /**
   * @type {?string}
   * @default 'm'
   */
  size: Config.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']).value('s'),

  /**
   * @type {?string|undefined}
   * @default undefined
   */
  width: Config.string(),

  /**
   * @type {?boolean}
   * @default false
   */
  hardWidth: Config.bool().value(false),

  /**
   * @type {?string}
   * @default undefined
   */
  weight: Config.oneOf(['lightweight', 'middleweight', 'heavyweight']),

  /**
   * @type {?boolean}
   * @default undefined
   */
  darkTheme: Config.bool(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  borderRadius: Config.oneOf(['borderRadius-6px', 'rounded']),

  /**
   * @type {?boolean}
   * @default false
   */
  group: Config.bool().value(false),

  /**
   * @type {?string}
   * @default 'default'
   */
  groupType: Config.oneOf(['default', 'segmented']).value('default'),

  /**
   * @type {?string}
   * @default '0px'
   */
  groupSpacing: Config.string().value('0px'),

  /**
   * @type {?Array}
   * @default empty
   */
  groupButtons: Config.arrayOf(
    Config.shapeOf({
      disabled: Config.bool().value(false),
      elementClasses: Config.string(),
      style: Config.oneOf(['primary', 'outline', 'ghost', 'danger', 'destructive', 'float']).value('primary'),
      color: Config.oneOf(['accent', 'black', 'green', 'blue-light', 'blue', 'violet', 'red', 'orange', 'yellow']).value('accent'),
      size: Config.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']).value('s'),
      width: Config.string(),
      hardWidth: Config.bool().value(false),
      weight: Config.oneOf(['lightweight', 'middleweight', 'heavyweight']),
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

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  href: Config.string(),

  /**
   * @type {?(html|string|undefined)}
   * @default undefined
   */
  icon: Config.any(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  classIcon: Config.string(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  iconAlignment: Config.oneOf(['right-center', 'left-center', 'right-justified', 'left-justified']),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  id: Config.string(),

  /**
   * @type {?(html|string|undefined)}
   * @default undefined
   */
  label: Config.any(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  name: Config.string(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  rel: Config.string(),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  target: Config.oneOf(['_blank', '_self', '_parent', '_top']),

  /**
   * @type {?string}
   * @default 'button'
   */
  type: Config.oneOf(['button', 'reset', 'submit']).value('button'),

  /**
   * @type {?(string|undefined)}
   * @default undefined
   */
  value: Config.string(),
};

Soy.register(WDButton, templates);

export {WDButton};
export default WDButton;
