import { Component } from "react"
import Map from "../../../components/Map/Map";
import axios from 'axios';
import { Navigate } from "react-router-dom";


export default class UserUpdateRequest extends Component {
    state = {
        animal: false,
        mapcenter: null,
        image: null,
        imageData: null

    }

    handleChange = (evt) => {
        this.setState(prevState => ({
            animal: {
                ...prevState.animal,
                [evt.target.name]: evt.target.value,
            }
        }));

    }

    getOneAnimal = async (id) => {
        await fetch(`/api/animals/getone/${id}`)
            .then((res) => res.json())
            .then((animal) => this.setState({ animal }));
    }

    setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.setState({ imageData: reader.result });
        };
    };

    setStateMapCenter = (lat, lng) => {
        this.setState(prevState => ({
            animal: {
                ...prevState.animal,
                location: { lat, lng }
            }
        }));
    };
    handleImage = (e) => {
        this.setFileToBase(e.target.files[0]);
        this.setState({ image: e.target.files[0] });
    };

    handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('id', this.state.animal._id)
        formData.append("title", this.state.animal.title)
        formData.append("kind", this.state.animal.kind)
        formData.append("description", this.state.animal.description)
        formData.append("image", this.state.image)
        formData.append("lat", this.state.animal.location.lat)
        formData.append("lng", this.state.animal.location.lng)
        console.log(formData)
        let response = await axios.put("/api/animals/updaterequest", formData)
        // let url = `/request/${response.data._id}`
        // this.setState({ animal: response.data, result: response.status, url: url })
    }

    componentDidMount() {
        const id = window.location.pathname.split('/')[3]
        this.getOneAnimal(id)
    }

    render() {
        return (
            <div>
                {this.state.result === 200 && (
                    <Navigate to={this.state.url} state={{ animal: this.state.animal }} />
                )}
                {this.state.animal && (
                    <section class="position-relative py-4 py-xl-5">
                        <div class="container position-relative">
                            <div class="row">
                                <div class="col">
                                    <Map
                                        mapCenter={this.state.animal.location}
                                        setStateMapCenter={this.setStateMapCenter}
                                    />
                                </div>
                                <div class="col-md-6 col-xl-4">
                                    <div>
                                        <form class="p-3 p-xl-4" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                                            <h4>Manage Request</h4>
                                            <img
                                                alt='animal-card-image'
                                                class="card-img-top w-100 d-block fit-cover"
                                                style={{ height: 200 + "px" }}
                                                src={
                                                    this.state.animal.image ? `this.state.animal.image` : "/images/image-not-found.png"
                                                }
                                            />
                                            <div class="mb-3">
                                                <label class="form-label" for="title">
                                                    Title
                                                </label>
                                                <input
                                                    id="title"
                                                    class="form-control"
                                                    type="text"
                                                    name="title"
                                                    value={this.state.animal.title}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label" for="description">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="email"
                                                    class="form-control"
                                                    type="text"
                                                    name="description"
                                                    value={this.state.animal.description}
                                                    onChange={this.handleChange}
                                                    rows="6"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label" for="description">
                                                    kind
                                                </label>
                                                <select
                                                    name="kind"
                                                    id="kind"
                                                    class="form-control"
                                                    onChange={this.handleChange}
                                                    value={this.state.animal.type}
                                                >
                                                    <option value="Dog">Dog</option>
                                                    <option value="Cat 2">Cat</option>
                                                    <option value="Bird">Bird</option>
                                                    <option value="Squirrels">Squirrels</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            <div class="mb-3">
                                                <button
                                                    class="btn btn-primary"
                                                >
                                                    {/* <Link to="/user/showrequest" className="btn btn-primary btn-lg btn-block"> */}
                                                    Submit
                                                    {/* </Link> */}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        )
    }
}