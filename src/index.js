import React from 'react';
import ReactDom from 'react-dom';

// Greetin here is the main component. Why? Becuase it is rendering out.
function Greeting() { //Uppercase when rendering happens, else it follows camel case where need to export that file.
    return (          //retuning the JSX.
        <div>
            <h1>Hello, World!!</h1>
            <Person /> 
            {/* Person is a component which is writen outside the main component which is rendering 
            the data in this case main=Greeting, 
            simple put that component inside the main component and it will work. */}
        </div>
    );
}

const Person = () => { // This is a ES6 kind of writing function or component called as Arrow function.
    return (
        <div>
            <h2>This is Sumit Singh</h2>
            <h3>And I am Graduated.</h3>
        </div>
    );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
