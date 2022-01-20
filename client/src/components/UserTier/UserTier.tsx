import React from "react";
import constants from "../../constants/constants";
import { StyleObject } from "../../types/StyleObject";
import { Tier } from "../../types/Tier/Tier";
import { TierTypeEng } from "../../types/Tier/TierType";
import { roundTo2Decimal } from "../../utils/math";


const UserTier = (
    { queueType, tier }
        : { queueType: string, tier: Tier }
): JSX.Element => {
    const getWinRate = (wins: number, losses: number): number => {
        const winRate: number = wins / (wins + losses) * 100;
        return roundTo2Decimal(winRate);
    }
    return (
        <div className="user-tier">
            <UserTier.TierImage src={tier.tierImage} alt={tier.tier} />
            <div className="tier__infos">
                <UserTier.Text className="queue-type" text={queueType} />
                {tier.tier === "UNRANKED" ? (
                    <UserTier.Text className="tier-rank" text={constants.korean.tiers[tier.tier as TierTypeEng]} style={{ fontWeight: "bold" }} />
                ) : (
                    <UserTier.Text className="tier-rank" text={`${constants.korean.tiers[tier.tier as TierTypeEng]} ${tier.rank} ${tier.leaguePoints}점`} style={{ fontWeight: "bold" }} />

                )}
                {(tier.wins === undefined || tier.losses === undefined) ? (
                    <UserTier.Text text="배치고사 진행중" />
                ) : (
                    <UserTier.Text text={`${tier.wins + tier.losses}전 ${tier.wins}승 ${tier.losses}패 (${getWinRate(tier.wins, tier.losses)}%)`} />
                )}
            </div>
        </div>
    )
}

UserTier.TierImage = ({ src, alt }: { src: string, alt: string }): JSX.Element => (
    <img className="tier__tier-image no-drag" src={src} alt={alt} />
)

UserTier.Text = (
    { className = "", text, style = {} }
        : { className?: string | undefined, text: string, style?: StyleObject }
): JSX.Element => (
    <p className={"tier__info " + className} style={{ ...style }}>{text}</p>
)

export default UserTier;