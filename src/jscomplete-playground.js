import React, {useState} from 'react';
import './App.css';

function Hello() {
    return <div>Hello React!</div>;
}

function Button(props) {

    const handleClick = () => props.onClickFunction(props.increment);
    return (
        //this prop references the tag inside the Button function element in App.js
        //the onClickFunction property allows the button to invoke the incrementCounter function found in App.js
        //This is because the value of onClickFunction is incrementCounter which is the function inside of the App Component
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    const render = () => {
        (new Date).toLocaleTimeString()
    }
    setInterval(render, 1000);
    return(
        <div>
            {/*this references the tag inside the Display function element in App.js*/}
            The sum is: {props.message}
            <br />
            <input />
            <br />
            <pre>{() => setInterval((new Date).toLocaleTimeString(), 1000)}</pre>
        </div>
    )
}


export {Hello};
export {Button};
export {Display};