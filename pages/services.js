import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import CardService from '../components/cardServices/cardService'

export default function Home() {
    return (
      <>
        <NavBar />
        <CardService />
        <Footer />
      </>
    )
  }