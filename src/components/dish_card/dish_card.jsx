import React from "react";
import './dish_card.css';

const Dish_card = ({item}) =>{
    return(
            <div className="dish_card">
                <div className="org_div">
                </div>
                <div className="dish_card_info">
                    <img className="img_card" src={item.image}/>
                    <div className="blured_info">
                        <span className="fnt_fml_bbs fnt_sz_64">{item.name}</span>
                        <span className="fnt_fml_bbs fnt_sz_36 clr_org">Difficulty : {item.difficulty}</span>
                        <span className="recipe">{item.recipe}</span>
                    </div>
                </div>
            </div>
    )
}
export default Dish_card;