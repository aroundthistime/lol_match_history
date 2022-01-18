import React from "react";
import { Tiers } from "../../../types/Tier/Tier";
import UserTier from "../UserTier";

const UserTiers = ({ tiers, children }: { tiers: Tiers, children?: React.ReactNode }): JSX.Element => (
    <div className="tiers-container">
        <UserTier
            queueType={"솔로랭크 5X5"}
            tier={tiers.solo}
        />
        <UserTier
            queueType={"자유랭크 5X5"}
            tier={tiers.team}
        />
        {children}
    </div>
)

export default UserTiers