import React from "react";
import './head_part.css';

const Head_part = () =>{
    return(
        <div className="head_part_div">
            <span className="fnt_fml_bbs title">You can cook with <span className="orange">comfort</span> and pleasure</span>
            <div className="buttons">
                <button className="dark_org_btn fnt_sz_20">Dishes</button>
                <button className="light_org_btn fnt_sz_20">My products</button>
            </div>
            <hr size="1"/>
        </div>
    )
}
export default Head_part;