import React, { useRef } from "react";
import './category_item.css';

let lastActive = 0;
const Category_item = ({item, index, setCategoryQuery}) =>{
    const btn = useRef(null);
    const changeActive = () =>{
        //доопрацювати
        document.getElementById(lastActive).classList.replace("active", "non_active");
        console.log(document.getElementById(lastActive).classList);
        btn.current.classList.replace("non_active", "active");
        lastActive =  btn.current.id;
        // end доопрацювати
    }
    return(

        <div ref={btn} id={index} onClick={()=> {setCategoryQuery(item.strCategory); changeActive()}} className={index == 0 ? "category_item_div active" : "category_item_div non_active"}>
            <img src="https://img.icons8.com/ios-glyphs/400/null/sideburns.png"/>
            <span className="fnt_sz_16 title">{item.strCategory}</span>
        </div>
        
    )
}

export default Category_item;