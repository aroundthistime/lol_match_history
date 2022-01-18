import React from "react";
import constants from "../../../constants/constants";
import { UnrankedTier } from "../../../types/Tier/Tier";
import UserTier from "../UserTier";

const UnrankedTierInfos = ({ tier }: { tier: UnrankedTier }): JSX.Element => {
    return (
        <>
            <UserTier.Text className="tier-rank" text={constants.korean.tiers[tier.tier]} />
            <UserTier.Text text="배치고사 진행중" />
        </>
    )
}

export default UnrankedTierInfos;