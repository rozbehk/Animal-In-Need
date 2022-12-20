import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { login , signUp , logOut , getToken , isAdmin , isRescuer, isAuthenticate} from "./services/userServices"
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import AddRequestPage from "./pages/user/AddRequestPage/AddRequestPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/user/LoginPage/LoginPage";
import RegisterPage from "./pages/user/RegisterPage/RegisterPage";
import ShowRequestPage from "./pages/user/ShowRequestsPage/ShowRequestPage";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminAnimalsType from "./pages/admin/AdminAnimalType";
import AdminUsers from "./pages/admin/AdminUser";
import AdminRequest from "./pages/admin/AdminRequests";
import UserPanel from "./pages/user/UserPanel/UserPanel";
import UserManageRequests from "./pages/user/UserManageRequests/UserManageRequests"
import ShowSingleRequest from "./pages/user/ShowSingleRequestPage/ShowSingleRequestPage";
import UserManageProfile from "./pages/user/UserManageProfile/UserManageProfile";
import UserUpdate from "./pages/admin/AdminUserUpdate/AdminUserUpdate";
import UserUpdateRequest from "./pages/user/UserUpdateRequest/UserUpdateRequest";

class App extends Component {
  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }
  
  componentDidMount() {
    
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        token = null;
      } else { 
        // let userDoc = payload.user
        this.setState({user: true})      
      }
    }
  }

  render() {
    return (
      <main className="App">
        <Navbar className="Navbar" userState={this.state.user} setUserInState={this.setUserInState} />
        <Routes>
          <Route path="/home" element={<HomePage />}/>
          {isAuthenticate() && <Route path="/user/addrequest" element={<AddRequestPage />}/>}
          {isAuthenticate() && <Route path="/user/updaterequest/:id" element={<UserUpdateRequest />}/>}
          {!isAuthenticate() && <Route path="/user/register" element={<RegisterPage setUserInState={this.setUserInState}/>}/>}
          {!isAuthenticate() && <Route path="/user/login" element={<LoginPage  setUserInState={this.setUserInState}/>}/>}
          {isAuthenticate() && isAdmin() && <Route path="/admin/panel" element={<AdminPanel />}/>}
          {isAuthenticate() && isAdmin() && <Route path="/admin/panel/manageusers" element={<AdminUsers />}/>}
          {isAuthenticate() && isAdmin() && <Route path="/admin/panel/managerequest" element={<AdminRequest />}/>}
          {isAuthenticate() && isAdmin() && <Route path="/admin/panel/manageanimals" element={<AdminAnimalsType />}/>}
          {isAuthenticate() && isAdmin() && <Route path="/admin/panel/edituser/:id" element={<UserUpdate/>}/>}
          {isAuthenticate() && <Route path="/request/:id" element={<ShowSingleRequest />}/>}
          {isAuthenticate() && isRescuer() && <Route path="/user/showrequest" element={<ShowRequestPage />}/> }
          {isAuthenticate() && !isAdmin() && !isRescuer() && <Route path="/user/panel" element={<UserPanel />}/>}
          {isAuthenticate() && !isAdmin() && !isRescuer() && <Route path="/user/panel/managerequest" element={<UserManageRequests />}/>}
          {isAuthenticate() && !isAdmin() && !isRescuer() && <Route path="/user/panel/manageprofile" element={<UserManageProfile />}/>}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    );
  }
}

export default App;
