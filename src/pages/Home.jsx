import '../styles/Home.scss'

import Logements from "../utils/logements.json"
import Banner from '../components/Banner'
import Gallery from '../components/Gallery/Gallery'

function Home() {
  return (
    <>
      <Banner img="..\src\assets\hero.webp" title="Chez vous, partout et ailleurs" />
      <Gallery logements={Logements} />

    </>
  )
}

export default Home
