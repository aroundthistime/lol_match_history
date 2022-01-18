import React from "react";
import { createCheckers } from "ts-interface-checker";
import { Tier } from "../../types/Tier/Tier";
import TierTI from "../../types/Tier/Tier-ti";
import RankedTierInfos from "./TierInfos/RankedTierInfos";
import UnrankedTierInfos from "./TierInfos/UnrankedTierInfos";


const { RankedTier: RankedTierChecker } = createCheckers(TierTI);

const UserTier = (
    { queueType, tier }
        : { queueType: string, tier: Tier }
): JSX.Element => {
    const isRankedTier = (tier: Tier) => {
        return tier.tier === "UNRANKED"
        // try {
        //     RankedTierChecker.check(tier);
        //     return true
        // } catch (error) {
        //     return false
        // }
    }
    return (
        <div className="user-tier">
            <UserTier.TierImage src={tier.tierImage} alt={tier.tier} />
            <div className="tier__infos">
                <UserTier.Text className="queue-type" text={queueType} />
                {isRankedTier(tier) ? (
                    <RankedTierInfos tier={tier} />
                ) : (
                    <UnrankedTierInfos tier={tier} />
                )}
            </div>
        </div>
    )
}

UserTier.TierImage = ({ src, alt }: { src: string, alt: string }): JSX.Element => (
    <img className="tier__tier-image no-drag" src={src} alt={alt} />
)

UserTier.Text = (
    { className = "", text }
        : { className?: string | undefined, text: string }
): JSX.Element => (
    <p className={"tier__info " + className}>{text}</p>
)

export default UserTier;