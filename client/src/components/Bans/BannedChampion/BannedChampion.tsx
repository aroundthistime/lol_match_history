import React from "react";
import { Ban } from "../../../types/Ban/Ban";
import { StyleObject } from "../../../types/StyleObject";
import EmptyBlock from "../../EmptyBlock/EmptyBlock";

const BannedChampion = (
    { bannedChampion, style = {}, className = "" }
        : { bannedChampion: Ban, style?: StyleObject, className?: string }): JSX.Element => {
    if (bannedChampion === null) {
        return (
            <EmptyBlock
                className={"no-champion banned-champion " + className}
                style={style}
            />
        )
    } else {
        return (
            <img
                src={bannedChampion.image}
                alt={bannedChampion.name}
                className={"banned-champion"}
                style={style}
            />
        )
    }
}

export default BannedChampion;