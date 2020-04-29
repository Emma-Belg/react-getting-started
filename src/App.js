import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Button, Display} from './jscomplete-playground.js';

function App() {
    //const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue);
    const [counter, setCounter] = useState(0)
    //the argument of setCounter will become the new value of counter here
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return (
        <div className="App">
            <header className="App-header">
                <Hello/>
                {/*The value of the tag here becomes the */}
                <Button onClickFunction = {incrementCounter} increment = {1}/>
                <Button onClickFunction = {incrementCounter} increment = {5}/>
                <Button onClickFunction = {incrementCounter} increment = {13}/>
                <Display message ={counter} />
            </header>

        </div>
    );
}

export default App;
