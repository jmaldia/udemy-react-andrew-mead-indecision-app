console.log('App.js is Running');

let app = {
    title: 'The Awesome Indecision App',
    subTitle: 'What a wonderful App'
};

// JSX - JavaScript XML
let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

let appRoot = document.getElementById('app');

// Create Template JSX Expression
// Render instead of Template
let user = {
    name: 'Jon',
    age: 42,
    location: 'NYC'
};

let templateTwo = (
    <div>
        <h1>{user.name.toUpperCase() + '!'}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

let appRootTwo = document.getElementById('app-two');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);