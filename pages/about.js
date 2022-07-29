import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import CardAbout from '../components/cardAbout/cardAbout'

export default function Home() {
    return (
      <>
        <NavBar />
        <CardAbout />
        <Footer />
      </>
    )
  }