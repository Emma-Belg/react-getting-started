import React from 'react';
import './GithubCardsApp.css';


const GitList = (props) => (
    <div>
        {/*this line is a mix of js & React. .map is a js function
        .map takes a function as an argument & converts the array befre the dot into a new array using the return values in the function.*/}
        //because this is a dynamic element React wants me to use a unique key. As the profile.id is unique, we have used those as the key.
        {props.profiles.map(profile => <Card key={profile.id}{...profile} />)}
    </div>
);


class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
                <img src={profile.avatar_url} />
                <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                    <div className="name" style={{fontSize: '125%'}}>
                        {profile.name}
                    </div>
                    <div className="company" style={{margin: '1rem'}}>
                        {profile.company}
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
export {GitList};
