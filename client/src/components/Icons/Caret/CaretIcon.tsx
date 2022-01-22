import React from "react";
import { StyleObject } from "../../../types/StyleObject";

type Direction = "up" | "down" | "left" | "right";

const CaretIcon = (
    { direction = "up", className = "", style = {} }
        : { direction: Direction, className?: string, style?: StyleObject }
): JSX.Element => (
    <i
        className={`fas fa-caret-${direction} ${className}`}
        style={{ ...style }}
    />
)

export default CaretIcon;