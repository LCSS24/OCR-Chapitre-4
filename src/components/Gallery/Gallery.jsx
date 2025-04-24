import Card from "../Card";
import "./Gallery.scss"

function Gallery({ logements }) {
    return (
        <section id="gallery">
            {logements.map((e) => (
                < Card key={e.id} id={e.id} cover={e.cover} title={e.title} />
            ))}
        </section>
    )
}

export default Gallery;