import styles from "../styles/Featured.module.css"
import Image from "next/image"
import { useState } from "react";

const Featured  = () => {
    const [index , setIndex] = useState(0);
    const images = [
        "/Img/featured.png",
        "/Img/featured2.png",
        "/Img/featured3.png"
    ]
    const handleArrow =( param )=>{
        if(param === 'left'){
            index > 0 && setIndex(index - 1)
        }
        else{
            index <2 && setIndex(index + 1)
            
        }
        // console.log(index)
    }
  return(
      <div className={styles.container}>
        <div  onClick={() => handleArrow('left')} className={styles.arrowContainer} style={{left : 0}}>
            <Image src="/Img/arrowl.png" alt="arrow left" layout="fill" />
        </div>
         <div className={styles.wrapper} style={{transform : `translateX(${-100*index}vw)`}}>
            
                {images.map( (img , index) => (
                    <div key={index} className={styles.imgContainer}>
                    <h2 className={styles.featuredTitle}>WE KNOW WHAT YOU WANT.</h2>
                    <Image objectFit="contain" height="500" width="500"  key={index} src={img} alt="" />
                    </div>
                ))}
             
         </div>
         <div onClick={() => handleArrow('right')} className={styles.arrowContainer} style={{right : 0}}>
             <Image src="/Img/arrowr.png" alt="arrow right" layout="fill" />
         </div>
      </div>
  ) 
}

export default Featured;