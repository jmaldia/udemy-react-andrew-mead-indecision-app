console.log('App.js is Running');

const app = {
    title: 'The Awesome Indecision App',
    subTitle: 'What a wonderful App',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option); // add the option value to the array above
        e.target.elements.option.value = ''; // set the field to blank
        renderUI();
    }
};

const removeOptions = () => {
    app.options = [];
    renderUI();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const appRoot = document.getElementById('app');

const renderUI = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

            <ol>
                { 
                    app.options.map((option) => <li key={option}>{option}</li>) 
                }
            </ol>  
            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove Options</button>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

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