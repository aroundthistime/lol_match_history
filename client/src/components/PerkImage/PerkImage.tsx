import React from "react";
import { Rune } from "../../types/Rune/Rune";
import { StyleObject } from "../../types/StyleObject";

const PerkImage = (
    { perk, className = "", style = {} }
        : { perk: Rune, className?: string, style?: StyleObject }
): JSX.Element => (
    <img
        className={"perk-image " + className}
        src={perk.image}
        alt={perk.name}
    />
)

export default PerkImage;