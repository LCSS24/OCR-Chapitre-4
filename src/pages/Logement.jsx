import { useParams } from "react-router-dom";
import Logements from "../utils/logements.json"

function Logement({ Logements }) {
    const id = useParams();
    { console.log(id) }
    // const console = console.log(logement)

    return (
        <main>
            <img src={logement.cover} alt="" />
            <h2>{logement.title}</h2>
        </main>
    )
}

export default Logement;