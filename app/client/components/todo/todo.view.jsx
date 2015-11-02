// main.js
var React = require('react');
var ReactDOM = require('react-dom');


var todoView = React.createClass({

    getInitialState: function() {
        return {data: []};
    },
    render: function() {

        if(this.props.data) {
            var todoNodes = this.props.data.map(function (todo) {
                return (
                    <p>{todo.title}</p>
                );
            });
        }
        return (
            <div className="todo">
                Hello, world! I am TODO VIEW!
                {todoNodes}
            </div>
        );

    }

});


export default todoView;

