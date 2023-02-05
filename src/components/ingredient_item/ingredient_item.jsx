import React from "react";
import './ingredient_item.css'

const Ingredient_item = ({index, isIngr}) =>{
    return(
            <div className={isIngr ? "ingredient_item_div fnt_sz_20" : "ingredient_item_div"}>
                Lemon
                    {
                        index == 1 &&
                        <span className="fnt_sz_10">You do not have this product :(</span>
                    }
            </div>
    )
}

export default Ingredient_item;