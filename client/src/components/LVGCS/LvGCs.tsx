import React from "react";
import i18n from "i18next";

const LvGCs = (
    { championLevel, goldEarned, cs }
        : { championLevel: number, goldEarned: number, cs: number }
) => (
    <>
        <p className="player-growth">{i18n.t('table.level')} {championLevel}</p>
        <p className="player-growth">{i18n.t('table.gold')} {goldEarned}</p>
        <p className="player-growth">CS {cs}</p>
    </>
)

export default LvGCs;