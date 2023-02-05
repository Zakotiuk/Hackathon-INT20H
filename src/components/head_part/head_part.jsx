import React from "react";
import { Link } from "react-router-dom";
import { Link as Link_Scroll} from 'react-scroll/modules';
import './head_part.css';

const Head_part = () =>{
    return(
        <div className="head_part_div">
            <span className="fnt_fml_bbs title">You can cook with <span className="orange">comfort</span> and pleasure</span>
            <div className="buttons">
                <Link_Scroll to="categories" smooth='true' duration={1000}><button className="dark_org_btn fnt_sz_20">Dishes</button></Link_Scroll>
                <Link to="/products"><button className="light_org_btn fnt_sz_20">My products</button></Link>
            </div>
            <hr size="1"/>
        </div>
    )
}
export default Head_part;