import React from "react";
import { Ban } from "../../../types/Ban/Ban";
import { StyleObject } from "../../../types/StyleObject";
import ChampionImage from "../../ChampionImage/ChampionImage";

const BannedChampion = (
    { bannedChampion, style = {}, className = "" }
        : { bannedChampion: Ban, style?: StyleObject, className?: string }): JSX.Element => (
    <ChampionImage
        champion={bannedChampion}
        className={"banned-champion " + className}
        style={{ ...style }}
    />
)

export default BannedChampion;