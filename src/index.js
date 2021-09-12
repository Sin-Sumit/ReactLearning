import React from 'react';
import ReactDom from 'react-dom';
import {values} from './list'; //import the list.js file.
// Can create variable outside the component and use it in component.
const title = 'Hello, World!!';
const author = 'Sumit Singh';


// Greetin here is the main component. Why? Becuase it is rendering out.
function Greeting() { //Uppercase when rendering happens, else it follows camel case where need to export that file.
    return (          //retuning the JSX.
        <div>
            <h1>{title}</h1>   

            {/* Here title is a variable which is used inside the JSX, bycreating a javascript object.*/}

            <h2>{author.toUpperCase()}</h2>
            {/* <Person name='Sumit' age='22' height={182} /> 
            <Person name='Sandeep' age='29' height={192} /> */}
            {/* In above Person name, age, height are the properties used as passing the properties to the component. */}
            
            {/* In below Person Component name, age, height are fetch from the JAVASCRIPT OBJECT when individual objects is defined. */}
            {/* <Person id={values.id} name={values.name} age={values.age} height={values.height}/> */}
            {/* <Person id={values.id} name={values.name} age={values.age} height={values.height}/> */}

            {values.map((value)=>{
                {/* return <Person key = {values.id} value = {value} /> */}
                return <Person key = {values.id} {...value} />//It is a spreadout thing in react passing the properties as it is no object.
            })}
            {/* Above method is using values array and map its objects with the value object and pass them to the component. */}

            {/* Person is a component which is writen outside the main component which is rendering 
            the data in this case main=Greeting, 
            simple put that component inside the main component and it will work. */}
        
        </div>
    );
}

const Person = (props) => { // This is a ES6 kind of writing function or component called as Arrow function.
    // const {name, age, height} = props.value; //New way for the props.value when a object is passed
    const {name, age, height} = props;//Normal way.
    return (                //props is used as property and anything can be used instead of'props'.
        <div>
            <h2>This is {name} and, age is {age}, and height is {height} cm.</h2>
        </div>
    );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
