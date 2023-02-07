import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Additional_service from "../../../services/Additional_service";
import Recipe_service from "../../../services/Recipe_service";
import { useFetching } from "../../../services/useFetching";
import Arrow_btn from "../../arrow_btn/arrow_btn";
import Dish_card from "../../dish_card/dish_card";
import Ingredient_list from "../../ingredient_list/ingredient_list";
import './dish_page.css'

const Dish_page = () =>{
    const [dish, setDish] = useState([]);
    const [products, setProducts] = useState([]);
    const [missProducts, setMissProducts] = useState([]);
    const [fetching, isLoading, error] = useFetching(async()=> 
        {
            var id = window.location.search.replace('?=', '');
            const response = await Recipe_service.getDish(id);
            setDish(response);
            setProducts(response.products);
            const respMissProd = await Additional_service.getMissingProducts(response.products);
            setMissProducts(respMissProd);
        }   
    )
    useEffect(()=>{
        fetching();
    }, []);

    return(
        <div className="dish_page_div">
            <Arrow_btn path="/"></Arrow_btn>
            {
                isLoading
                ?  <ThreeDots color="black" wrapperStyle={{justifyContent : "center", height: 75 + "vh", alignItems : "center"}} visible={true}/>
                :   <div className="divider"> 
                        <Dish_card item={dish}></Dish_card>
                        <Ingredient_list missItems={missProducts} items={products}></Ingredient_list>
                    </div>
            }
            
        </div>
    )
}

export default Dish_page;