import React from 'react';
import './GithubCardsApp.css';
import axios from 'axios';


class Form extends React.Component {
    state = {userName: ''};

    handleSubmit = async (event) =>{
        event.preventDefault();
        const resp = await
            axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data)
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
