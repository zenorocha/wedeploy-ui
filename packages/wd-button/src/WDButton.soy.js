/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from WDButton.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WDButton.
 * @public
 */

goog.module('WDButton.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  disabled: (boolean|null|undefined),
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  color: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  width: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hardWidth: (boolean|null|undefined),
 *  darkTheme: (boolean|null|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  group: (boolean|null|undefined),
 *  groupType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupSpacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupButtons: !Array<?>,
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  classIcon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  rel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  target: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {boolean|null|undefined} */
  var disabled = soy.asserts.assertType(opt_data.disabled == null || (goog.isBoolean(opt_data.disabled) || opt_data.disabled === 1 || opt_data.disabled === 0), 'disabled', opt_data.disabled, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var style = soy.asserts.assertType(opt_data.style == null || (goog.isString(opt_data.style) || opt_data.style instanceof goog.soy.data.SanitizedContent), 'style', opt_data.style, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var color = soy.asserts.assertType(opt_data.color == null || (goog.isString(opt_data.color) || opt_data.color instanceof goog.soy.data.SanitizedContent), 'color', opt_data.color, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var size = soy.asserts.assertType(opt_data.size == null || (goog.isString(opt_data.size) || opt_data.size instanceof goog.soy.data.SanitizedContent), 'size', opt_data.size, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var width = soy.asserts.assertType(opt_data.width == null || (goog.isString(opt_data.width) || opt_data.width instanceof goog.soy.data.SanitizedContent), 'width', opt_data.width, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var hardWidth = soy.asserts.assertType(opt_data.hardWidth == null || (goog.isBoolean(opt_data.hardWidth) || opt_data.hardWidth === 1 || opt_data.hardWidth === 0), 'hardWidth', opt_data.hardWidth, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var darkTheme = soy.asserts.assertType(opt_data.darkTheme == null || (goog.isBoolean(opt_data.darkTheme) || opt_data.darkTheme === 1 || opt_data.darkTheme === 0), 'darkTheme', opt_data.darkTheme, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var borderRadius = soy.asserts.assertType(opt_data.borderRadius == null || (goog.isString(opt_data.borderRadius) || opt_data.borderRadius instanceof goog.soy.data.SanitizedContent), 'borderRadius', opt_data.borderRadius, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var group = soy.asserts.assertType(opt_data.group == null || (goog.isBoolean(opt_data.group) || opt_data.group === 1 || opt_data.group === 0), 'group', opt_data.group, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var groupType = soy.asserts.assertType(opt_data.groupType == null || (goog.isString(opt_data.groupType) || opt_data.groupType instanceof goog.soy.data.SanitizedContent), 'groupType', opt_data.groupType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var groupSpacing = soy.asserts.assertType(opt_data.groupSpacing == null || (goog.isString(opt_data.groupSpacing) || opt_data.groupSpacing instanceof goog.soy.data.SanitizedContent), 'groupSpacing', opt_data.groupSpacing, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var groupButtons = soy.asserts.assertType(goog.isArray(opt_data.groupButtons), 'groupButtons', opt_data.groupButtons, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var href = soy.asserts.assertType(opt_data.href == null || (goog.isString(opt_data.href) || opt_data.href instanceof goog.soy.data.SanitizedContent), 'href', opt_data.href, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var icon = soy.asserts.assertType(opt_data.icon == null || goog.isFunction(opt_data.icon) || (goog.isString(opt_data.icon) || opt_data.icon instanceof goog.soy.data.SanitizedContent), 'icon', opt_data.icon, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var classIcon = soy.asserts.assertType(opt_data.classIcon == null || (goog.isString(opt_data.classIcon) || opt_data.classIcon instanceof goog.soy.data.SanitizedContent), 'classIcon', opt_data.classIcon, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var iconAlignment = soy.asserts.assertType(opt_data.iconAlignment == null || (goog.isString(opt_data.iconAlignment) || opt_data.iconAlignment instanceof goog.soy.data.SanitizedContent), 'iconAlignment', opt_data.iconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || goog.isFunction(opt_data.label) || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var name = soy.asserts.assertType(opt_data.name == null || (goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var rel = soy.asserts.assertType(opt_data.rel == null || (goog.isString(opt_data.rel) || opt_data.rel instanceof goog.soy.data.SanitizedContent), 'rel', opt_data.rel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var target = soy.asserts.assertType(opt_data.target == null || (goog.isString(opt_data.target) || opt_data.target instanceof goog.soy.data.SanitizedContent), 'target', opt_data.target, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy28 = function() {
    var $tmp = null;
    if (style == 'destructive') {
      $tmp = ' wd-btn-destructive';
    } else if (style && color) {
      $tmp = ' wd-btn-' + style + '-' + color;
    } else if (style && !color) {
      $tmp = ' wd-btn-' + style + '-accent';
    } else if (color && !style) {
      $tmp = ' wd-btn-primary-' + color;
    } else {
      $tmp = ' wd-btn-primary-accent';
    }
    incrementalDom.attr('class', 'wd-btn' + $tmp + (size ? ' wd-btn-' + size : '') + (width == 'full' || width == 'fullwidth' ? ' wd-btn-fullwidth' : '') + (darkTheme ? ' wd-btn-darktheme' : '') + (borderRadius ? ' wd-btn-' + borderRadius : '') + (!label ? (icon || classIcon ? ' wd-btn-lone-icon' : '') : '') + (iconAlignment == 'left-justified' || iconAlignment == 'right-justified' ? ' wd-btn-justified-padding' : '') + (elementClasses ? ' ' + elementClasses : ''));
    if (width != 'full' && width != 'fullwidth') {
      if (width && !hardWidth) {
        incrementalDom.attr('style', 'min-width:' + width);
      }
      if (width && hardWidth) {
        incrementalDom.attr('style', 'width:' + width);
      }
    }
    if (disabled) {
      incrementalDom.attr('disabled', 'true');
    }
    if (href) {
      incrementalDom.attr('href', href);
    }
    if (id) {
      incrementalDom.attr('id', id);
    }
    if (name) {
      incrementalDom.attr('name', name);
    }
    if (rel) {
      incrementalDom.attr('rel', rel);
    }
    if (value) {
      incrementalDom.attr('value', value);
    }
    if (target) {
      incrementalDom.attr('target', target);
    }
    if (!href) {
      incrementalDom.attr('type', type);
    }
  };
  var btnGroupAttributes__soy151 = function() {
    incrementalDom.attr('class', 'wd-btn-group' + (groupType ? ' wd-btn-group-' + groupType : ''));
  };
  if (group) {
    incrementalDom.elementOpenStart('div');
        btnGroupAttributes__soy151();
    incrementalDom.elementOpenEnd();
      $buttonGroup(opt_data, null, opt_ijData);
    incrementalDom.elementClose('div');
  } else {
    if (href) {
          incrementalDom.elementOpenStart('a');
          attributes__soy28();
      incrementalDom.elementOpenEnd();
        } else {
          incrementalDom.elementOpenStart('btn');
            attributes__soy28();
        incrementalDom.elementOpenEnd();
        }
        $content(opt_data, null, opt_ijData);
    if (href) {
      incrementalDom.elementClose('a');
    } else {
      incrementalDom.elementClose('btn');
    }
  }
}
exports.render = $render;
/**
 * @typedef {{
 *  disabled: (boolean|null|undefined),
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  color: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  width: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hardWidth: (boolean|null|undefined),
 *  darkTheme: (boolean|null|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  group: (boolean|null|undefined),
 *  groupType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupSpacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupButtons: !Array<?>,
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  classIcon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  rel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  target: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'WDButton.render';
}


/**
 * @param {{
 *  icon: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  classIcon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $content(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var icon = soy.asserts.assertType(opt_data.icon == null || goog.isFunction(opt_data.icon) || (goog.isString(opt_data.icon) || opt_data.icon instanceof goog.soy.data.SanitizedContent), 'icon', opt_data.icon, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var classIcon = soy.asserts.assertType(opt_data.classIcon == null || (goog.isString(opt_data.classIcon) || opt_data.classIcon instanceof goog.soy.data.SanitizedContent), 'classIcon', opt_data.classIcon, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var iconAlignment = soy.asserts.assertType(opt_data.iconAlignment == null || (goog.isString(opt_data.iconAlignment) || opt_data.iconAlignment instanceof goog.soy.data.SanitizedContent), 'iconAlignment', opt_data.iconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|function()|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || goog.isFunction(opt_data.label) || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|function()|null|string|undefined');
  if (!label) {
    if (icon || classIcon) {
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'wd-btn-icon wd-btn-lone-icon ' + (($$temp = classIcon) == null ? '' : $$temp));
      incrementalDom.elementOpenEnd();
        soyIdom.print(($$temp = icon) == null ? '' : $$temp);
      incrementalDom.elementClose('span');
    }
  } else {
    if (icon || classIcon) {
      if (iconAlignment) {
        if (iconAlignment == 'left-center' || iconAlignment == 'left-justified') {
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'wd-btn-icon ' + (($$temp = classIcon) == null ? '' : $$temp) + ' wd-btn-icon-' + iconAlignment);
          incrementalDom.elementOpenEnd();
            soyIdom.print(($$temp = icon) == null ? '' : $$temp);
          incrementalDom.elementClose('span');
        }
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'wd-btn-label wd-btn-label-icon-' + iconAlignment);
        incrementalDom.elementOpenEnd();
          soyIdom.print(($$temp = label) == null ? '' : $$temp);
        incrementalDom.elementClose('span');
        if (iconAlignment == 'right-center' || iconAlignment == 'right-justified') {
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'wd-btn-icon ' + (($$temp = classIcon) == null ? '' : $$temp) + ' wd-btn-icon-' + iconAlignment);
          incrementalDom.elementOpenEnd();
            soyIdom.print(($$temp = icon) == null ? '' : $$temp);
          incrementalDom.elementClose('span');
        }
      } else {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'wd-btn-icon ' + (($$temp = classIcon) == null ? '' : $$temp) + ' wd-btn-icon-left-center');
        incrementalDom.elementOpenEnd();
          soyIdom.print(($$temp = icon) == null ? '' : $$temp);
        incrementalDom.elementClose('span');
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'wd-btn-label wd-btn-label-icon-left-center');
        incrementalDom.elementOpenEnd();
          soyIdom.print(($$temp = label) == null ? '' : $$temp);
        incrementalDom.elementClose('span');
      }
    } else {
      if (iconAlignment) {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'wd-btn-label wd-btn-label-icon-' + iconAlignment);
        incrementalDom.elementOpenEnd();
          soyIdom.print(($$temp = label) == null ? '' : $$temp);
        incrementalDom.elementClose('span');
      } else {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'wd-btn-label wd-btn-label-noIcon');
        incrementalDom.elementOpenEnd();
          soyIdom.print(($$temp = label) == null ? '' : $$temp);
        incrementalDom.elementClose('span');
      }
    }
  }
}
exports.content = $content;
/**
 * @typedef {{
 *  icon: (!goog.soy.data.SanitizedContent|function()|null|string|undefined),
 *  classIcon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  iconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|function()|null|string|undefined)
 * }}
 */
$content.Params;
if (goog.DEBUG) {
  $content.soyTemplateName = 'WDButton.content';
}


/**
 * @param {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupSpacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupButtons: !Array<?>
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $buttonGroup(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var borderRadius = soy.asserts.assertType(opt_data.borderRadius == null || (goog.isString(opt_data.borderRadius) || opt_data.borderRadius instanceof goog.soy.data.SanitizedContent), 'borderRadius', opt_data.borderRadius, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var groupSpacing = soy.asserts.assertType(opt_data.groupSpacing == null || (goog.isString(opt_data.groupSpacing) || opt_data.groupSpacing instanceof goog.soy.data.SanitizedContent), 'groupSpacing', opt_data.groupSpacing, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var groupButtons = soy.asserts.assertType(goog.isArray(opt_data.groupButtons), 'groupButtons', opt_data.groupButtons, '!Array<?>');
  var btnGroupItemClasses__soy274 = '';
  btnGroupItemClasses__soy274 += 'wd-btn-group-item';
  btnGroupItemClasses__soy274 += borderRadius ? ' wd-btn-' + borderRadius : '';
  btnGroupItemClasses__soy274 += elementClasses ? ' ' + elementClasses : '';
  var btnGroupSpacingAttributes__soy289 = function() {
    incrementalDom.attr('class', 'wd-btn-group-spacing');
    if (groupSpacing) {
      incrementalDom.attr('style', 'width:' + groupSpacing);
    }
  };
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'wd-btn-group-list');
  incrementalDom.elementOpenEnd();
    var button324List = groupButtons;
    var button324ListLen = button324List.length;
        for (var button324Index = 0; button324Index < button324ListLen; button324Index++) {
            var button324Data = button324List[button324Index];
            var btnId__soy299 = button324Index + 1;
              if (button324Index == 0) {
                incrementalDom.elementOpenStart('li');
              incrementalDom.attr('class', 'wd-btn-group-firstitem ' + btnGroupItemClasses__soy274);
          incrementalDom.elementOpenEnd();
              } else if (button324Index == button324ListLen - 1) {
                incrementalDom.elementOpenStart('div');
                btnGroupSpacingAttributes__soy289();
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('li');
                incrementalDom.attr('class', 'wd-btn-group-lastitem ' + btnGroupItemClasses__soy274);
            incrementalDom.elementOpenEnd();
              } else {
                incrementalDom.elementOpenStart('div');
                  btnGroupSpacingAttributes__soy289();
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('li');
                  incrementalDom.attr('class', 'wd-btn-group-miditem-' + btnId__soy299 + ' ' + btnGroupItemClasses__soy274);
              incrementalDom.elementOpenEnd();
              }
              $buttonGroupContent({button: button324Data}, null, opt_ijData);
            incrementalDom.elementClose('li');
          }
      incrementalDom.elementClose('ul');
    }
    exports.buttonGroup = $buttonGroup;
    /**
     * @typedef {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupSpacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  groupButtons: !Array<?>
 * }}
     */
    $buttonGroup.Params;
    if (goog.DEBUG) {
      $buttonGroup.soyTemplateName = 'WDButton.buttonGroup';
    }
    
    
    /**
 * @param {{
 *  button: (?)
 * }    } opt_data
     * @param {Object<string, *>=} opt_ijData
     * @param {Object<string, *>=} opt_ijData_deprecated
     * @return {void}
     * @suppress {checkTypes}
     */
    function $buttonGroupContent(opt_data, opt_ijData, opt_ijData_deprecated) {
      opt_ijData = opt_ijData_deprecated || opt_ijData;
      var $$temp;
      /** @type {?} */
      var button = opt_data.button;
      var groupButtonAttributes__soy330 = function() {
        var $tmp = null;
        if (button.style == 'destructive') {
          $tmp = ' wd-btn-destructive';
        } else if (button.style && button.color) {
          $tmp = ' wd-btn-' + button.style + '-' + button.color;
        } else if (button.style && !button.color) {
          $tmp = ' wd-btn-' + button.style + '-accent';
        } else if (button.color && !button.style) {
          $tmp = ' wd-btn-primary-' + button.color;
        } else {
          $tmp = ' wd-btn-primary-accent';
        }
        incrementalDom.attr('class', 'wd-btn wd-btn-groupbtn' + $tmp + (button.size ? ' wd-btn-' + button.size : ' wd-btn-sm') + (button.darkTheme ? ' wd-btn-darktheme' : '') + (!button.label ? (button.icon || button.classIcon ? ' wd-btn-lone-icon' : '') : '') + (button.iconAlignment == 'left-justified' || button.iconAlignment == 'right-justified' ? ' wd-btn-justified-padding' : '') + (button.elementClasses ? ' ' + button.elementClasses : ''));
        if (button.width && !button.hardWidth) {
          incrementalDom.attr('style', 'min-width:' + button.width);
        }
        if (button.width && button.hardWidth) {
          incrementalDom.attr('style', 'width:' + button.width);
        }
        if (button.disabled) {
          incrementalDom.attr('disabled', 'true');
        }
        if (button.href) {
          incrementalDom.attr('href', button.href);
        }
        if (button.id) {
          incrementalDom.attr('id', button.id);
        }
        if (button.name) {
          incrementalDom.attr('name', button.name);
        }
        if (button.rel) {
          incrementalDom.attr('rel', button.rel);
        }
        if (button.value) {
          incrementalDom.attr('value', button.value);
        }
        if (button.target) {
          incrementalDom.attr('target', button.target);
        }
        if (!button.href) {
          incrementalDom.attr('type', ($$temp = button.type) == null ? 'button' : $$temp);
        }
      };
          if (button.href) {
            incrementalDom.elementOpenStart('a');
            groupButtonAttributes__soy330();
        incrementalDom.elementOpenEnd();
          } else {
            incrementalDom.elementOpenStart('btn');
              groupButtonAttributes__soy330();
          incrementalDom.elementOpenEnd();
          }
          $content({icon: button.icon, classIcon: button.classIcon, iconAlignment: button.iconAlignment, label: button.label}, null, opt_ijData);
      if (button.href) {
        incrementalDom.elementClose('a');
      } else {
        incrementalDom.elementClose('btn');
      }
    }
    exports.buttonGroupContent = $buttonGroupContent;
    /**
     * @typedef {{
 *  button: (?)
 * }}
     */
    $buttonGroupContent.Params;
    if (goog.DEBUG) {
      $buttonGroupContent.soyTemplateName = 'WDButton.buttonGroupContent';
    }

exports.render.params = ["disabled","elementClasses","style","color","size","width","hardWidth","darkTheme","borderRadius","group","groupType","groupSpacing","groupButtons","href","icon","classIcon","iconAlignment","id","label","name","rel","target","type","value"];
exports.render.types = {"disabled":"bool","elementClasses":"string","style":"string","color":"string","size":"string","width":"string","hardWidth":"bool","darkTheme":"bool","borderRadius":"string","group":"bool","groupType":"string","groupSpacing":"string","groupButtons":"list<?>","href":"string","icon":"html|string","classIcon":"string","iconAlignment":"string","id":"string","label":"html|string","name":"string","rel":"string","target":"string","type":"string","value":"string"};
exports.content.params = ["icon","classIcon","iconAlignment","label"];
exports.content.types = {"icon":"html|string","classIcon":"string","iconAlignment":"string","label":"html|string"};
exports.buttonGroup.params = ["elementClasses","borderRadius","groupSpacing","groupButtons"];
exports.buttonGroup.types = {"elementClasses":"string","borderRadius":"string","groupSpacing":"string","groupButtons":"list<?>"};
exports.buttonGroupContent.params = ["button"];
exports.buttonGroupContent.types = {"button":"?"};
templates = exports;
return exports;

});

class WDButton extends Component {}
Soy.register(WDButton, templates);
export { WDButton, templates };
export default templates;
/* jshint ignore:end */
