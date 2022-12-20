export default function AdminMenu(props) {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">All Requests</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">All Users</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {props.activeMenu === "requests" && (
          <>
            <div className="col py-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-9 col-xs-9">
                    <div className="row">
                      <div className="col-md-12 col-xs-12">
                        CONTENT_A
                      </div>
                      <div  className="col-md-12 col-xs-12">
                        CONTENT_B
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-3">
                    CONTENT_C
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
