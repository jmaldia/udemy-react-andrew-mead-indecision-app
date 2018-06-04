'use strict';

console.log('App.js is Running');

var app = {
    title: 'The Awesome Indecision App',
    subTitle: 'What a wonderful App',
    options: ['Item One', 'Item Two']
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
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

ReactDOM.render(template, appRoot);

// Create Template JSX Expression
// Render instead of Template
// const user = {
//     name: 'Jon Maldia',
//     age: 42,
//     location: 'NYC'
// };

// function getLocation(location) {
//     if (location) { 
//         return <p>Location: {location}</p>; 
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// ); 

// const appRootTwo = document.getElementById('app-two');


// ReactDOM.render(templateTwo, appRootTwo);
