'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormCore = require('./core/FormCore.js');

var formCore = _interopRequireWildcard(_FormCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.values = {};
    return _this;
  }

  Form.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    return {
      formContext: {
        handleChange: function handleChange(key, name, value, propagate) {
          return _this2.handleFieldChange(key, name, value, propagate);
        }
      }
    };
  };

  Form.prototype.handleFieldChange = function handleFieldChange() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var name = arguments[1];
    var value = arguments[2];
    var propagate = arguments[3];

    this.values = formCore.handleFieldChange(this.values, key, name, value);
    if (propagate) {
      this.props.onChange && this.props.onChange(this.values);
    }
  };

  Form.prototype.getValues = function getValues() {
    return formCore.getValuesObject(this.values);
  };

  Form.prototype.getFormData = function getFormData() {
    return formCore.getFormData(this.values);
  };

  Form.prototype.render = function render() {
    return _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          return e.preventDefault();
        } },
      this.props.children
    );
  };

  return Form;
}(_react2.default.Component);

Form.childContextTypes = {
  formContext: _propTypes2.default.object
};
exports.default = Form;