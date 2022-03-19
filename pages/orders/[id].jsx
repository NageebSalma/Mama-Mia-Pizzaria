import React from 'react'
import styles from "../../styles/order.module.css"
import Image from "next/image"
// import { useState } from 'react'
const order = () => {
    const status = 0;

    const statusClass = (index) =>{
        if(index - status < 1){
            return styles.done;
        }
        if(index - status === 1){
            return styles.inprogress;
        }
        if(index - status > 1){
            return styles.yours;
        }

    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
         <div className = {styles.row}>
         <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Order Id</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          
          </tr>
          <tr className={styles.tr}>
           
            <td>
              <span className={styles.id}>123456789</span>
            </td>
            <td>
              <span className={styles.customer}>
              Salma NAgeeb
              </span>
            </td>
            <td>
              <span className={styles.address}>13 molo popo St.</span>
            </td>
            <td>
              <span className={styles.total}>48.01@</span>
            </td>
            
          </tr>
    
        </table>
         </div>
         <div className = {styles.row}>
             <div className={statusClass(0)}>
                 <Image src="/Img/paid.png" alt="" height="30" width="30" />
                 <span>Payment</span>
                 <div className={styles.checkedIcon}>
                     <Image className={styles.checkedImage} src="/Img/checked.png" alt="" height="20" width="20" />
                 </div>
             </div>
             <div className={statusClass(1)}>
                 <Image src="/Img/bake.png" alt="" height="30" width="30" />
                 <span>Preparing</span>
                
                 <div className={styles.checkedIcon}>
                     <Image className={styles.checkedImage} src="/Img/checked.png" alt="" height="20" width="20" />
                 </div>
             </div>
             <div className={statusClass(2)}>
                 <Image src="/Img/bike.png" alt="" height="30" width="30" />
                 <span>On the way</span>
                 <div className={styles.checkedIcon}>
                     <Image className={styles.checkedImage} src="/Img/checked.png" alt="" height="20" width="20" />
                 </div>
             </div>
             <div className={statusClass(3)}>
                 <Image src="/Img/delivered.png" alt="" height="30" width="30" />
                 <span>Delivered</span>
                 <div className={styles.checkedIcon}>
                     <Image className={styles.checkedImage} src="/Img/checked.png" alt="" height="20" width="20" />
                 </div>
             </div>
         </div>

        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>SUBTOTAL</b>
           50$
        </div>
        <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>DISCOUNT</b>
           1.99$
        </div>
        <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>TOTAL</b>
           48.01$
        </div>
        <button disabled className={styles.button}>PAID</button>



        </div>
        </div>


    </div>
  )
}

export default order;