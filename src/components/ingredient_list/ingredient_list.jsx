import React from "react";
import Ingredient_item from "../ingredient_item/ingredient_item";
import './ingredient_list.css';

const Ingredient_list = ({items, missItems}) =>{
    return(
        <div className="ingredient_list_div">
            <span className="fnt_sz_20 clr_org">List of products</span>
            {
                console.log(missItems)
            }
            <div className="list_products">
                {
                    items.map((item, index) =>{
                        let missIt = missItems.find(el => el.name == item.name);
                        if(missIt === undefined){
                            return(
                                <Ingredient_item key={index} item={item}></Ingredient_item>
                            );
                        }
                        else{
                            return(
                                <Ingredient_item measure={item.measure} missingProd={missIt} key={index} item={item}></Ingredient_item>
                            );
                        }
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Ingredient_list;