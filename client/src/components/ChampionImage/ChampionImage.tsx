import React from "react";
import { Ban } from "../../types/Ban/Ban";
import { StyleObject } from "../../types/StyleObject";
import EmptyBlock from "../EmptyBlock/EmptyBlock";

const ChampionImage = (
    { champion, className = "", style = {} }
        : { champion: Ban, className?: string, style?: StyleObject }
): JSX.Element => {
    if (champion === null) {
        return (
            <EmptyBlock
                className={"no-champion champion-image " + className}
                style={style}
            />
        )
    } else {
        return (
            <img
                src={champion.image}
                alt={champion.name}
                className={"champion-image " + className}
                style={style}
            />
        )
    }
}

export default ChampionImage;