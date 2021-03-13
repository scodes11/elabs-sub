import React from "react"
import Info from "./Info";
import Map from "./Map"
import "./css/Hotel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Hotel() {

    const hotels = [
        {
            name:"Hotel Name",
            desc:"Distance description",
            btc:"BTC 0.0023654",
            p1:"per night",
            p2:"rate for 4 nights",
            p3:"Good(213 reviews) includes taxes and fees"
        },
        {
            name:"Hotel Name",
            desc:"Distance description",
            btc:"BTC 0.0023654",
            p1:"per night",
            p2:"rate for 4 nights",
            p3:"Good(213 reviews) includes taxes and fees"
        },
        {
            name:"Hotel Name",
            desc:"Distance description",
            btc:"BTC 0.0023654",
            p1:"per night",
            p2:"rate for 4 nights",
            p3:"Good(213 reviews) includes taxes and fees"
        },
        {
            name:"Hotel Name",
            desc:"Distance description",
            btc:"BTC 0.0023654",
            p1:"per night",
            p2:"rate for 4 nights",
            p3:"Good(213 reviews) includes taxes and fees"
        },
        {
            name:"Hotel Name",
            desc:"Distance description",
            btc:"BTC 0.0023654",
            p1:"per night",
            p2:"rate for 4 nights",
            p3:"Good(213 reviews) includes taxes and fees"
        }
    ]

    return (
        <div >
        <div className="hotelList col-md-4 float-left">
        {hotels.map(hotel => {
            return (
                <Info 
                    name={hotel.name}
                    desc={hotel.desc}
                    btc={hotel.btc}
                    p1={hotel.p1}
                    p2={hotel.p2}
                    p3={hotel.p3}
                />
            )
        })}
        </div>
        <div className="col-md-6 float-right">
            <Map />
        </div>
        </div>
    )
}

export default Hotel;