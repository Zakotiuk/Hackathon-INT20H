import React from "react";
import Ingredient_item from "../ingredient_item/ingredient_item";
import './products_list.css';

const Products_list = ({products}) =>{
    return(
        <div className="products_list_div">
            {
                products.map((item, index) =>
                    <Ingredient_item key={index} item={item} isIngr={true}></Ingredient_item>
                )
            }
        </div>
    )
}

export default Products_list;