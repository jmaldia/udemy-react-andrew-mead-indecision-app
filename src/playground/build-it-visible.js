console.log('Build it Visible App is Running');

// Andrew's Solution
const appRoot = document.getElementById('app');
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            { visibility && (
                <div>
                    <p>This is the hidden message</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

// My Solution
// const appRoot = document.getElementById('app');

// const showMessage = () => {
//     renderUITwo();
// }

// const hideMessage = () => {
//     renderUIOne();
// }


// const renderUIOne = () => {
//     const template = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={showMessage}>Show Details</button>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// const renderUITwo = () => {
//     const templateTwo = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={hideMessage}>Hide Details</button>
//             <p>This is the hidden message</p>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderUIOne();