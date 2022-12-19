import { Component } from "react";
import { getUser } from "../../../services/userServices";
import { Navigate } from "react-router-dom";

export default class UserManageProfile extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        result: 400
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        let message = ''
        if (this.state.password != this.state.confirm) {
            this.setState({ error: "passwords do not match" })
            return
        }
        try {
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                }),
            };
            const fetchResponse = await fetch("/api/users/update", options);
            let responseMessage = await fetchResponse.json();
            if (!fetchResponse.ok) {
                this.setState({ error: responseMessage });
                throw new Error(responseMessage);
            }
            localStorage.setItem("token", responseMessage);
            let user = JSON.parse(atob(responseMessage.split(".")[1])).user;
            this.setState({ result: 200 })

        } catch (err) {
            this.setState({ error: err.message });
        }
    };

    componentDidMount() {
        let user = getUser()
        this.setState({ name: user.name, email: user.email })
    }

    render() {
        return (
            <div>
                <section className="vh-100" >
                    {this.state.result === 200 && (
                        <Navigate to="/user/panel" state={{ animal: this.state.animal }} />
                    )}
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form class="text-center" method="post" onSubmit={this.handleSubmit}>
                                    <div class="mb-3">
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="name"
                                            required
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <input
                                            class="form-control"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            required
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <input
                                            class="form-control"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <input
                                            class="form-control"
                                            type="password"
                                            name="confirm"
                                            placeholder="Verify Password"
                                            required
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    {this.state.error && <div>{this.state.error}</div>}
                                    <div class="mb-3">
                                        <button class="btn btn-primary d-block w-100" type="submit">
                                            Update Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}