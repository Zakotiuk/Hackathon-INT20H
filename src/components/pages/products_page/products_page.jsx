import React from "react";
import { Link } from "react-router-dom";
import Arrow_btn from "../../arrow_btn/arrow_btn";
import Category_list from "../../category_list/category_list";
import Ingredient_item from "../../ingredient_item/ingredient_item";
import Ingredient_list from "../../ingredient_list/ingredient_list";
import Products_list from "../../products_list/products_list";
import './products_page.css'

const Products_page = () =>{
    return(
        <div className="products_page_div">
            <div className="title">
                <Arrow_btn path="/" title="My products"></Arrow_btn>
                <Link to="/suggestion"><button className="dark_org_btn fnt_sz_20">What can I cook?</button></Link>
            </div>
            <Category_list></Category_list>
            <Products_list></Products_list>
        </div>
    )
}

export default Products_page;