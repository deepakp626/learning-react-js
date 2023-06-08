import React from "react";

export default class User extends React.Component {
    componentWillUnmount(){
        alert("User has been deleted")
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name:deepak</li>
                    <li>Emial:deepak@gamil.com</li>
                    <li>contact:12345</li>
                </ul>
            </div>
        )
    }
}