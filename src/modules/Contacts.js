import React, {Component} from 'react';
import axios from 'axios';
import './Contacts.css'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            endPoint: 'https://formula-test-api.herokuapp.com/contact',
            name: '',
            email: '',
            comment: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this)
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
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        e.preventDefault();
    }

    render() {
        return (
            <form className='contactsForm' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="user_name" onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label htmlFor="mail">E-mail:</label>
                    <input type="email" id="mail" name="user_mail" onChange={this.handleEmailChange}/>
                </div>
                <div>
                    <label htmlFor="msg">Message:</label>
                    <textarea id="msg" name="user_message" onChange={this.handleMessageChange}></textarea>
                </div>
                <div className="button">
                    <button type='submit'>Send your message</button>
                </div>
            </form>
        )
    }
}

export default Contacts;