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

**Virtual DOM**
React uses the Virtual DOM to compare versions of the UI in memory before it acts on them.  

**JSX**
JSX is complied to the pure JS calls that create the HTML output. JSX is not executed by the browser, it is executed by the JSX extension and compiled to something the browser can understand.  
Bable is a compiler that can convert JSX into react API calls.
An Exapmple


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

### useState()
This must be imported with `import React, {useState} from 'react';` inside of any component that uses it.
useState() can return two objects:
- state object (getter): this can be of any type you want it to be (string, int, array etc)
- update function (setter)  

