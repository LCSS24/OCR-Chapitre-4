function Banner({ img, title }) {
    return (
        <div id="hero">
            <p>{title}</p>
            <img src={img} alt="" />
        </div>
    )
}

export default Banner;