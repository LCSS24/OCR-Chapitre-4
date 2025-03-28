import { useState } from 'react'
import '../styles/Home.scss'
import logements from "../utils/logements.json"

function Home() {
  return (
    <>
      <div id="hero">
        <p>Chez vous, partout et ailleurs</p>
        <img src="..\src\assets\hero.webp" alt="" />
      </div>
      <section id="gallery">
        {logements.map((e, index) => (
          <figure key={index}>
            <div id="layer"></div>
            <img src={e.cover} alt="" />
            <figcaption>{e.title}</figcaption></figure>
        ))}
      </section>

    </>
  )
}

export default Home
