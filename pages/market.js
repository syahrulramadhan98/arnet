import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import CardMarket from '../components/cardMarket/cardMarket'

export default function Home() {
    return (
      <>
        <NavBar />
        <CardMarket />
        <Footer />
      </>
    )
  }