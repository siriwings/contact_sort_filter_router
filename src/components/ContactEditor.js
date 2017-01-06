import React,{Component} from 'react';

class ContactEditor extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            phone:""
        };
    }

    handleChange(e){
        var nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }

    handleClick(){

        this.props.onEdit(this.state.name, this.state.phone);

    }


    //6-2 단락 d 참고.
    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
    }


    render(){
        return (
            <div id="creator">
                <input type="text"
                       name="name"
                       placeholder="name"
                       value={this.state.name}
                       onChange={this.handleChange.bind(this)}/>
                <input type="text"
                       name="phone"
                       placeholder="phone"
                       value={this.state.phone}
                       onChange={this.handleChange.bind(this)}/>
                <button className="waves-effect waves-light btn"
                        onClick={this.handleClick.bind(this)}>
                    Edit
                </button>
            </div>
        );
    }
}

export default ContactEditor;