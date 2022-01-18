import React from "react";
import constants from "../../../constants/constants";
import { Tier } from "../../../types/Tier/Tier";
import { roundTo2Decimal } from "../../../utils/math";
import UserTier from "../UserTier";

const RankedTierInfos = ({ tier }: { tier: Tier}): JSX.Element => {
    const getWinRate = (wins: number, losses: number): number => {
        const winRate = wins / (wins + losses) * 100;
        return roundTo2Decimal(winRate);
    }
    return (
        <>
            <UserTier.Text className="tier-rank" text={`${constants.korean.tiers[tier.tier]} ${tier.rank} ${tier.leaguePoints}점`} />
            <UserTier.Text text={`${tier.wins + tier.losses}전 ${tier.wins}승 ${tier.losses}패 (${getWinRate(tier.wins, tier.losses)}%)`} />
        </>
    )
}

export default RankedTierInfos;