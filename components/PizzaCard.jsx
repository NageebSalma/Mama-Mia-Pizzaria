import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"
const PizzaCard = () => {
    return(
        <div className={styles.container}>
            <Image src="/Img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.99</span>
            <p className={styles.description}>Out most ordered pizza!</p>

       
        </div>
    )
}

export default PizzaCard