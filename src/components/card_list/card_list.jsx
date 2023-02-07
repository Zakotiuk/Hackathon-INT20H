import React, { useEffect, useState } from "react";
import Card_item from "../card_item/card_item";
import './card_list.css'
const Card_list = ({recipes, category}) =>{
    return(
        <div className="card_list_full_div">
            <div className="card_list_div">
            {
                recipes?.map((item, index) =>
                    <Card_item item={item} key={index}></Card_item>
                )
            }
            </div>
            <div className="anotation_div">
                <span className="title fnt_fml_bbs">{category}</span>
            </div>
        </div>
    )
}

export default Card_list;