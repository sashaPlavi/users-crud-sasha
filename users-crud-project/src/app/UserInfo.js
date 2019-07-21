import React from 'react';
import { UsersService } from '../services/UsersService'

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myUserInfo: null

        }
        this.handleDelete = this.handleDelete.bind(this);
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
    handleDelete(){
        const id = this.props.match.params.id;
        UsersService.DeleteUser(id) 
    }


    render() {
        console.log(this.state.myUserInfo);
        
        if( !this.state.myUserInfo){
            
            return  <p>user detrails page</p>
        }
        const {name, email, phone } = this.state.myUserInfo
                return (
                    <>
                     <div class="row">
                    <div class="col s12 m7">
                      <div class="card">
                         
                        <div class="card-content">
                            <p>name:{name}</p>
                          <p> email:{email}</p>
                          <p>phone:{phone}</p>
                        </div>
                        <div class="card-action">
                           
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={this.handleDelete}>delete</button>
                      </>
                  //<input type='button' value='delete' onClick={this.handleDelete} >delete</input>




        )
    }

}
