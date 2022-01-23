import React from "react";
import { StyleObject } from "../../types/StyleObject";
import { getKDATextClassName } from "../../utils/matchHandlers";

const PlayerKDA = (
    { kills, deaths, assists, kda, className = "", style = {} }
        : { kills: number, deaths: number, assists: number, kda: string, className?: string, style?: StyleObject }
): JSX.Element => (
    <p style={{ ...style }} className={className}>
        <p className={"player-kda__text text--bold " + getKDATextClassName(kda)}>{kda}</p>
        <p>{kills}/{deaths}/{assists}</p>
    </p>
)

export default PlayerKDA;