import { User } from '../entities/User'

export class UsersService {
    static fetchUsers = () => {
        const request = "https://jsonplaceholder.typicode.com/users";
        return fetch(request)
            .then(response => response.json())
            .then(apiUsers => {
                const users = apiUsers.map(user => new User(user))
                console.log(users);
                return users
            })
    }
    static FetchSingleUser = (id) => {
        const request = `https://jsonplaceholder.typicode.com/users/${id}`
        return fetch(request)
            .then(response => response.json())
            .then(user => {
                const myuserinfo = new User(user)
                return myuserinfo
            })
    }

    static PostNewUser = (name,email) => {
        const url= "https://jsonplaceholder.typicode.com/users";
        const mydata = {
            name: name,
            email: email
        };

       return fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(mydata), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          


    }


}







