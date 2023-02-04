import React from "react";
import './footer.css';

const Footer = () =>{
    return(
        <div className="footer_bacg_div">
            <div className="footer_div">
            <div className="social_media_div">
                <span className="fnt_sz_13">If you need advice on a dish, you can turn to a famous chef who is now retired</span>
                <div className="social_media">
                    <img className="icon" src={require("../../images/tiktok.png")}/>
                    <img className="icon" src={require("../../images/google.png")}/>
                    <img className="icon" src={require("../../images/instagram.png")}/>
                </div>
            </div>
            <hr className="org_hr" />
            <div className="info_div">
                <span className="fnt_sz_10">+380 509 473 621</span>
                <span className="fnt_sz_10">+380 636 853 364</span>
            </div>
            <hr className="org_hr" />
            <div className="info_div">
                <span className="fnt_sz_10">Mn-Fr: 10:00-17:00</span>
                <span className="fnt_sz_10">St-Sn: 11:00-15:00</span>
            </div>
            </div>
        </div>
    )
}

export default Footer;