export default function AdminMenu(props) {
  return (
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
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                >
                  <i class="fs-4 bi-speedometer2"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">All Users</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {props.activeMenu === "requests" && (
          <>
            <div class="col py-3">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-9 col-xs-9">
                    <div class="row">
                      <div class="CONTENT_A" className="col-md-12 col-xs-12">
                        CONTENT_A
                      </div>
                      <div class="CONTENT_B" className="col-md-12 col-xs-12">
                        CONTENT_B
                      </div>
                    </div>
                  </div>
                  <div class="CONTENT_C" className="col-md-3 col-xs-3">
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
