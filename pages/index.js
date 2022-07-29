import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import CardHome from '../components/cardHome/cardHome'

export default function Home() {
  return (
    <>
      <NavBar />
      <CardHome />
      <Footer />
    </>
  )
}
