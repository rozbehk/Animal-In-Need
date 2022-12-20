import { Link } from "react-router-dom";

export function UserCards(props) {
  function timeFormat(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
<<<<<<< HEAD
    <div className="container py-4 py-xl-5">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body p-4">
            <Link to="/user/panel/managerequest"><h4 className="card-title">MANAGE YOUR REQUESTS</h4></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <Link to="/user/panel/manageprofile">
                <h4 className="card-title">UPDATE PROFILE</h4>
=======
    <div class="container py-4 py-xl-5">
      <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body p-4">
            <Link to="/user/panel/managerequest"><h4 class="card-title">MANAGE YOUR REQUESTS</h4></Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body p-4">
              <Link to="/user/panel/manageprofile">
                <h4 class="card-title">UPDATE PROFILE</h4>
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}