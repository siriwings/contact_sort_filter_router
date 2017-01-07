import React,{Component} from 'react';
import {Link} from 'react-router';
import Contacts from './Contacts';

class App extends Component{
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render(){
        return (
            <div>
                <ul>
                    <li className="appli"><Link to="home">Home</Link></li>
                    <li className="appli"><Link to="about">About</Link></li>
                    <li className="appli"><Link to="articles">Articles</Link></li>
                </ul>
                {this.props.children}
                <Contacts/>
            </div>
        );
    }
}

export default App;