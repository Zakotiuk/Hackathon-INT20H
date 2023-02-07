import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Additional_service from "../../../services/Additional_service";
import Recipe_service from "../../../services/Recipe_service";
import { useFetching } from "../../../services/useFetching";
import Arrow_btn from "../../arrow_btn/arrow_btn";
import Card_list from "../../card_list/card_list";
import Footer from "../../footer/footer";
import './suggestion_page.css';

const Suggestion_page = () =>{
    const [dishes, setDishes] = useState();
    const [fetching, isLoading, error] = useFetching(async()=> 
        {
            const respProd = await Additional_service.getUserProducts();
            const response = await Recipe_service.getDishesByProducts(respProd);
            setDishes(response);
        }   
    )
    useEffect(()=>{
        fetching();
    }, []);
    return(
        <div className="suggestion_page_div">
            <Arrow_btn path="/products" title="You can cook"></Arrow_btn>
            {
                isLoading
                ?   <ThreeDots color="black" wrapperStyle={{justifyContent : "center", height: 60 + "vh", alignItems : "center"}} visible={true}/>
                :   <Card_list recipes={dishes} category={""}></Card_list>
            }
            <Footer></Footer>
        </div>
    )
}
export default Suggestion_page;