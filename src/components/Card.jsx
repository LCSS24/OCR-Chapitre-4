import { Link } from "react-router-dom";

function Card({ id, cover, title }) {

    return (
        <Link to={`/logements/${id}`}>
            <figure>
                <div id="layer"></div>
                <img src={cover} alt="" />
                <figcaption>{title}</figcaption>
            </figure >
        </Link>
    )
}

export default Card;