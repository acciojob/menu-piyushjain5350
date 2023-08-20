import React from "react";

const Card=({cardData})=>{
    const path='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=996&t=st=1692545539~exp=1692546139~hmac=f4c485b4930dcc3c11a8919156eb5258564a565e02a989fce524ed0063db8cd5';
    return(
        <div className="card">
            <div className="image">
                <img src={path} alt="img" />
            </div>
            <div className="details">
                <div className="div1">
                    <h4>{cardData.title}</h4>
                    <p className="price">$ {cardData.price}</p>
                </div>
                <div>{cardData.desc}</div>

            </div>
        </div>
    )
}
export default Card;