import React from "react";
import './card_item.css';
import '../../main_styles.css'

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
                    <button className="btn fnt_sz_16">Click on me</button>                
                </div>
            </div>
            
        </div>
    )
}

export default Card_item;