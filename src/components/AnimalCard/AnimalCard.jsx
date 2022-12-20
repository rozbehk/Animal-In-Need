import { Link } from "react-router-dom";
import './AnimalCard.css'
export function AninmalCard(props) {
  function  timeFormat(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" ,hour: 'numeric',  minute: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
<<<<<<< HEAD
    <div className="col animal-card">
      <div className="card">
        <div className="card-body p-4">
          <Link className="link" to={`/request/${props.animal._id}`} state={{ animal: props.animal }}>
            <img
              alt='animal-card-image'
              className="card-img-top w-100 d-block fit-cover"
=======
    <div class="col animal-card">
      <div class="card">
        <div class="card-body p-4">
          <Link className="link" to={`/request/${props.animal._id}`} state={{ animal: props.animal }}>
            <img
              alt='animal-card-image'
              class="card-img-top w-100 d-block fit-cover"
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
              style={{ height: 200 + "px" }}
              // src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              src={
                props.animal.image ? `${props.animal.image}` : "/images/image-not-found.png"
              }
            />
<<<<<<< HEAD
            <h4 className="card-title">{props.animal.title}</h4>
          </Link>

          <div className="d-flex">
            <img
              className="rounded-circle flex-shrink-0 me-3 fit-cover"
=======
            <h4 class="card-title">{props.animal.title}</h4>
          </Link>

          <div class="d-flex">
            <img
              class="rounded-circle flex-shrink-0 me-3 fit-cover"
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
              width="50"
              height="50"
            src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div>
<<<<<<< HEAD
              <p className="fw-bold mb-0">Requested by: {props.animal.userId.name}</p>
              <p className="fw-bold mb-0">{timeFormat(props.animal.createdAt)}</p>
=======
              <p class="fw-bold mb-0">{props.animal.userId.name}</p>
              <p class="fw-bold mb-0">{timeFormat(props.animal.createdAt)}</p>
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
