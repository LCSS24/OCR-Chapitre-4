import { useState } from "react";
import "../Collapse/Collapse.scss"

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <article className="collapse">
            <div className="bar">
                <h2>{title}</h2>
                <img onClick={() => setIsOpen(!isOpen)} src="..\src\assets\Vector.svg" alt="" className={isOpen ? "rotated" : ""} />
            </div>
            <div className={isOpen ? "content" : "content pascontent"}>
                <p className="text">{content}</p>
            </div>
        </article>
    )
}

export default Collapse;
