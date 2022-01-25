import React from "react";
import i18n from "i18next";
import { StyleObject } from "../../types/StyleObject";
import { Tier } from "../../types/Tier/Tier";
import { roundTo2Decimal } from "../../utils/math";


const UserTier = (
    { queueType, tier }
        : { queueType: string, tier: Tier }
): JSX.Element => {
    const getWinRate = (wins: number, losses: number): number => {
        const winRate: number = wins / (wins + losses) * 100;
        return roundTo2Decimal(winRate);
    }
    const getRankedTierDetails = (): string => {
        return ` ${tier.rank} ${tier.leaguePoints}${i18n.t('common.points')}`;
    }
    const getTierDetailsText = (): string => {
        let tierDetailsText: string = i18n.t(`common.tier.${tier.tier}`)
        if (tier.tier !== "UNRANKED") {
            tierDetailsText += getRankedTierDetails();
        }
        return tierDetailsText
    }
    const getWinLoseStatisticsText = (): string => {
        if (tier.wins === undefined || tier.losses === undefined) {
            return i18n.t("common.tier.middleOfPlacement")
        } else {
            return i18n.t('common.result.winLoseStatisticsText', {
                totalGames: tier.wins + tier.losses,
                wins: tier.wins,
                losses: tier.losses,
                winRate: getWinRate(tier.wins, tier.losses)
            })
        }
    }
    return (
        <div className="user-tier">
            <UserTier.TierImage src={tier.tierImage} alt={tier.tier} />
            <div className="tier__infos">
                <UserTier.Text className="queue-type" text={queueType} />
                <UserTier.Text className="tier-rank" text={getTierDetailsText()} style={{ fontWeight: "bold" }} />
                <UserTier.Text text={getWinLoseStatisticsText()} />
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