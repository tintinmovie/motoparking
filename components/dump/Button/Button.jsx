var React = require("react");
var classNames = require("classnames");

require("./Button.css");


var Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool
  },
  render: function() {
    return (
      <div
        className={ classNames("Button", this.props.selected && "Button__selected") }
        onClick={ this.props.callback }>
          { this.props.text }
      </div>
    );
  }
});

module.exports = Button;
