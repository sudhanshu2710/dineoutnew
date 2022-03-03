import React from 'react'
import { useDispatch } from 'react-redux'
import style from "./SideFilter.module.css"
import { set_cuisine_filter, set_type_filter } from "../../Redux/Restaurants/actions"
import { useSelector } from 'react-redux'


const SideFilter = () => {
  const dispatch = useDispatch()
  let cuisine_filter = useSelector(store => store.RestaurantReducer.cuisine_filter)
  let type_filter = useSelector(store => store.RestaurantReducer.type_filter)

  return (
    <div className={style.side_filter_div}>

      <h3>Quick Fitlers</h3>

      <hr />

      <input type="radio" name='quick' />
      <label htmlFor="">Dineout Pay</label>
      <br />
      <input type="radio" name='quick' />
      <label htmlFor="">Pure Veg.</label>
      <br />
      <input type="radio" name='quick' />
      <label htmlFor="">5 Star</label>
      <br />
      <input type="radio" name='quick' />
      <label htmlFor="">Buffe</label>
      <br />


      <h3>Cuisines</h3>

      <hr />

      <input type="radio" name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="" checked={cuisine_filter === "" ? "checked" : ""} />
      <label htmlFor="">None</label>
      <br />
      <input type="radio" name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="North Indian" checked={cuisine_filter === "North Indian" ? "checked" : ""} />
      <label htmlFor="">North Indian</label>
      <br />
      <input type="radio" name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="Thai" checked={cuisine_filter === "Thai" ? "checked" : ""} />
      <label htmlFor="">Thai</label>
      <br />
      <input type="radio" name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="Japanese" checked={cuisine_filter === "Japanese" ? "checked" : ""} />
      <label htmlFor="">Japanese</label>
      <br />
      <input type="radio" name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="Asian" checked={cuisine_filter === "Asian" ? "checked" : ""} />
      <label htmlFor="">Asian</label>
      <br />

      <h3>Tags</h3>

      <hr />

      <input type="radio" name='type_filter' value="" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "" ? "checked" : ""} />
      <label htmlFor="">None</label>
      <br />
      <input type="radio" name='type_filter' value="Nightlife" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Nightlife" ? "checked" : ""} />
      <label htmlFor="">Night Life</label>
      <br />
      <input type="radio" name='type_filter' value="Bar" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Bar" ? "checked" : ""} />
      <label htmlFor="">Bar</label>
      <br />
      <input type="radio" name='type_filter' value="Lounge" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Lounge" ? "checked" : ""} />
      <label htmlFor="">Lounge</label>
      <br />
      <input type="radio" name='type_filter' value="Casual Dining" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }}  checked={type_filter === "Casual Dining" ? "checked" : ""} />
      <label htmlFor="">Casual Dining</label>
      <br />
    </div>
  )
}

export default SideFilter