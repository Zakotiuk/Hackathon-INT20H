import React from "react";
import { Link } from "react-router-dom";
import Arrow_btn from "../../arrow_btn/arrow_btn";
import Card_list from "../../card_list/card_list";
import Footer from "../../footer/footer";
import './suggestion_page.css';

const Suggestion_page = () =>{
    return(
        <div className="suggestion_page_div">
            <Arrow_btn path="/products" title="You can cook"></Arrow_btn>
            <Card_list category={"Seafood"}></Card_list>
            <Footer></Footer>
        </div>
    )
}
export default Suggestion_page;