import React from "react";
import Ingredient_item from "../ingredient_item/ingredient_item";
import './products_list.css';

const Products_list = () =>{
    return(
        <div className="products_list_div">
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>
            <Ingredient_item isIngr={true}></Ingredient_item>

        </div>
    )
}

export default Products_list;