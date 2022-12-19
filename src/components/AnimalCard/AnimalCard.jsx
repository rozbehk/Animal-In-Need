import { Link } from "react-router-dom";
import './AnimalCard.css'
export function AninmalCard(props) {
  function  timeFormat(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" ,hour: 'numeric',  minute: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div class="col animal-card">
      <div class="card">
        <div class="card-body p-4">
          <Link className="link" to={`/request/${props.animal._id}`} state={{ animal: props.animal }}>
            <img
              alt='animal-card-image'
              class="card-img-top w-100 d-block fit-cover"
              style={{ height: 200 + "px" }}
              // src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              src={
                props.animal.image ? `${props.animal.image}` : "/images/image-not-found.png"
              }
            />
            <h4 class="card-title">{props.animal.title}</h4>
          </Link>

          <div class="d-flex">
            <img
              class="rounded-circle flex-shrink-0 me-3 fit-cover"
              width="50"
              height="50"
            src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            />
            <div>
              <p class="fw-bold mb-0">{props.animal.userId.name}</p>
              <p class="fw-bold mb-0">{timeFormat(props.animal.createdAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
