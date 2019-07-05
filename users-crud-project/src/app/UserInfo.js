import React from 'react';
import { UsersService } from '../services/UsersService'

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myUserInfo: null

        }
    }
    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser() {
        const id = this.props.match.params.id;
        UsersService.FetchSingleUser(id)
            .then(myuserInfo => {
                this.setState({
                    myUserInfo: myuserInfo
                })
            })
    }


    render() {
        console.log(this.state.myUserInfo);



        return <form>
            <label> Username:
            <input type="text" value='' onChange='' />
                <br />
                <p>{}</p>
                <br />
                Email:<input type="text" value='' onChange='' />
            </label>
            <br />
            <p>{}</p>
            <br />
            <input type="submit" value="Create" />

        </form>
    }

}
