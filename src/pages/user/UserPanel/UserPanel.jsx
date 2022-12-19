import { Component } from "react";
import { UserCards } from "../../../components/UserCards/UserCards";
export default class UserPanel extends Component {
  state = {
    users: [],
    requests: [],
  };

  render() {
    return (
        // <div>user panel</div>
        <UserCards requests={this.state.requests} />
     );
  }
}