import React from "react";
import dragonImage from "../../../../assets/images/dragon-icon.png"
import { StyleObject } from "../../../../types/StyleObject";

const DragonIcon = (
    { className = "", style = {} }: { className?: string, style?: StyleObject }
): JSX.Element => (
    <img
        src={dragonImage}
        alt="바론"
        className={className}
        style={{ ...style }}
    />
)

export default DragonIcon;