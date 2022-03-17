import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"
const PizzaList = () => {
    return(
        <div className={styles.container}>
           <h1 className={styles.title}>ORIGINAL ITALIAN TASTE</h1>
           <p className ={styles.describtion}>
               Everything is made from scratch with the best ingredients and most fresh vegetables in the market.
               The original Italian taste since 1984.
           </p>

        <div className={styles.wrapper}>
           <PizzaCard />
           <PizzaCard />
           <PizzaCard />
           <PizzaCard />
           <PizzaCard />
           <PizzaCard />
           <PizzaCard />
           <PizzaCard />
        </div>

  
        </div>
    )
}

export default PizzaList;