# react-getting-started  

I am following the "React: Getting Started" course by Samer Buna on Pluralsight.

Instal the React Developer Tools extension.

Play around with code from this tutorial here: https://jscomplete.com/playground/rgs1.1

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
It is better to use the `npx create-react-app react-app-name`.  

The first thing you should decide when making a React App is the component structure - you should decide how many components to use and what each component should describe (this can be quite difficult and you might need to change things as you go along, renaming or removing components).


### Reactive Updates  
When the state of a React component (the input) changes, the user interface it represents (the output), also changes.
This change in the description of the UI has to be reflected in the device we are working with - normaly through the DOM tree. But with react we dont worry about how or when to managed these changes - React will react to the changes in a components state and automatically update the parts of the DOM that need updating.  

### Virtual Views in Memory  
Using jsx to create to HTML. When your web app receives just the data from the server, in the background with AJAX, you need more than HTML to work with that data. This leaves you with 2 options:  
1. use an enhanced HTML template that has loops and condtionals  
2. rely on the power of JS to generate the HTML from the data  

React uses option two and therefore eleminates the need to parse an enhanced HTML template. An advantage of this is the virtual DOM (aka Tree Reconcilliation algorithm).   

### Virtual DOM and Tree Reconciliation  
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

React components have a one way flow of data and a component can't change the state of its parent. To pass data between components you need to use props.  
  
  
## To pass data from a child to a parent  
The parent component can pass properties to it's child component. Those component properties can be simple primative values OR **function references**. If the parent component passes a function reference to the child component, we can change the state of the parent component _inside_ that function and the form component will be able to invoke that function because it will be part of its props object.

