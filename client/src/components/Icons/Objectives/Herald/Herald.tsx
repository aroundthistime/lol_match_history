import React from "react";
import heraldImage from "../../../../assets/images/herald-icon.png"
import { StyleObject } from "../../../../types/StyleObject";

const HeraldIcon = (
    { className = "", style = {} }: { className?: string, style?: StyleObject }
): JSX.Element => (
    <img
        src={heraldImage}
        alt="바론"
        className={className}
        style={{ ...style }}
    />
)

export default HeraldIcon;