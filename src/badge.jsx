var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return { count: this.props.number };
    },

    handleClick: function () {
        this.setState({
            count: this.state.count + 1
        });
    },

    render: function () {
        return (
            <button className="btn btn-primary" type="button" onClick={this.handleClick}>
                {this.props.children} <span className="badge">{this.state.count}</span>
            </button>
        );
    }
});