How to use axios with React - [follow this video](https://www.youtube.com/watch?v=oQnojIyTXb8) . First `npm install axios`.  
  

### Component types  
Both functional and class components can be stateful and have side effects or can be purely presentational. Both can use props and state as input objects and output jsx (Virtual DOM). 
Component names _must_ start with capitals, otherwise they can be confused with HTML elements for example a functional component named button must be named Button as <button> is also a HTML element.  
	
**Constants**
You can also render const variables directly into the view just like a functional or class component.

**Props objects**  
Props input is explicit - it is similar to the list of attributes an HTML element can have. The props object represents fixed values and are therefore immutable (cannot be changed).  

**State objects**  
The state input is internal. React uses it to auto-reflect changes in the browser. Within a component, the state object _can_ be changed.  

**Functional Components**  
Functional Components are prefered because they are simpler.

**Class Components**  
Though class components are a bit more complex they can also be more powerful.  
  
  

# React Functional Components  
Important to know for React functional components: State, props and hooks.  

## Hooks
The useState function in react is a type of hook. 

## Props object
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

### Props and Data
You can make a component receive data through its props. To do this you need to take the object that holds the data and 'spread' it inside the element using the _spread operator_ eg `<Element {...testData[0]} />`. When you use the spread operator with a data object (for example from an API) in a React component, all the properties of that object will become props for this component. Note then, that you can only do this with Functional Components and not Class Components. 

eg. This will spread _all_ of the data of the object across 3 cards:
```
<Card {...testData[0]} />
<Card {...testData[1]} />
<Card {...testData[2]} />
```



## State object
State in a React component can only be accesed by that component itself and no other components. To make state accessable between components, you need to put the state inside of a parent component that the other required components are children to. You then need to 'flow' the values of the state from the parent to the children - this can be done using the props object. This is known as 'the one way flow of data' (parent to child). Parent components can also flow behaviour down to children.  

Where to place state is an important question to think about for the design of your app. It is best to place state as far down a tree as possible - as close as possible to the children who will need it.

### useState()
useState() is similar to a mixin or a module but it is a stateful one that hooks components into states. This must be imported with `import React, {useState} from 'react';` inside of any component that uses it.
`const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue); `
useState() can return two objects:
- state object (getter): this can be of any type you want it to be (string, int, array etc)
- update function (setter)  

Because all functions in JS can only return one thing, the useState function returns an array with the two elements needed.


# Class Components  

In class components, instead of recieving props as arguments, both the props and the state are managed on an instance of the class. (This is just like normal OOP, you make a class and then have to instantiate it - each instance(object) of a class gets 'props and state'). In React an instance is internally created every time we use a component (like rendering <ComponentName />).

Note: Instead of using a constructor (such as the example below), you can simply used a class field like this:  
`state ={ profiles:[] };`   
be careful(!), the above example is not yet part of the official JS language but it is expected to be at some stage. 
The above "class field" syntax has some power when combined with arrow functions.


## Class Constructors
An example of a class constructor:
```
    constructor(props) {
        super(props);
        this.state = {
	profiles:[]
	};
    }
```  

To read this new state element, when a component (in the jsx form) needs it, you can "flow it down" with code like this:
`<Card profiles={this.state.profiles}/>`   
Here, `state` is an object on the instance of the Card component (in jsx form) and
`profiles` array is a property on that object.

### The Super method  
The super method is needed to honour the link between the App class and the class that it extends from (React.Component). 

### this.State
Unlike with "useState" in functional components, which can take anything (eg string or int), class components use "this.State" and this.State instance property _must_ be an object.

## Changing state with a class component
Changing state with class components is different to functional components and a little bit harder than using hooks.  
They are different to hooks in that the function is always named setState, it will always receive an object and it will merge the object with the current state.  `onChange={event => this.setState({ userName: event.target.value })}`  

Here is an example of capturing the 'changing state' of the input of a form when a user types into it. 

```
state = { userName: ''};
    handleSubmit = (event) => { event.preventDefault();}

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    //if you just have this without the below onChange, then no one would be able to type into the form b/c React is 'controlling' value of the input
                    value={this.state.userName}
                    //the onChange event lets the DOM tell React that something has changed
                    onChange={event => this.setState(
                        //to grab the value of the input you use event.target.value
                        { userName: event.target.value }
                        )}
                />
```

# Events and Refs
Every single React event function recieves an event argument. For React events the "class field" syntax you see below is just a wrapper around the native js event - all events available in native JS are available here.

To take user input you need to define an event handler using the "class field" syntax - you then pass this to the `onSubmit` using the 'this' keyword.  eg:
```
handleSubmit = (event) => {
	//preventDefault is important here as it stops the normal HTML behaviour of the page refreshing on submit
        event.preventDefault();
    }
```
    
By using `onSubmit={this.handleSubmit}` on the form, you can utilise native form submision features - like making a form 'required' by adding this to the input field.

## Forms and Refs
You have options to get info from a form.  
You can get the input value by reading it **from the DOM element**.To get input from a form in this way, you need to use a reference. To do this you need to do two things:
1. add `ref = {this.refName}` into the input field. 
2. add instansiate a ref **object** using `refName = React.createRef();`

Alternatively you can use Controlled Components to control the input values directly though React itself.eg. the above  `onChange={event => this.setState({ userName: event.target.value })}`  example.  
The advantage of this method is that it notes every letter the user types as they type, this can be useful when you need to provide feedback as the user is typing.




# Styling in React

You can style your react elements with a css sheet as normal or you can style with a style property inside of the jsx tag.
As there are pros and cons (see below) to both ways of styling, some people like to use both JS styles and Global styles.
Styling with CSS/Global styling  

**Styling with style properties**  
you can add style to your elements using the style property. Unline "inline HTML styling" this is acceptable and not as frowned uppon (although there is still debate around this!). 
The points against it:  
- it feels like inline styling 
- it would be super difficult to do media queries with JS styling 
The points for it:  
- excelent for conditional styling (instead of having to use different class names based on a certain condition, with JS styles, you can just output different objects which some might consider a bit cleaner)
- it is JS, not strings, therefore 
	- we can generate it and reuse it using the complete power of JS. 
	- We can use conditional styles in this way without having to deal with conditional classNames 
	- you can put logic directly into the style code eg `<div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>`
You pass this special React property a JS object (just like with events).
You use curly braces for a dynamic value and then the inner curley braces are to start an object literal.  
Inside the style object you can specify any styles you want the element to have using the JS API for styles. 
The syntax for this is not the same as regular CSS styling as it is entirely JS. It uses camel case for property names and strings for values.
Example:
` <div className="info" style={{display: 'inline-block', marginLeft: 10}}> `  

Learn more about styling in JS here: github.com/MicheleBertoli/css-in-js (some are depreciated so be careful).
A good starting point is the: bable-plugin-css-in-js and react-native-web.


# Extras

Note: if you need to enclose multiple elements without introducing a new div parent, you can use `<React.Fragment>` or `<>` (if latter is supported in the environment it will get compiled to the former). It is similar to putting React elements into a <div> but no new DOM parent will be introduced. 
  
**JavaScript Closures**
**React uses function references** so it is important when you are passing functions to other components (in exports and imports) that you do not invoke the function - so only use the function name and not the name plus brackets eg Function(). This also means that if you want to pass certain parameters to a function inside of a component, that you cannot do this. The only way to do this without inducing an error is by wrapping the 'invocation' of the function inside an arrow function.
eg. you cannot do this: `<button onClick={props.onClickFunction(props.increment)}>` but you can do this `<button onClick={() => props.onClickFunction(props.increment)}>`. The latter will work through the magic of JavaScript closers.  

**Immutable = immutateable -> meaning it cannot be changed (mutated)**
Const is NOT an immutable object - you can change it. Const just means that it has a "constant reference to it". You can still change that object just like you can do in functions that receive objects as arguments.  
Scaler Values: scaler variables (such as strings or integers) ARE immutable and their value cannot be mutated. When you use const with a scaler value you cannot change their references either. HOWEVER, if you used cosnt with an array or object, that does not mean that the content of this array or object cannot change. It just means that the reference will constantly be pointing to this particular array or object.  
Variables defined with const are much better than let for scaler values and function as you are guaranteed that their value did not accidentally change.

# General JS Notes
### Object Literals
The most common way to create a JS object is using an object lieral. This is basically where you just say `const obj = { key:value};` 

```
const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
	p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
  InverseOfPI,
};
```  
Here are some quick tests:
Using the above code, what is the output of:  
`console.log(obj.mystery);`   //undefined.  This is because the 'mystery' property was defined with a dynamic property syntax which means JS evaluates the expression first and whatever the expression evaluates to, will become the object's property. In this case the object evaluates to 'answer' (as you can see at the top of the code), this explains the below output.
`console.log(obj.answer);`   //42
`console.log(obj);`   //
Note: the last line of code is the same as `InverseOfPI : InverseOfPI` but because the key and value are the same you can write it once. 


### Array Destructuring

### Arrow Functions
A way to define functions without typing the keyword function. Declaring a variable as a function in the regular way: `const x = function(){};`. Declaring a variable as a function with an arrow function: `const y = () => {};`.
Arrow functions are preferable because they behave more predictably with closures. This is because an arrow function does not care who calls it whereas a regular function does. 
A regular function always binds the value of its "this" keyword with its caller.
An arrow function will close over the value of the "this" keyword for its scope at the time it was defined. "The value of the "this" keyword inside an arrow function depends on WHERE the function was DEFINED (the scope that defined the function)." This makes it very useful for delayed execution cases (like event and listeners) because it gives easy access to the defining environment not the calling environment.  

These are all valid (and the same) Arrow Functions:

`const square1 = (a) => {
return a * a};`  

`const square1 = (a) => return a * a;`  
Note you can only do this (remove the () around the argument) if the function recieves a single argument.
`const square1 = a => return a * a;`  
This syntax is usually popular for functions that get passed to array methods

  
## To Look Into
- JS closures -> why a function needs to be wrapped with an arrow function in order to work
- imperativ vs declarative programing (React is declarative and uses the virtual DOM, in order to get pure HTML to update only one element in a similar way, you need to write imperative logic),
- spread operator  `{...testData[0]}`  
- how to pass props from class component to function component
- objects vs instances in React
