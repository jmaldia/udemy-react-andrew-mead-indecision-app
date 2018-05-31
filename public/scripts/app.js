'use strict';

console.log('App.js is Running');

var app = {
    title: 'The Awesome Indecision App',
    subTitle: 'What a wonderful App'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var appRoot = document.getElementById('app');

// Create Template JSX Expression
// Render instead of Template
var user = {
    name: 'Jon',
    age: 42,
    location: 'NYC'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRootTwo = document.getElementById('app-two');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
