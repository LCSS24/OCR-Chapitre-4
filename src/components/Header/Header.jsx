import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {
    return (
        <header>
            <img src="\src\assets\LOGO.svg" alt="" />
            <nav>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/About"}>A propos</Link>

            </nav>
        </header>
    )
}

export default Header;