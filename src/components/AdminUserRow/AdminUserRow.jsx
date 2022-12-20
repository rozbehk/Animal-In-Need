import { Link } from "react-router-dom";
import './AdminUserRow.css'

export default function AdminUserRow(props) {
  return (
    <div className="container mb-2 admin-user-row">
      <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
      <div className="pb-2 pb-lg-1">
          <h1 className="fw-bold mb-2">{props.user.name}</h1>
          <p className="mb-0">{props.user.email}</p>
          <p className="mb-0">is rescuer? : {props.user.rescuer ? 'Yes' : 'No'}</p>
          <p className="mb-0">is Admin? : {props.user.admin ? 'Yes' : 'No'}</p>
        </div>
        <div className="my-2">
            <Link className="btn btn-primary fs-5 py-2 px-4" to={`/admin/panel/edituser/${props.user._id}`}>UPDATE</Link>
            <a className="m-2 btn btn-danger fs-5 py-2 px-4" role="button" href="#">
            DELETE
          </a>
        </div>
      </div>
    </div>
  );
}
