/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from WDButtonGroup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WDButtonGroup.
 * @public
 */

goog.module('WDButtonGroup.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('WDButton.incrementaldom', 'render');


/**
 * @param {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  color: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>,
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var style = soy.asserts.assertType(opt_data.style == null || (goog.isString(opt_data.style) || opt_data.style instanceof goog.soy.data.SanitizedContent), 'style', opt_data.style, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var color = soy.asserts.assertType(opt_data.color == null || (goog.isString(opt_data.color) || opt_data.color instanceof goog.soy.data.SanitizedContent), 'color', opt_data.color, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var size = soy.asserts.assertType(opt_data.size == null || (goog.isString(opt_data.size) || opt_data.size instanceof goog.soy.data.SanitizedContent), 'size', opt_data.size, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spacing = soy.asserts.assertType(opt_data.spacing == null || (goog.isString(opt_data.spacing) || opt_data.spacing instanceof goog.soy.data.SanitizedContent), 'spacing', opt_data.spacing, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var buttons = soy.asserts.assertType(goog.isArray(opt_data.buttons), 'buttons', opt_data.buttons, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var borderRadius = soy.asserts.assertType(opt_data.borderRadius == null || (goog.isString(opt_data.borderRadius) || opt_data.borderRadius instanceof goog.soy.data.SanitizedContent), 'borderRadius', opt_data.borderRadius, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var name = soy.asserts.assertType(opt_data.name == null || (goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy14 = function() {
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
    incrementalDom.attr('class', 'wd-btn-group' + $tmp + (type ? ' wd-btn-group-' + type : '') + (size ? ' wd-btn-group-' + size : '') + (borderRadius ? ' wd-btn-' + borderRadius : '') + (elementClasses ? ' ' + elementClasses : ''));
    if (id) {
      incrementalDom.attr('id', id);
    }
    if (name) {
      incrementalDom.attr('name', name);
    }
  };
  incrementalDom.elementOpenStart('div');
      attributes__soy14();
  incrementalDom.elementOpenEnd();
    $buttonList(opt_data, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  style: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  color: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  size: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>,
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'WDButtonGroup.render';
}


/**
 * @param {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $buttonList(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var borderRadius = soy.asserts.assertType(opt_data.borderRadius == null || (goog.isString(opt_data.borderRadius) || opt_data.borderRadius instanceof goog.soy.data.SanitizedContent), 'borderRadius', opt_data.borderRadius, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spacing = soy.asserts.assertType(opt_data.spacing == null || (goog.isString(opt_data.spacing) || opt_data.spacing instanceof goog.soy.data.SanitizedContent), 'spacing', opt_data.spacing, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var buttons = soy.asserts.assertType(goog.isArray(opt_data.buttons), 'buttons', opt_data.buttons, '!Array<?>');
  var itemClasses__soy85 = '';
  itemClasses__soy85 += 'wd-btn-group-item';
  itemClasses__soy85 += borderRadius ? ' wd-btn-' + borderRadius : '';
  itemClasses__soy85 += elementClasses ? ' ' + elementClasses : '';
  var spacingAttributes__soy100 = function() {
    incrementalDom.attr('class', 'wd-btn-group-spacing');
    if (spacing) {
      incrementalDom.attr('style', 'width:' + spacing);
    }
  };
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'wd-btn-group-list');
  incrementalDom.elementOpenEnd();
    var button154List = buttons;
    var button154ListLen = button154List.length;
        for (var button154Index = 0; button154Index < button154ListLen; button154Index++) {
            var button154Data = button154List[button154Index];
            var btnId__soy110 = button154Index + 1;
              if (button154Index == 0) {
                incrementalDom.elementOpenStart('li');
              incrementalDom.attr('class', 'wd-btn-group-firstitem ' + itemClasses__soy85);
          incrementalDom.elementOpenEnd();
              } else if (button154Index == button154ListLen - 1) {
                incrementalDom.elementOpenStart('div');
                spacingAttributes__soy100();
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('li');
                incrementalDom.attr('class', 'wd-btn-group-lastitem ' + itemClasses__soy85);
            incrementalDom.elementOpenEnd();
              } else {
                incrementalDom.elementOpenStart('div');
                  spacingAttributes__soy100();
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('li');
                  incrementalDom.attr('class', 'wd-btn-group-miditem-' + btnId__soy110 + ' ' + itemClasses__soy85);
              incrementalDom.elementOpenEnd();
              }
              $templateAlias1({disabled: button154Data.disabled, elementClasses: button154Data.elementClasses, style: button154Data.style, color: button154Data.color, size: button154Data.size, width: button154Data.width, hardWidth: button154Data.hardWidth, darkTheme: button154Data.darkTheme, borderRadius: button154Data.borderRadius, href: button154Data.href, icon: button154Data.icon, classIcon: button154Data.classIcon, iconAlignment: button154Data.iconAlignment, id: button154Data.id, label: button154Data.label, name: button154Data.name, rel: button154Data.rel, target: button154Data.target, type: button154Data.type, value: button154Data.value}, null, opt_ijData);
            incrementalDom.elementClose('li');
          }
      incrementalDom.elementClose('ul');
    }
    exports.buttonList = $buttonList;
    /**
     * @typedef {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>
 * }}
     */
    $buttonList.Params;
    if (goog.DEBUG) {
      $buttonList.soyTemplateName = 'WDButtonGroup.buttonList';
    }

exports.render.params = ["elementClasses","type","style","color","size","spacing","buttons","borderRadius","id","name"];
exports.render.types = {"elementClasses":"string","type":"string","style":"string","color":"string","size":"string","spacing":"string","buttons":"list<?>","borderRadius":"string","id":"string","name":"string"};
exports.buttonList.params = ["elementClasses","borderRadius","spacing","buttons"];
exports.buttonList.types = {"elementClasses":"string","borderRadius":"string","spacing":"string","buttons":"list<?>"};
templates = exports;
return exports;

});

class WDButtonGroup extends Component {}
Soy.register(WDButtonGroup, templates);
export { WDButtonGroup, templates };
export default templates;
/* jshint ignore:end */
