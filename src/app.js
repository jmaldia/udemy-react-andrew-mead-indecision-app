console.log('App.js is Running');

const app = {
    title: 'The Awesome Indecision App',
    subTitle: 'What a wonderful App',
    options: ['Item One', 'Item Two']
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>  
    </div>
);

const appRoot = document.getElementById('app');

// Create Template JSX Expression
// Render instead of Template
const user = {
    name: 'Jon Maldia',
    age: 42,
    location: 'NYC'
};

function getLocation(location) {
    if (location) { 
        return <p>Location: {location}</p>; 
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
); 

const appRootTwo = document.getElementById('app-two');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);