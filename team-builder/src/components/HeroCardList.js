import React from "react";
import HeroCard from "./HeroCard";


export default function HeroCardList({heroList}){

    return(
        <div className="cardListBox">
            {heroList.map(item=>{
                return <HeroCard key={heroList.indexOf(item)} hero={item} />
            })}
        </div>
    )
}