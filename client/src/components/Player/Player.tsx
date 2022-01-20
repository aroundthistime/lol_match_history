import React from "react";
import { StyleObject } from "../../types/StyleObject";

const Player = ({ children, className = "", style = {} }: { children: React.ReactNode, className?: string, style?: StyleObject }): JSX.Element => {
    return (
        <li className={"player " + className} style={{ ...style }}>
            {children}
        </li>
    )
}


export default Player