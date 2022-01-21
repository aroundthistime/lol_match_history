import React from "react";
import { Perks } from "../../../types/Perks/Perks";
import { StyleObject } from "../../../types/StyleObject";
import MainPerkImage from "../MainPerkImage";
import SubPerkImage from "../SubPerkImage";

const PlayerPerks = (
    { mainPerks, subPerks, className = "", style }
        : { mainPerks: Perks, subPerks: Perks, className?: String, style?: StyleObject }
): JSX.Element => (
    <div className={"player__perks " + className} style={{ ...style }}>
        <MainPerkImage
            perks={mainPerks}
            className="player__perk player__perk--main"
        />
        <SubPerkImage
            perks={subPerks}
            className="player__perk player__perk--sub"
        />
    </div>
)

export default PlayerPerks;