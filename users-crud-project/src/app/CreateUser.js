import React from 'react';
import {UsersService} from '../services/UsersService'

export class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            errors: {},
            responseFailed:true,
            response: {}
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        const user = this.state.name;
        const email = this.state.email;

        UsersService.PostNewUser(user,email) 
        .then((res) => {
           if (res.status === 201) {
               this.setState({responseFailed: false})
               return res;
            } else {
                this.setState ({responseFailed : true})
           }
        })
        
        .then(res => res.json ())
         .then(res => {
            this.setState ({response: res})
        })
    }
    
    validateForm() {
        const userName = this.state.name;
        const email = this.state.email;

        const errors = {};
        if (userName.length < 3) {
            errors.name = 'invalid input';
        }

        if (!email.includes('@')) {
            errors.email = 'invalid email input';
        }

        this.setState({ errors });

        return Object.keys(errors).length === 0;
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
        })

    }



    handleUserChange(event) {
        const { errors } = this.state;
        delete errors.name;

        this.setState({
            name: event.target.value,
            errors
        });
    }

    handleEmailChange(event) {
        const { errors } = this.state;
        delete errors.email;

        this.setState({
            email: event.target.value,
            errors,
        });
    }

    render() {
        const { errors } = this.state;
        const {response} = this.state;
        console.log(response);
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Username:
                    <input type="text" value={this.state.name} onChange={this.handleUserChange} />
                    <p>{errors.name}</p>
                </label>

                <label>
                    Email:<input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    <p>{errors.email}</p>
                </label>

                <input type="submit" value="Create" />
            </form>
        );
    }

}