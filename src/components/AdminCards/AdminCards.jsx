import { Link } from "react-router-dom";

export default function AdminCards() {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body p-4">
            <Link to="/admin/panel/manageusers"><h4 className="card-title">MANAGE USERS</h4></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <Link to="/admin/panel/managerequest">
                <h4 className="card-title">MANAGE REQUESTS</h4>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card">
            <div className="card-body p-4">
            <Link to="/admin/panel/manageanimals"><h4 className="card-title">MANAGE ANIMAL TYPES</h4></Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
