import { useParams } from "react-router-dom";
import Logements from "../utils/logements.json"
import "../styles/Logement.scss"
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse/Collapse"

function Logement() {
    const { id } = useParams();
    const logement = Logements.find(i => i.id === id)
    console.log(logement, id);
    return (
        <main>
            <Carousel obj={logement} />
            <section className="infos">
                <div className="first">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tag">
                        {logement.tags.map((e) => (
                            <span key={Math.random(0)}>{e}</span>
                        ))}
                    </div>
                </div>
                <div className="second">
                    <div className="profil">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" />
                    </div>
                    <div className="rating">
                        {/* Faire le systeme de rating
                        for (i=0, i < 5, i++) {
                            console.log("oui")
                        } */}
                    </div>
                </div>
            </section>
            <div className="collapses_logement">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={
                    <ul>
                        {logement.equipments.map((e) => (
                            <li>{e}</li>
                        ))}
                    </ul>
                } />
            </div>
        </main>
    )
}

export default Logement;