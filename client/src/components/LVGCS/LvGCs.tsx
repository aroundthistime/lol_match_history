import React from "react";

const LvGCs = (
    { championLevel, goldEarned, cs }
        : { championLevel: number, goldEarned: number, cs: number }
) => (
    <>
        <p className="player-growth">레벨 {championLevel}</p>
        <p className="player-growth">골드 {goldEarned}</p>
        <p className="player-growth">CS {cs}</p>
    </>
)

export default LvGCs;