import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
export default function Home() {
  return (
    <div className={styles.container}>
   
      <Head>
        <title>Mamma Mia!</title>
        <meta name="description" content="Italian Pizzaria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
      <image src='/Img/bike.png' alt='bike' />
    </div>
  )
}
