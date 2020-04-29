# react-getting-started  

I am following the "React: Getting Started" course by Samer Buna on Pluralsight.

Instal the React Developer Tools extension.

jsdrops.com/rgs1.1

##  Why use React?
jscomplete.com/why-react
React is technically a library (although it acts like a framewor) for building user interfaces. React is small and therefore needs to rely on other libraries for a full and robust solution.  
"Reacti is 'declartive'", this can be interpreted as: We can 'describe a user interface' to React and it builds the actual interface for us without us having to manually build them with native web APIs and JS.

What are the benefits of a library over a framework?
Frameworks are not flexible
Frameworks are large and full of features and that makes them hard to customise for specialised cases.

UNIX philosphy: write one thing and do it well - React follows this philosphy

React uses the language to model the state of UIs, not the transactions on them.

**Positives of React**

- Virtual DOM is much easier to work with than DOM API  
- the learning curve is low for those who already know JS  
- Learning React Native pays of for IOS and Android mobile applications - you can even share some logic between mobile and web applications  
- React team at Facebook tests all new features which increases the trust in the library - it is rare to see big bugs in the library  
- React established a new language between developers and browsers that allowed developers to declairatively describe 'stateful user interfaces' - this means instead of coming up with steps for the transactions on their interfaces devs just describe the interfaces in terms of a final state, like a function. When transations happen to that state React takes care of updating the user interfaces based on that  


# React
## Some basics
Using Node and NPM to create a React App.
It is better to use the `npx create-react-app react-app-name`


### Reactive Updates  
When the state of a React component (the input) changes, the user interface it represents (the output), also changes.
This change in the description of the UI has to be reflected in the device we are working with - normaly through the DOM tree. But with react we dont worry about how or when to managed these changes - React will react to the changes in a components state and automatically update the parts of the DOM that need updating.  

### Virtual Views in Memory  
Using jsx to create to HTML. When your web app receives just the data from the server, in the background with AJAX, you need more than HTML to work with that data. This leaves you with 2 options:  
1. use an enhanced HTML template that has loops and condtionals  
2. rely on the power of JS to generate the HTML from the data  

React uses option two and therefore eleminates the need to parse an enhanced HTML template. An advantage of this is the virtual DOM (aka Tree Reconcilliation algorithm).   

### Virtual DOM
React uses the Virtual DOM to compare versions of the UI in memory before it acts on them.  
React uses a "smart diffing" algorithm in order to update the virtual DOM.

**My simple metaphor for the Virtual DOM (VD)...**  
Remember those 'spot the difference' pictures from when you were a kid? Think of the UI as one of these pictures and as a change in state as one of the 'differences' that needs to be spotted.
**In the pure HTML way**: every change in state means that the entire picture needs to be "drawn" again from scratch.
**In the React Virtual DOM way**: the VD can quickly "spot the difference" between the previous state and the updated state and instead of drawing the entire picture again from scratch, it will _only update the elements that are needed_. This is possible because we have a representation of the UI in memory because it was written in JS - the VD compares previous state to current state and updates what is needed.

_**Why should I care?**_
Imagine you have a website with a counter that counts down (in seconds) until something is put on sale and it also has an input field where you can pre-order. With the pure HTML way, you will never be able to use this input field because the second you type something into it - it will be entirely refreshed as the entrie page needs to rerender for the counter to continue (there are ways around this with imperative coding). Whereas this would never be a problem with a React App thanks to the VD.

**JSX**
JSX is complied to the pure JS calls that create the HTML output. JSX (like twig) supports dynamic expressions (functions placed into {}). JSX is not executed by the browser, it is executed by the JSX extension and compiled to something the browser can understand.  
Bable is a compiler that can convert JSX into react API calls.
An Exapmple:

| React API Calls  | JSX          |
| ------------- |:-------------:|
| `"use strict";  React.createElement("div",null, "Hello React!");`   | `<div>Hello React!</div>;`  |


