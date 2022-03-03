import React from 'react'
import style from "./Restaurant.module.css"

const Restaurant = ({ x }) => {
    return (
        <div className={style.card}>
            <div className={style.image_rating}>
                <img className={style.image} src={x.image} alt="" />
                <div className={style.rating_div}>
                    {x.rating}
                </div>
            </div>
            <div className={style.inner}>
                <span className={style.title}>{x.name.substring(0, 28)}</span>
                <div className={style.inner_details}>
                    <span className={style.address}>{x.address},{x.area}</span>
                    <br />
                    <span>{x.averageCost} (approx) | {x.cuisine.map(ele => {return `${ele}`}).join(", ")}</span>
                </div>
                <div className={style.dineout_pay}>
                    <span>Dineout pay </span>
                    <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jan/17/information.png" alt="not found" />
                </div>
            </div>

        </div>
    )
}

export default Restaurant