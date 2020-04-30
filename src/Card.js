import React from 'react';
import './GithubCardsApp.css';

/*const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];*/

const GitList = (props) => (
    <div>
        {/*this line is a mix of js & React. .map is a js function
        .map takes a function as an argument & converts the array befre the dot into a new array using the return values in the function.*/}
        {props.profiles.map(profile => <Card {...profile} />)}
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
