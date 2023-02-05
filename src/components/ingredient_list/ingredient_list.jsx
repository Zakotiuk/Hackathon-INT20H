import React from "react";
import Ingredient_item from "../ingredient_item/ingredient_item";
import './ingredient_list.css';

const Ingredient_list = () =>{
    return(
        <div className="ingredient_list_div">
            <span className="fnt_sz_20 clr_org">List of products</span>
            <div className="list_products">

            <Ingredient_item></Ingredient_item>
            <Ingredient_item index={1}></Ingredient_item>
            <Ingredient_item index={1}></Ingredient_item>

            </div>
        </div>
    )
}

export default Ingredient_list;