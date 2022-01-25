import React from "react";
import i18n from "i18next";
import { Tiers } from "../../../types/Tier/Tier";
import UserTier from "../UserTier";

const UserTiers = ({ tiers, children }: { tiers: Tiers, children?: React.ReactNode }): JSX.Element => (
    <section className="tiers-container">
        <UserTier
            queueType={i18n.t('common.gameMode.solo') + " 5X5"}
            tier={tiers.solo}
        />
        <UserTier
            queueType={i18n.t('common.gameMode.flex') + " 5X5"}
            tier={tiers.team}
        />
        {children}
    </section>
)

export default UserTiers