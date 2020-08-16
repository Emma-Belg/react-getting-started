import React from 'react';
import './GithubCardsApp.css';
import axios from 'axios';

//Ways to improve this code
    /*this is thought to be too much responsibility for one component, it both fetches and handles data
    also your whole app should not depend on a library like axios, you should have a small agent type module
    this 'agent' module's responsibility should be to communicate with APIs
    you should then make your code only depend on this agent module*/
    //You could also extract the logic about managing the state of the user input

class Form extends React.Component {
    state = {userName: ''};

    handleSubmit = async (event) =>{
        event.preventDefault();
        const resp = await
            axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data)
        //this is to reset the input box with an empty string, otherwise the last typed value would stay
        this.setState({userName:''})

        /* console.log(
            //grab the form input using the below, current just means the current value and value is obvs the value
            //this.userNameInput.current.value
            //this.state.userName
            resp.data
        )*/
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    //if you just have this without the below onChange, then no one would be able to type into the form b/c React is 'controlling' value of the input
                    value={this.state.userName}
                    //the onChange event lets the DOM tell React that something has changed
                    onChange={event => this.setState(
                        //to grab the value of the input you use event.target.value
                        {userName: event.target.value}
                    )}
                    placeholder="GitHub username"
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;
