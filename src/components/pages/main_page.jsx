import React, { useEffect, useState } from "react";
import Card_list from "../card_list/card_list";
import Category_list from "../category_list/category_list";
import Footer from "../footer/footer";
import Head_part from "../head_part/head_part";
import Pagination from "../pagination/pagination";

const Main_page = () =>{
    const [categoryQuery, setCategoryQuery] = useState("Seafood")
    const setUserCategoryQuery = (category) =>{
        setCategoryQuery(category);
    }
    {
        console.log(categoryQuery)
    }
    return(
        <div>
            <Head_part></Head_part>
            <Category_list setCategoryQuery={setUserCategoryQuery}></Category_list>
            <Card_list category={categoryQuery}></Card_list>
            <Pagination></Pagination>
            <Footer></Footer>
        </div>
    )
}

export default Main_page;