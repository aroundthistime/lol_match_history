import React from "react";
import { StyleObject } from "../../types/StyleObject";

const GageBar = (
    { min = 0, max, value, className = "", style = {} }
        : { min?: number, max: number, value: number, className?: string, style?: StyleObject }
): JSX.Element => {
    const getPercentage = () => {
        return (value - min) / (max - min) * 100
    }
    return (
        <div className={"gagebar-container " + className}>
            <div
                className="gagebar__filled"
                style={{ width: `${getPercentage()}%`, height: "100%" }}
            />
        </div>
    )
}

export default GageBar;