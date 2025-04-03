import { useState } from "react";

function Carousel({ obj }) {
    const [index, setIndex] = useState(0)
    const hasMultiplePictures = obj.pictures.length > 1

    return (
        <div className="carousel">
            <div style={{ display: hasMultiplePictures ? "flex" : "none" }} className="arrows">
                <img id="left" onClick={() => setIndex(index === 0 ? obj.pictures.length - 1 : index - 1)} src="\src\assets\arrowleft.svg" alt="" />
                <img id="right" onClick={() => setIndex(index === obj.pictures.length - 1 ? 0 : index + 1)} src="\src\assets\arrowright.svg" alt="" />
                <p className="count">{index + 1}/{obj.pictures.length}</p>
            </div>
            <img className="cover" src={obj.pictures[index]} alt={obj.title} />
        </div>
    )
}

export default Carousel;