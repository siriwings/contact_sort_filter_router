import React,{Component} from 'react';

class ContactRemover extends Component {
    handleClick() {

        this.props.onRemove();
    }

    render() {
        return (
            <button className="waves-effect waves-light btn"
                onClick={this.handleClick.bind(this)}>
                Remove
            </button>
        );
    }
}

export default ContactRemover;

