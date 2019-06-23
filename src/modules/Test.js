import React, {Component} from 'react';
import axios from 'axios'

class Test extends Component {
    constructor() {
        super();
        this.doit =this.doit.bind(this)
    }
    doit () {
        axios.post('https://formula-test-api.herokuapp.com/contact', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <p>xyi</p>
                <button onClick={this.doit}>press</button>
            </div>
            )
    }

}

export default Test;