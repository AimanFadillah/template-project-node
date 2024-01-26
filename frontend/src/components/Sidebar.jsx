import { Link } from "react-router-dom";

export default function Sidebar(props) {
    return (
        <>
            <header className="navbar sticky-top bg-primary p-1 shadow ">
                <Link className="navbar text-decoration-none fw-bold me-0 px-3 fs-5 col-md-12 col-10 text-white" to="/">
                    Web
                </Link>
                <ul className="navbar-nav d-md-none">
                    <li className="nav-item text-nowrap">
                        <button
                            className="nav-link px-3 text-white"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="bi bi-list fs-3"></i>
                        </button>
                    </li>
                </ul>
            </header>

            <div className="container-fluid ">
                <div className="row">
                    <div className="sidebar col-md-3 col-lg-2 p-0 bg-dark fixed-top h-md-100 mt-5 z-md-2" >
                        <div
                            className="offcanvas-md offcanvas-end bg-dark"
                            tabIndex="-1"
                            id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel"
                        >
                            <div className="offcanvas-header ">
                                <h5 className="offcanvas-title text-light" id="sidebarMenuLabel">Menu</h5>
                                <div style={{ cursor:"pointer" }}
                                    className="bi bi-x-lg fs-4 text-light"
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu"
                                    aria-label="Close"
                                ></div>
                            </div>
                            
                            <div className="offcanvas-body d-md-flex p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className={`nav-link d-flex gap-2 text-light`} aria-current="page" to="/">
                                            <i className="bi bi-house"></i>Beranda
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <main className={`col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3 ${props.className}`}>
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}