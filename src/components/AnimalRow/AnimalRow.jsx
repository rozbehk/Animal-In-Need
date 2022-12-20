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


  return (
    <div className="container mb-2"  >
      <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
        <Link to={`/request/${props.animal._id}`} state={{ animal: props.animal }}><div className="pb-2 pb-lg-1">
          <h1 className="fw-bold mb-2">{props.animal.title}</h1>
          <p className="mb-0">{props.animal.description}</p>
        </div></Link>
        <div className="my-2">
          <Link to={`/user/updaterequest/${props.animal._id}`} className="btn btn-primary fs-5 py-2 px-4">
            UPDATE
          </Link>
          <button onClick={handleDelete} className="m-2 btn btn-danger fs-5 py-2 px-4" role="button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
