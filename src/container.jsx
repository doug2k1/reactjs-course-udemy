var React = require('react'),
    Badge = require('./badge');

module.exports = React.createClass({
    render: function () {
        var list = this.props.list.map(function (data) {
            return <Badge number={data.number}>{data.title}</Badge>
        });

        return (
            <div className="container">
                {list}
            </div>
        );
    }
});
