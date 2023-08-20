import React from "react";
import Card from "./Card";

const Menu=({menuData})=>{
    // console.log(menuData);
    return(
        <div className="menu">
            {menuData.map((val)=>(
                <Card key={val.id} cardData={val}/>
            ))};
        </div>
    )
}

export default Menu;