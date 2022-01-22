import React from "react";
import { getKDATextClassName } from "../../utils/matchHandlers";

const PlayerKDA = (
    { kills, deaths, assists, kda, className = "" }
        : { kills: number, deaths: number, assists: number, kda: string, className?: string }
): JSX.Element => (
    <>
        <p className={"player-kda__text text--bold " + getKDATextClassName(kda) + className}>{kda}</p>
        <p>{kills}/{deaths}/{assists}</p>
    </>
)

export default PlayerKDA;