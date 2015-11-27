var React = require('react'),
    Container = require('./container');

var data = [{
    title: 'Item 1',
    number: 2
}, {
    title: 'Item 2',
    number: 10
}];

React.render(<Container title="Container" list={data} />, document.body);
