import React from "react";
import { Link } from "react-router-dom";
import Arrow_btn from "../../arrow_btn/arrow_btn";
import Dish_card from "../../dish_card/dish_card";
import Ingredient_list from "../../ingredient_list/ingredient_list";
import './dish_page.css'

const Dish_page = () =>{
    return(
        <div className="dish_page_div">
            <Arrow_btn path="/"></Arrow_btn>
            <div className="divider"> 
                <Dish_card></Dish_card>
                <Ingredient_list></Ingredient_list>
            </div>
        </div>
    )
}

export default Dish_page;