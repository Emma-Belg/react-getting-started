import React from 'react';
import './GithubCardsApp.css';
import Card, {GitList} from "./Card.js";
import Form from "./Form";


class GithubCardsApp extends React.Component {
/*    constructor(props) {
        //this super method is needed to honour the link between the App class and the class that it extends from (React.Component)
        super(props);
        this.state = {
            profiles: testData,
        };
    }*/
    //the below is the same as the above constructor
    state = { profiles:[], };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            //this is the spread operator syntax and is equiv to doing a concat operation
            profiles: [...prevState.profiles, profileData],
            })
        );
    };

    render() {
        return (
            <div>
                <div className="GithubCardsApp">{this.props.title}</div>
                    <Form onSubmit={this.addNewProfile}/>
                    <GitList profiles={this.state.profiles}/>
            </div>
            )
    }
}

export default GithubCardsApp;
