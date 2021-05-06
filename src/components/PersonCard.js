import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const{firstName, lastName, age, hcolor}=this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hcolor}</p>
            </div>
        );
    }
}

export default PersonCard;