import React, { useEffect, useState } from "react";
import Additional_service from "../../services/Additional_service";
import { useFetching } from "../../services/useFetching";
import Category_item from "../category_item/category_item";
import './category_list.css'
const Category_list = ({setCategoryQuery, title}) =>{
    const [category, setCategory] = useState([]);
    // дописати тут
    const [fetching, isLoading, error] = useFetching(async()=> 
        {
            const response = await Additional_service.getCategories();
            setCategory(response);
        }   
    )
    const setUserCategoryQuery = (category) =>{
        setCategoryQuery(category);
    }
    useEffect(()=>{
        fetching();
    }, []);
    return(
        <div id="categories" className="category_list_full_div">
            {
                title &&
                <span className="fnt_fml_bbs fnt_sz_36 logo">{title}</span>
            }
            <div className="category_list_div">
                {
                    category.map((item, index) => 
                        <Category_item index={index} setCategoryQuery={setUserCategoryQuery} item={item} key={index}></Category_item>
                    )
                }
            </div>
        </div>
    )
}
export default Category_list;