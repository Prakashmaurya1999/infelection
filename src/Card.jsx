import React from "react";
function Card(props) {
    return (
        <>
            <div className="card">I am ram
                <img src={props.img} alt="h" />
                <h1>{props.txt}</h1>
                <p>{props.desc}</p>
            </div>

        </>


    )
}
export default Card;