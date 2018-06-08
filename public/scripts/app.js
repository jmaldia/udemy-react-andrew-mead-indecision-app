'use strict';

console.log('App.js is Running');

var app = {
    title: 'The Awesome Indecision App',
    subTitle: 'What a wonderful App',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option); // add the option value to the array above
        e.target.elements.option.value = ''; // set the field to blank
        renderUI();
    }
};

var removeOptions = function removeOptions() {
    app.options = [];
    renderUI();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderUI = function renderUI() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove Options'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderUI();

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
