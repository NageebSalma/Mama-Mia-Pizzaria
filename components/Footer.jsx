import styles from "../styles/Footer.module.css"
import Image from "next/image"
const Footer  = () => {
    return(
        <div className={styles.container}>
          {/* <div className={styles.item}>
           <Image src="/img/bg.png" objectFit="contain" layout="fill" alt="" />
          </div> */}
          {/* <div className={styles.item}>
              <h2 className={styles.motto}>
               MOUTH WATERING SLICE OF PIZZA
              </h2>
          </div> */}
          <div className={styles.card}>
              <h1 className={styles.title}>
                  FIND US!
              </h1>
              <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
          </div>
          {/* <div className={styles.card}>

          </div> */}

        </div>
    )
}

export default Footer;