import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logements from "../utils/logements.json"
import "../styles/Logement.scss"
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse/Collapse"

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = Logements.find(i => i.id === id);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!logement) {
            navigate("/404", { replace: true }); // Redirige vers NotFound
        }
    }, [logement, navigate]);

    if (!logement) return null; // Évite le rendu si redirection en cours

    let stars = []

    for (let i = 0; i < logement.rating; i++) {
        stars.push(<img key={i} src="/src/assets/starscolor.svg" alt="étoile rouge" />);
    }

    while (stars.length < 5) {
        stars.push(<img key={`gris-${stars.length}`} src="/src/assets/starsgris.svg" alt="étoile grise" />);
    }

    return (
        <main>
            <Carousel obj={logement} />
            <section className="infos">
                <div className="first">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tag">
                        {logement.tags.map((e) => (
                            <span key={e}>{e}</span>
                        ))}
                    </div>
                </div>
                <div className="second">
                    <div className="profil">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" />
                    </div>
                    <div className="rating">
                        {stars}
                    </div>
                </div>
            </section>
            <div className="collapses_logement">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={
                    <>
                        {logement.equipments.map((e) => (
                            <li key={Math.random(0)}>{e}</li>
                        ))}
                    </>
                } />
            </div>
        </main>
    )
}

export default Logement;