import React from "react";
import { Perks } from "../../types/Perks/Perks";
import { Rune } from "../../types/Rune/Rune";
import { StyleObject } from "../../types/StyleObject";
import PerkImage from "./PerkImage";

const MainPerkImage = (
    { perks, className = "", style = {} }
        : { perks: Perks, className?: string, style?: StyleObject }
): JSX.Element => {
    const getCorePerk = (perks: Perks): Rune => {
        return perks.slots[0]
    }
    const corePerk = getCorePerk(perks);
    return (
        <PerkImage
            perk={corePerk}
            className={"perk-image--main " + className}
            style={{ ...style }}
        />
    )
}

export default MainPerkImage;