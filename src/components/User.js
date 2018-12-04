import React, {Component} from 'react';

class User extends Component {
    render() {
        return <div>
            <h3>user name: {this.props.name}</h3>
            <h3>user age: {this.props.age}</h3>
            <h3>isActivated: {this.props.isActivated}</h3>
            <h3>interests: {this.props.interests}</h3>
            <h3>interests: {this.props.address}</h3>
        </div>
    }
}

export default User;