export default function AdminMenu(props) {
  return (
<<<<<<< HEAD
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
=======
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <a href="#" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">All Requests</span>
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
<<<<<<< HEAD
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">All Users</span>{" "}
=======
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs-4 bi-speedometer2"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">All Users</span>{" "}
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
                </a>
              </li>
            </ul>
          </div>
        </div>
        {props.activeMenu === "requests" && (
          <>
<<<<<<< HEAD
            <div className="col py-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-9 col-xs-9">
                    <div className="row">
                      <div className="col-md-12 col-xs-12">
                        CONTENT_A
                      </div>
                      <div  className="col-md-12 col-xs-12">
=======
            <div class="col py-3">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-9 col-xs-9">
                    <div class="row">
                      <div class="CONTENT_A" className="col-md-12 col-xs-12">
                        CONTENT_A
                      </div>
                      <div class="CONTENT_B" className="col-md-12 col-xs-12">
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
                        CONTENT_B
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="col-md-3 col-xs-3">
=======
                  <div class="CONTENT_C" className="col-md-3 col-xs-3">
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
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
