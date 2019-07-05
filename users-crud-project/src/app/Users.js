import React from 'react';
import { Link } from 'react-router-dom'
import { UsersService } from '../services/UsersService'


export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUsers()

    }

    getUsers() {
        UsersService.fetchUsers()
            .then(user => {
                this.setState({
                    users: user
                })
            })
    }

    render() {
        const users = this.state.users

        if (!users) {
            return <p>user page</p>
        }

        return (
            <div className="users" >
                <h3>Users</h3>


                <Link to='/users/create' ><button>create</button></Link>

                {
                    this.state.users.map(user => (
                        <div className='usersinfo'>
                            <h4><Link to={`/users/${user.id}`}>{user.name}</Link></h4>
                            <p>{user.email}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>
        )
    }

}
//<input type='button' value='create' onClick={}