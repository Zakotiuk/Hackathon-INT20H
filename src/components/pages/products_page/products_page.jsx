import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Additional_service from "../../../services/Additional_service";
import { useFetching } from "../../../services/useFetching";
import Arrow_btn from "../../arrow_btn/arrow_btn";
import Category_list from "../../category_list/category_list";
import Products_list from "../../products_list/products_list";
import './products_page.css'

const Products_page = () =>{
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryQuery, setCategoryQuery] = useState("All");
    const setUserCategoryQuery = (category) =>{
        setCategoryQuery(category);
    }
    const [fetching, isLoading, error] = useFetching(async()=> 
        {
            const resCategories = await Additional_service.getProductsCategories();
            const resProducts = await Additional_service.getUserProductsByCategory(categoryQuery);
            setCategories(resCategories);
            setProducts(resProducts);
        }   
    )
    useEffect(()=>{
        fetching();
    }, [categoryQuery]);
    return(
        <div className="products_page_div">
            <div className="title">
                <Arrow_btn path="/" title="My products"></Arrow_btn>
                <Link to="/suggestion"><button className="dark_org_btn fnt_sz_20">What can I cook?</button></Link>
            </div>
            <Category_list setCategoryQuery={setUserCategoryQuery} categories={categories}></Category_list>
            {
                isLoading
                ?   <ThreeDots color="black" wrapperStyle={{justifyContent : "center", height: 60 + "vh", alignItems : "center"}} visible={true}/>
                :   <Products_list products={products}></Products_list>
            }
        </div>
    )
}

export default Products_page;