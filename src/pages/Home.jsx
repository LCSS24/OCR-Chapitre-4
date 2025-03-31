import { useState } from 'react'
import '../styles/Home.scss'
import Logements from "../utils/logements.json"
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <>
      <Banner img="..\src\assets\hero.webp" title="Chez vous, partout et ailleurs" />
      <section id="gallery">
        <Card logements={Logements} />
      </section>

    </>
  )
}

export default Home
