import axios from "axios";
import { Link } from "react-router-dom";

export default function AnimalRow(props) {

  function handleDelete(evt) {
    try {
      evt.preventDefault()
      const token = localStorage.getItem("token");
      if (!token) return null;
      const userId = JSON.parse(atob(token.split(".")[1])).user._id
      axios.delete(`/api/animals/delete/${props.animal._id}`)
      props.getAnimals()
    } catch (err) {
      console.log(err)
    }
  }

  function handleUpdate(){

  }

  return (
    <div class="container mb-2">
      <div class="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
        <Link to={`/request/${props.animal._id}`} state={{ animal: props.animal }}><div class="pb-2 pb-lg-1">
          <h1 class="fw-bold mb-2">{props.animal.title}</h1>
          <p class="mb-0">{props.animal.description}</p>
        </div></Link>
        <div class="my-2">
          <Link to={`/user/updaterequest/${props.animal._id}`} class="btn btn-primary fs-5 py-2 px-4">
            UPDATE
          </Link>
          <button onClick={handleDelete} class="m-2 btn btn-danger fs-5 py-2 px-4" role="button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
