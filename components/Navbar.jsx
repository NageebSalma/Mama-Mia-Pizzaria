import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar =  () => {
    return (
        <div className = {styles.container}>
          <div className= {styles.item}>
          
          <div className = {styles.callButton}>
              <Image width='32' height='32' alt='telephone' src="/Img/telephone.png" />
          </div>
          <div className ={styles.texts}>
             <div className ={styles.text}>ORDER NOW! </div>
             <div className ={styles.text}>0-100-848-633-1</div>
          </div>
          </div>

          <div className= {styles.item}>
              <ul className={styles.list}>
                 <li className={styles.listItem}>Home</li>
                 <li className={styles.listItem}>Products</li>
                 <li className={styles.listItem}>Menu</li>
                 <Image height= '100' width="250" src="/Img/logo.png" alt="Mama mia pizzaria logo" />
                 <li className={styles.listItem}>Events</li>
                 <li className={styles.listItem}>Contact</li>

              </ul>
          </div>

          <div className= {styles.item}>
              <div className={styles.cart}>
                  <Image width="30" height="30" src="/Img/cart.png" alt="shopping cart" />
                  <div className={styles.counter}>2</div>
              </div>
            </div>
        </div>
    )
}
export default Navbar;