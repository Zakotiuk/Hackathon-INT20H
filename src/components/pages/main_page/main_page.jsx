import React, { useEffect, useState } from "react";
import Additional_service from "../../../services/Additional_service";
import { useFetching } from "../../../services/useFetching";
import Card_list from "../../card_list/card_list";
import Category_list from "../../category_list/category_list";
import Footer from "../../footer/footer";
import Head_part from "../../head_part/head_part";
import Recipe_service from "../../../services/Recipe_service"
import { ThreeDots } from "react-loader-spinner";

const Main_page = () =>{
    const [categoryQuery, setCategoryQuery] = useState("Beef");
    const [recipes, setRecipes] = useState([]);
    const setUserCategoryQuery = (category) =>{
        setCategoryQuery(category);
    }

    const [categories, setCategories] = useState([]);
    const [fetching, isLoading, error] = useFetching(async()=> 
        {
            const response = await Additional_service.getDishesCategories();
            setCategories(response);
            const responseRec = await Recipe_service.getRecipes(categoryQuery);
            setRecipes(responseRec);
        }   
    )
    useEffect(()=>{
        fetching();
    }, [categoryQuery]);
    return(
        <div>
            <Head_part></Head_part>
            <Category_list categories={categories} title={"Please select a dish"} setCategoryQuery={setUserCategoryQuery}></Category_list>
            {
                isLoading
                ?   <ThreeDots color="black" wrapperStyle={{justifyContent : "center", height: 100 + "vh", alignItems : "center"}} visible={true}/>
                :   <Card_list category={categoryQuery} recipes={recipes}></Card_list>
            }
            <Footer></Footer>
        </div>
    )
}

export default Main_page;