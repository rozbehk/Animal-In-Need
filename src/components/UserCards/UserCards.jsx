import { Link } from "react-router-dom";

export function UserCards(props) {
  function timeFormat(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}