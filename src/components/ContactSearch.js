/**
 * Created by siri on 2017-01-09.
 */
import React,{Component} from 'react';
import ContactInfo from './ContactInfo';

class ContactSearch extends Component{

    constructor(props){
        super(props);
        this.state={
            keyword:'',
            selectedKey:-1,

            //For Edit : contact에 실어서 값을 보낼 예정.
            selected:{
            name:"",
                phone:""
        }
        };
    }

    handleChange(e){
        this.setState({
            keyword:e.target.value
        });
    }

    //ContactInfo에서 매개변수를 받음.
    //선택여부와 관련된 selectedKey와 seleted의 값 세팅을 이 메소드에서 해줌.
    _onSelect(key){

        this.setState({
            selectedKey : key,
            selected : this.props.data[key]
        });
        console.log(`${key} is selected`);

        //매개변수로 받은 키와 Contacts의 selectedKey값을 비교
        if(key==this.state.selectedKey){
            console.log("selected key is canceled");
            this.setState({
                selectedKey:-1,
                selected:{
                    name:"",
                    phone:""
                }
            });
            // return;
        }
    }

    // 해당 컴포넌트가 선택된 상태인지 아닌지 알려줌.
    //편의성을 위해 velopert 코드에서는 모든 li에 적용이 되므로 매개변수를 contacts의 key를 이용.
    _isSelected(key){
        if(this.state.selectedKey==key){
            return true;
        }else{
            return false;
        }

    }

    render(){
        this.props.data.sort();
        const address=this.props.data.filter(
            (contact)=>{
                return contact.name.toLowerCase().indexOf(this.state.keyword)>-1;
            }
        );

        return (
            <div>
                <div class="search">
                <input name="keyword" placeholder="Search"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.keyword}/>
                </div>
                <div>
                    <ul>
                        {
                            address.map((contact,i)=>{
                                return (<ContactInfo name={contact.name}
                                                     phone={contact.phone}
                                                     contactKey={i}
                                                     key={i}
                                                     isSelected2={this.props.isSelected(i)}
                                                     onSelect2={this.props.onSelect}
                                />);
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactSearch;