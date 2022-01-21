import React from "react";
import { Perks } from "../../types/Perks/Perks";
import { Rune } from "../../types/Rune/Rune";
import { StyleObject } from "../../types/StyleObject";
import PerkImage from "./PerkImage";

const SubPerkImage = (
    { perks, className = "", style = {} }
        : { perks: Perks, className?: string, style?: StyleObject }
): JSX.Element => {
    const getPerkStyle = (perks: Perks): Rune => {
        return perks.style;
    }
    const perkStyle = getPerkStyle(perks);
    return (
        <PerkImage
            perk={perkStyle}
            className={"perk-image--sub " + className}
            style={{ ...style }}
        />
    )
}

export default SubPerkImage;