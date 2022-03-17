import Image from "next/image"
import styles from "../../styles/Product.module.css"
import { useState } from "react"
const Product = () => {
    const [size , setSize] = useState(0);
    const pizza = {
        id : 1,
        img: "/Img/pizza.png",
        name : "GGGHKD",
        price : [19.9 , 23.9 , 27.9],
        description : "Lorem ipsum jkfk"
    }
    return (
        <div className={styles.container}>
          <div className={styles.left}>
             <div className={styles.imgContainer}>
                 <Image objectFit="contain" src={pizza.img} alt="" layout="fill" />

                 
             </div>
          </div>
          <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
                 <span className={styles.price}>${pizza.price[size]}</span>
                 <p className={styles.description}>{pizza.description}</p>
                 <h2 className={styles.choose}>Choose your size</h2>
                 <div className={styles.sizes}>
                 <div className={styles.size} onClick = { () => setSize(0)}>
                    <Image layout="fill" src="/Img/size.png" alt=""/>
                    <span className={styles.number}>Small</span>
                 </div>
                 <div className={styles.size} onClick = { () => setSize(1)}>
                    <Image layout="fill" src="/Img/size.png" alt=""/>
                    <span className={styles.number}>Medium</span>
                 </div>
                 <div className={styles.size} onClick = { () => setSize(2)}>
                    <Image layout="fill" src="/Img/size.png" alt=""/>
                    <span className={styles.number}>Large</span>
                 </div>
                 </div>
                 <h3 className={styles.choose}>Choose Additional ingredients</h3>
                 <div className={styles.ingredients}>
                 <div className={styles.option}>
                    <input type="checkbox" id="double" name="double" className="styles.checkbox"></input>
                    <label htmlFor="double">Double Cheese</label>
                 </div>
                 <div className={styles.option}>
                    <input type="checkbox" id="vegan" name="double" className="styles.checkbox"></input>
                    <label htmlFor="vegan">Vegeterian Only</label>
                 </div>
                 <div className={styles.option}>
                    <input type="checkbox" id="pineapple" name="double" className="styles.checkbox"></input>
                    <label htmlFor="pineapple">Pineapple</label>
                 </div>
                 <div className={styles.option}>
                    <input type="checkbox" id="spicy" name="double" className="styles.checkbox"></input>
                    <label htmlFor="spicy">Spicy</label>
                 </div>

                 </div>

                 <div className={styles.add}>
                     <input type="number" defaultValue={1} className={styles.quantity}></input>
                     <button className={styles.button}>Add to cart</button>
                 </div>
          </div>
        </div>
    )
}


export default Product;