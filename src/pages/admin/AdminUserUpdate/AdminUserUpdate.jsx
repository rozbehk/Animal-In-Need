import { Component } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../../services/userServices";
import { Navigate } from "react-router-dom";

export default class UserUpdate extends Component {
    state = {
        admin: false,
        email: "rescuer@rescuer.com",
        name: "rescuer",
        rescuer: true,
        user: null,
        result: null,
        error: ''

    }
    getOneUser = (id) => {
        fetch(`/api/users/getone/${id}`)
            .then((res) => res.json())
            .then((user) => this.setState({ user }));
    }

    handleChange = (evt) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [evt.target.name]: evt.target.value,
            }
        }));
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
                    name: this.state.user.name,
                    email: this.state.user.email,
                    password: this.state.user.password,
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
            console.log(err)
            this.setState({ error: err.message });
        }
    };

    componentDidMount() {
        const id = window.location.pathname.split('/')[4]
        this.getOneUser(id)
    }

    render() {
        return (
            <div>
                {this.state.result === 200 && (
                    <Navigate to='/admin/panel/manageusers' state={{ animal: this.state.animal }} />
                )}
                <section className="vh-100" >
                    {this.state.user &&
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
                                                value={this.state.user.name}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <input
                                                class="form-control"
                                                type="email"
                                                name="email"
                                                value={this.state.user.email}
                                                required
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                onChange={this.handleChange}
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
                                        <div class="mb-3">
                                            <span>Is Rescuer  :</span>  
                                            <input
                                                type="checkbox"
                                                name="rescuer"
                                                onChange={this.handleChange}
                                                defaultChecked={this.state.user.rescuer}
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
                    }
                </section>
            </div>
        )
    }
}