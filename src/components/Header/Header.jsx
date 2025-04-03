import { Link, useLocation } from "react-router-dom";
import "./Header.scss"

function Header() {
    const location = useLocation()

    return (
        <header>
            <Link to={"/"}>
                <img src="\src\assets\LOGO.svg" alt="" />
            </Link>
            <nav>
                <Link id="home" className={location.pathname === "/" ? "active" : ""} to={"/"}>Accueil</Link>
                <Link id="about" className={location.pathname === "/About" ? "active" : ""} to={"/About"}>A propos</Link>

            </nav>
        </header>
    )
}

export default Header;