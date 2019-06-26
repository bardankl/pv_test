import React, {Component} from 'react';
import axios from 'axios';
import './Contacts.css'
import ReactDOM from 'react-dom';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            endPoint: 'https://formula-test-api.herokuapp.com/contact',
            name: '',
            email: '',
            comment: '',
            isOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});

    }
    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }
    handleMessageChange(e) {
        this.setState({comment: e.target.value})
    }
    handleSubmit(e) {
        axios.post(this.state.endPoint, {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        }
        )
            .then(function (response) {
                    console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault();
        this.handleModal();
        this.setState({name:' '});
        this.setState({email:' '});
        this.setState({comment:' '})
    }
    handleModal() {
        this.setState({isOpen: !this.state.isOpen});

    }


    render() {
        return (
            <div id='container'>
                <div>
                    {
                        this.state.isOpen ?
                            (<div className='modal'>
                                <h1>Thank you for your attention, we will contact you as soon as possible</h1>
                                <button onClick={this.handleModal}>Close</button>
                            </div>)
                             :null
                    }
                </div>

                <form className='contactsForm' onSubmit={this.handleSubmit}>
                    <div className='contactsFormItem'>
                        <label htmlFor="name">Name:</label>

                        <div className='contactsFormInputContainer'>
                            <input className='contactsFormInput' type="text" id="name" name="user_name" value={this.state.name} onChange={this.handleNameChange}/>
                        </div>

                    </div>

                    <div className='contactsFormItem'>
                        <label htmlFor="mail">E-mail:</label>

                        <div className='contactsFormInputContainer'>
                            <input className='contactsFormInput' value={this.state.email} type="email" id="mail" name="user_mail"
                                   onChange={this.handleEmailChange}/>
                        </div>

                    </div>

                    <div className='contactsFormItem'>

                        <label htmlFor="msg">Message:</label>

                        <div className='contactsFormTextAreaContainer'>
                            <textarea className='contactsFormInput' id="msg" value={this.state.comment} name="user_message"
                                      onChange={this.handleMessageChange}/>
                        </div>

                    </div>
                    <div className="button">
                        <button id='contactsFormBtn' type='submit' >Send your message</button>
                    </div>
                </form>
                <div/>
            </div>
                )
                }
                }

                export default Contacts;
