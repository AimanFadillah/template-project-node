import { Link } from "react-router-dom"
import { Container } from "./Grid"

export default function Navbar ({children}) {
    return <>
    <nav className="navbar border navbar-expand-md p-0">
        <div className="container">
            <a className="navbar-brand fs-2" href="#">Web</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-2" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul className="p-3 navbar-nav me-auto d-flex justify-content-end gap-2" style={{ width:"100%" }}>
                    <NavLink text={"Beranda"} to={"/"}/>
                    <NavLink text={"Project"} to={"/"}/>
                    <NavLink text={"Keahlian"} to={"/"}/>
                    <NavLink text={"Kontak"} to={"/"}/>
                </ul>
            </div>
        </div>
    </nav>
    <Container>
        {children}
    </Container>
    </>
}

function NavLink ({active,text,to}){
    return <li className={`nav-item ${active ? "bg-primary rounded fw-bold" : ""}`} >
        <Link className={`nav-link px-2 ${active ? "text-light" : ""}`} to={to}>{text}</Link>
    </li>
}