import React from "react";
import { StyleObject } from "../../../types/StyleObject";
import { SummonerSpell } from "../../../types/SummonerSpell/SummonerSpell";
import SummonerSpellImage from "../SummonerSpellImage";

const PlayerSummonerSpells = (
    { summonerSpells, className = "", style = {} }
        : { summonerSpells: SummonerSpell[], className?: string, style?: StyleObject }
): JSX.Element => (
    <div className="player__summonerspells">
        {summonerSpells.map((summonerSpell: SummonerSpell) => (
            <SummonerSpellImage
                summonerSpell={summonerSpell}
                className={"player__summonerspell " + className}
            />
        ))}
    </div>
)

export default PlayerSummonerSpells;