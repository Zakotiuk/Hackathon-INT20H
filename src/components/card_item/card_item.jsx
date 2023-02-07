import React from "react";
import './card_item.css';
import '../../main_styles.css'
import { Link } from "react-router-dom";

const Card_item = ({item}) =>{
    return(
        <div className="card_item_div">
            <div className="border_div">
                <img className="card_item_img" src={item.image}/>
                <div className="info_div">
                    <div className="description">
                        <span className="fnt_sz_20">{item.name}</span>
                        <span className="fnt_sz_16">Difficulty : {item.difficulty}</span>
                    </div>
                    <Link to={"/id?=" + `${item.id}`}>
                        <button className="btn fnt_sz_16">Cook</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Card_item;