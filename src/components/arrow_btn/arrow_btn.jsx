import React from "react";
import { Link } from "react-router-dom";
import './arrow_btn.css'

const Arrow_btn = ({title, path}) =>{
    return(
        <div className="arrow_btn_div">
            <Link to={path}><img className="icon" src={require("../../images/arrow.png")}/></Link>
            <span className="fnt_sz_64 fnt_fml_bbs">{title}</span>
        </div>
    )
}

export default Arrow_btn;