import React from "react";
import { StyleObject } from "../../types/StyleObject";
import { SummonerSpell } from "../../types/SummonerSpell/SummonerSpell";

const SummonerSpellImage = (
    { summonerSpell, className = "", style = {} }
        : { summonerSpell: SummonerSpell, className?: string, style?: StyleObject }
): JSX.Element => (
    <img
        src={summonerSpell.image}
        alt={summonerSpell.name}
        className={"summonerspell-image " + className}
        style={style}
    />
)

export default SummonerSpellImage;