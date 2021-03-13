import React from "react";
import "./css/Info.css";

function Info(props) {
    return (
        <div className="hotel">
            <img className="image" src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy" width="200" height="120"/>
            <h6>{props.name}</h6>
            <p className="desc">{props.desc}</p>
            
                <h4>{props.btc}</h4>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p><strong>4.5/5</strong> {props.p3}</p>
            
        </div>
    )
}

export default Info;