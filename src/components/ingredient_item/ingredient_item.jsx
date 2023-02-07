import React from "react";
import './ingredient_item.css'

const Ingredient_item = ({item, isIngr, missingProd, measure}) =>{
    return(
            <div className={isIngr ? "ingredient_item_div fnt_sz_20" : "ingredient_item_div"}>
                {item.name}
                <span className="fnt_sz_13">{item.amount} {item.measure == "" ? "items" : item.measure}</span>
                    {
                        missingProd &&
                        <span className="fnt_sz_10">{missingProd?.amount} {measure == "" ? "items" : measure} is missing</span>
                    }
            </div>
    )
}

export default Ingredient_item;