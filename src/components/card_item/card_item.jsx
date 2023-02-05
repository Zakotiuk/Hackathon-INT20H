import React from "react";
import './card_item.css';
import '../../main_styles.css'
import { Link } from "react-router-dom";

const Card_item = ({item}) =>{
    return(
        <div className="card_item_div">
            <div className="border_div">
                <img className="card_item_img" src={item.strMealThumb}/>
                <div className="info_div">
                    <div className="description">
                        <span className="fnt_sz_20">{item.strMeal}</span>
                        <span className="fnt_sz_16">A good morning snack</span>
                    </div>
                    <Link to="/dish">
                        <button className="btn fnt_sz_16">Cook</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Card_item;