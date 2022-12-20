import { Component } from "react";
import AdminCards from "../../../components/AdminCards/AdminCards";
export default class AdminPanel extends Component {
  state = {
    users: [],
    requests: [],
  };

  render() {
    return (
        <AdminCards requests={this.state.requests} />
     );
  }
}
