import React, { useEffect, useState } from "react";
import Recipe_service from "../../services/Recipe_service";
import { useFetching } from "../../services/useFetching";
import Card_item from "../card_item/card_item";
import './card_list.css'
const Card_list = ({category}) =>{
    const [recipe, setRecipe] = useState([]);
        // дописати тут
    const [fetching, isLoading, error] = useFetching(async()=> 
        {
            const response = await Recipe_service.getRecipe(category);
            setRecipe(response);
            console.log(category);
        }   
    )

    useEffect(() => {
        fetching();
    }, [category]);

    return(
        <div className="card_list_full_div">
            <div className="card_list_div">
            {
                recipe.map((item, index) => 
                    <Card_item item={item} key={index}></Card_item>
                )
            }
            </div>
            <div className="anotation_div">
                <span className="title">Seafood</span>
            </div>

        </div>
    )
}

export default Card_list;