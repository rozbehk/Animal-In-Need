import { Component } from "react";
import AdminUserRow from "../../../components/AdminUserRow/AdminUserRow";

export default class AdminUsers extends Component {
  state = {
    users: null,
  };
  getAllUsers = () => {
    fetch("/api/users/getall")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    return (
      <div>
        {this.state.users && (
        <section className="py-4 py-xl-5">
          {!this.state.users && <div>No User Found</div>}
          {this.state.users && 
            this.state.users.map((user) => (
              !user.admin && <AdminUserRow user={user} />
            ))}
        </section>
        )}
      </div>
    );
  }
}
