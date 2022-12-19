import { Link } from "react-router-dom";

export default function AdminCards() {
  return (
    <div class="container py-4 py-xl-5">
      <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body p-4">
            <Link to="/admin/panel/manageusers"><h4 class="card-title">MANAGE USERS</h4></Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body p-4">
              <Link to="/admin/panel/managerequest">
                <h4 class="card-title">MANAGE REQUESTS</h4>
              </Link>
            </div>
          </div>
        </div>
        {/* <div class="col">
          <div class="card">
            <div class="card-body p-4">
            <Link to="/admin/panel/manageanimals"><h4 class="card-title">MANAGE ANIMAL TYPES</h4></Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
