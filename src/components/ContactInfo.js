import React,{Component} from 'react';

class ContactInfo extends Component{

    handleClick(){
        this.props.onSelect2(this.props.contactKey);
    }


    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }


    render(){
        console.log("rendered: " + this.props.name);
        //강좌 3편 JSX 에서 언급했었던 inline styling이 사용.
        //리턴받은 값이 true면 적용.
        let getStyle=isSelect=>{
            if(!isSelect) return;

            let style = {
                fontWeight:'bold',
                backgroundColor:'#4efcd8'
            };

            return style;
        }

        return (
            <li style={getStyle(this.props.isSelected2)}
                onClick={this.handleClick.bind(this)}
                className="purple-text text-accent-3"><span>name : </span>{this.props.name} &nbsp; &nbsp; <span>phone : </span>{this.props.phone}</li>
        );
    }
}

export default ContactInfo;