import React from "react";

const TIER_TRANSLATOR: { [key: string]: any } = {
    "UNRANKED": "언랭",
    "IRON": "아이언",
    "BRONZE": "브론즈",
    "SILVER": "실버",
    "GOLD": "골드",
    "PLATINUM": "플래티넘",
    "DIAMOND": "다이아몬드",
    "MASTER": "마스터",
    "GRANDMASTER": "그랜드마스터",
    "CHALLENGER": "챌린저"
}

const UserTier = (
    { isSolo, tier, tierImage, rank, leaguePoints, wins, losses }
        : { isSolo: boolean, tier: string, tierImage: string, rank?: string, leaguePoints?: number, wins?: number, losses?: number }
): JSX.Element => {
    const roundTo2Decimal = (number: number) => {
        let temp = number * 100;
        temp = Math.round(temp);
        return temp / 100;
    }
    const getWinRate = (wins: number, losses: number) => {
        const winRate = wins / (wins + losses) * 100;
        return roundTo2Decimal(winRate);
    }
    return (
        <div className="user-tier">
            <img className="tier__tier-image no-drag" src={tierImage} alt={tier} />
            <div className="tier__infos">
                <p className="tier__info queue-type"><span>리그 : </span>{isSolo ? "솔로랭크 5x5" : "자유랭크 5x5"}</p>
                {tier === "UNRANKED" ? (
                    <p className="tier__info tier-rank">{TIER_TRANSLATOR[tier]}</p>
                ) : (
                    <p className="tier__info tier-rank"><span>티어 : </span>{TIER_TRANSLATOR[tier]} {rank} {leaguePoints}점</p>
                )}
                {(wins !== undefined && losses !== undefined) ? (
                    <p className="tier__info">{wins + losses}전 {wins}승 {losses}패 ({getWinRate(wins, losses)}%)</p>
                ) : (
                    <p className="tier__info">배치고사 진행중</p>
                )}
            </div>
        </div>
    )

}


export default UserTier;