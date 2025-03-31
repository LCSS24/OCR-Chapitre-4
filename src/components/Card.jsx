import { Link } from "react-router-dom";


function Card({ logements }) {
    return (
        <>
            {
                logements.map((e) => (
                    <Link key={e.id} to={`/logements/${e.id}`}>
                        <figure>
                            <div id="layer"></div>
                            <img src={e.cover} alt="" />
                            <figcaption>{e.title}</figcaption>
                        </figure >
                    </Link>
                ))
            }
        </>
    )
}

export default Card;