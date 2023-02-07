import React, { useEffect, useState } from "react";
import Category_item from "../category_item/category_item";
import './category_list.css'
const Category_list = ({ categories,setCategoryQuery, title}) =>{
    const setUserCategoryQuery = (category) =>{
        setCategoryQuery(category);
    }
    return(
        <div id="categories" className="category_list_full_div">
            {
                title &&
                <span className="fnt_fml_bbs fnt_sz_36 logo">{title}</span>
            }
            <div className="category_list_div">
                {
                    categories.map((item, index) =>
                        <Category_item index={index} setCategoryQuery={setUserCategoryQuery} item={item} key={index}></Category_item>
                    )
                }
            </div>
        </div>
    )
}
export default Category_list;