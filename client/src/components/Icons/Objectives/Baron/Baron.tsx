import React from "react";
import baronImage from "../../../../assets/images/baron-icon.png"
import { StyleObject } from "../../../../types/StyleObject";

const BaronIcon = (
    { className = "", style = {} }: { className?: string, style?: StyleObject }
): JSX.Element => (
    <img
        src={baronImage}
        alt="바론"
        className={className}
        style={{ ...style }}
    />
)

export default BaronIcon;