## Components  
Compontents can be nested and can be reused. Components can be thought of like functions, where:  
- the _input are things like props and state_ and 
- _output is the description of the UI_.   

Unlike functions, however, they do not need to be 'invoked' but are just used like regular html elements. Furthermore, they can have a private state - to hold any data that may change over the lifecyle of the component.  

### Component types  
Both functional and class components can be stateful and have side effects or can be purely presentational. Both can use props and state as input objects and output jsx (Virtual DOM). 
Component names _must_ start with capitals, otherwise they can be confused with HTML elements for example a functional component named button must be named Button as <button> is also a HTML element.

**Props objects**  
Props input is explicit - it is similar to the list of attributes an HTML element can have. The props object represents fixed values and are therefore immutable (cannot be changed).  

**State objects**  
The state input is internal. React uses it to auto-reflect changes in the browser. Within a component, the state object _can_ be changed.  

**Functional Components**  
Functional Components are prefered because they are simpler.

**Class Components**  
Though class components are a bit more complex they can also be more powerful.

# Hooks
The useState function in react is a type of hook. 

## State
State in a React component can only be accesed by that component itself and no other components. To make state accessable between components, you need to put the state inside of a parent component that the other required components are children to. You then need to 'flow' the values of the state from the parent to the children - this can be done using the props object. This is known as 'the one way flow of data' (parent to child). Parent components can also flow behaviour down to children.  

Where to place state is an important question to think about for the design of your app. It is best to place state as far down a tree as possible - as close as possible to the children who will need it.

### Props object
Props can be used to pass any object value from one component to others. Props can hold functions(which are seen as an object in JS) or data and they can be used to pass functions/data between components. 
Props are majorly linked to the concept of "responsibility isolation" and separation of responsibilites.

Where you are rendering it:  
To pass a prop to a component you specify an attribute inside of the component tag (similar to what you would do with a HTML tag) where you are rendering it (inside the App component for example).  

In the function componenet:  
You then put 'props' (it doesn't have to be called 'props' but that is the convention) inside of the argument to the component function. ALL function components receive this object, _even when they have no attributes_.

Because a component can receive many attributes, the props object will have a key/value pair for each attribute.  
Example:  
In the Display Component:  
```
function App() {
	return (
    <div>
      <Display message={counter}/>
    </div>  
  );
}
```

In the Function Component:  
```
function Display(props) {
	return (
  	<div>{props.message}</div>
  );
}
```

### useState()
useState() is similar to a mixin or a module but it is a stateful one that hooks components into states. This must be imported with `import React, {useState} from 'react';` inside of any component that uses it.
`const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue); `
useState() can return two objects:
- state object (getter): this can be of any type you want it to be (string, int, array etc)
- update function (setter)  

Because all functions in JS can only return one thing, the useState function returns an array with the two elements needed.


# Tree Reconciliation 
#### Array Destructuring

#### Arrow Functions


# Extras

Note: if you need to enclose multiple elements without introducing a new div parent, you can use `<React.Fragment>` or `<>` (if latter is supported in the environment it will get compiled to the former). It is similar to putting React elements into a <div> but no new DOM parent will be introduced. 
  
**JavaScript Closures**
**React uses function references** so it is important when you are passing functions to other components (in exports and imports) that you do not invoke the function - so only use the function name and not the name plus brackets eg Function(). This also means that if you want to pass certain parameters to a function inside of a component, that you cannot do this. The only way to do this without inducing an error is by wrapping the 'invocation' of the function inside an arrow function.
eg. you cannot do this: `<button onClick={props.onClickFunction(props.increment)}>` but you can do this `<button onClick={() => props.onClickFunction(props.increment)}>`. The latter will work through the magic of JavaScript closers.  

  
## To Look Into
- JS closures -> why a function needs to be wrapped with an arrow function in order to work
- imperativ vs declarative programing (React is declarative and uses the virtual DOM, in order to get pure HTML to update only one element in a similar way, you need to write imperative logic),
