import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import CardContact from '../components/cardContact/cardContact'

export default function Home() {
    return (
      <>
        <NavBar />
        <CardContact />
        <Footer />
      </>
    )
  }