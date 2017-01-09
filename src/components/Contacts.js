import React,{Component} from 'react';
import update from 'react-addons-update';
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';
import ContactSearch from './ContactSearch';

class Contacts extends Component{
    constructor(props){
        super(props);
        this.state={
            contactData:[
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],
            selectedKey:-1,

            //For Edit : contact에 실어서 값을 보낼 예정.
            selected:{
                name:"",
                phone:""
            }
        };
    }

    _insertContact(name,phone){
        let newState=update(this.state,{
            contactData:{
                $push:[{"name":name, "phone":phone}]
            }
        });
        this.setState(newState);
    }

    //ContactInfo에서 매개변수를 받음.
    //선택여부와 관련된 selectedKey와 seleted의 값 세팅을 이 메소드에서 해줌.
    _onSelect(key){

        this.setState({
            selectedKey : key,
            selected : this.state.contactData[key]
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

    /*지호님께 여쭤보기 Promise????*/
    _removeContact(){
        //선택되여진 컴포넌트인지 확인 후 삭제를 진행해야하므로
        //아래 if문을 먼저 실행한다.
        if(this.state.selectedKey==-1){
            console.log("contact is not selected");
            return;
        }

        //선택된 컴포넌트라면 삭제 진행.
        this.setState({
            contactData: update(
                this.state.contactData,{
                    $splice:[[this.state.selectedKey,1]]
                }
            ),
            selectedKey:-1
        });
    }


    _editContact(name,phone){
        //선택되여진 컴포넌트인지 확인 후 삭제를 진행해야하므로
        //아래 if문을 먼저 실행한다.
        if(this.state.selectedKey==-1){
            console.log("contact is not selected");
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }

    render(){

        return (
            <div>
                <h1>Contacts</h1>
                <ContactSearch data={this.state.contactData}
                               isSelected={this._isSelected.bind(this)}
                               onSelect={this._onSelect.bind(this)}/>
                <div id="container">
                    <ContactCreator onInsert={this._insertContact.bind(this)}/>
                    <ContactRemover onRemove={this._removeContact.bind(this)}/>
                    <ContactEditor onEdit={this._editContact.bind(this)}
                                   contact={this.state.selected}/>
                </div>
            </div>
        );
    }
}

export default Contacts;