import React, {Component} from 'react';
import PropTypes from 'prop-types';


class HelloWorld extends Component {
    render() {
        return <div>HELLO {this.props.name}!</div>
    }
}

HelloWorld.defaultProps = {
    name: 'World'
};

HelloWorld.propTypes = {
    name: PropTypes.string
};
export default HelloWorld;