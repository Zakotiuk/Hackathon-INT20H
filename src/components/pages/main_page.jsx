import React, { useEffect, useState } from "react";
import Card_list from "../card_list/card_list";
import Category_list from "../category_list/category_list";

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
            <Category_list setCategoryQuery={setUserCategoryQuery}></Category_list>
            <Card_list category={categoryQuery}></Card_list>
        </div>
    )
}

export default Main_page;