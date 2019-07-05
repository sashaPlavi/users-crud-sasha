import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './app/elements/Header';
import { Users } from './app/Users';
import { UserInfo } from './app/UserInfo';
import { CreateUser } from './app/CreateUser'



class App extends React.Component {

  render() {

    return (
      <>
        <Header />

        <Switch>
          <Route path='/users/create' component={CreateUser} />
          <Route path='/users/:id' component={UserInfo} />
          <Route path='/users' component={Users} />
          <Redirect to='/users' />
        </Switch>
      </>
    )

  }
}

export default App;


