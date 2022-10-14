import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Login from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import Register from './pages/RegisterPage/RegisterPage'
import RescuerProfile from './pages/RescuerProfile/RescuerProfile'
import UserProfile from './pages/UserProfile/UserProfile'
import AddRequest from './pages/AddRequest/AddRequest'
import ShowUserAnimals from './pages/ShowUserAnimals/ShowUserAnimals'

export default function App (){


  return (
      <BrowserRouter>
        <NavBar className="Navbar" />
        <div className="Main">
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/rescuer/:username' component={RescuerProfile} />
            <Route path='/addrequest' component={AddRequest} />
            <Route path='/animals' component={ShowUserAnimals} />
            <Route path='/detail' component={ShowUserAnimals} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}
