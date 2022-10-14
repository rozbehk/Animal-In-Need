import LoginForm from '../../components/LoginForm/LoginForm'
import { Component, } from 'react'
import {useNavigate} from 'react-router-dom'
// import { loginUser, getProfile } from '../../lib/api'
// import { setToken, setUsername } from '../../lib/auth'


export default class Login extends Component {
  render() {
    return (
      <>
        <LoginForm setUserInState={this.props.setUserInState}/>
      </>
    )
  }
}

