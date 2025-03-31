import '../styles/404.scss'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retournez sur la page d'accueil</Link>

        </main>

    );
}

export default NotFound;