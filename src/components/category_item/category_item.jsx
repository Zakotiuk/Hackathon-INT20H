import React, { useRef } from "react";
import { useEffect } from "react";
import './category_item.css';

let lastActive = [];
let lastItem = {"blackIcon" : "https://img.icons8.com/ios-glyphs/500/null/steak-medium.png"};
const Category_item = ({item, refff, index, setCategoryQuery}) =>{
    const btn = useRef(null);
    const changeActive = () =>{
        lastActive.classList?.replace("active", "non_active");
        lastActive.childNodes[0].src = lastItem.blackIcon;

        btn.current.classList.replace("non_active", "active");
        btn.current.childNodes[0].src = item.whiteIcon;
        
        lastActive = btn.current;
        lastItem = item;
    }

    useEffect(()=>{
        lastActive = refff.current.childNodes[0];
    },[]);

    return(
        <div ref={btn} id={index} onClick={()=> {setCategoryQuery(item.name); changeActive()}} className={index == 0 ? "category_item_div active" : "category_item_div non_active"}>
            <img src={index != 0 ? item.blackIcon : item.whiteIcon}/>
            <span className="fnt_sz_16 title">{item.name}</span>
        </div>
        
    )
}

export default Category_item;