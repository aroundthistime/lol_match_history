import React from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { EndedMatch } from "../../types/Match/Match";
import { PlatformWhetherDisplay } from "../../types/PlatformWhetherDisplay";
import { EndedMatchPlayer } from "../../types/Player/Player";
import { StyleObject } from "../../types/StyleObject";
import { EndedMatchTeam } from "../../types/Team/Team";
import { getPathToHistories } from "../../utils/getPaths";
import { getDamageDealtMaxRange, getDamageTakenMaxRange } from "../../utils/matchHandlers";
import { getClassNameByPlatformWhetherDisplayObject } from "../../utils/viewHandlers";
import ChampionImage from "../ChampionImage/ChampionImage";
import GageBar from "../GageBar/GageBar";
import BaronIcon from "../Icons/Objectives/Baron/Baron";
import DragonIcon from "../Icons/Objectives/Dragon/Dragon";
import HeraldIcon from "../Icons/Objectives/Herald/Herald";
import PlayerItems from "../ItemImage/PlayerItems/PlayerItems";
import LvGCs from "../LVGCS/LvGCs";
import PlayerPerks from "../PerkImage/PlayerPerks/PlayerPerks";
import PlayerKDA from "../PlayerKDA/PlayerKDA";
import PlayerSummonerSpells from "../SummonerSpellImage/PlayerSummonerSpells/PlayerSummonerSpells";
import Table from "../Table/Table";
import VisionScore from "../VisionScore/VisionScore";

type ColumnNameObject = { [key: string]: PlatformWhetherDisplay }

const COLUMN_NAMES: ColumnNameObject = {
    "champion": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "summonerSpell": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "username": {
        mobile: false,
        tablet: true,
        desktop: true
    },
    "kda": {
        mobile: false,
        tablet: true,
        desktop: true
    },
    "username+kda": {
        mobile: true,
        tablet: false,
        desktop: false
    },
    "killParticipation": {
        mobile: false,
        tablet: false,
        desktop: true
    },
    "rune": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "item": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "LV/G/CS": {
        mobile: false,
        tablet: false,
        desktop: true
    },
    "damageDealt": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "damageTaken": {
        mobile: false,
        tablet: true,
        desktop: true
    },
    "vision": {
        mobile: false,
        tablet: true,
        desktop: true
    }
}

const MatchDetailTable = ({ match }: { match: EndedMatch }): JSX.Element => {
    const totalPlayers = [...match.blueTeam.players, ...match.redTeam.players]
    const damageDealtMaxRange = getDamageDealtMaxRange(totalPlayers);
    const damageTakenMaxRange = getDamageTakenMaxRange(totalPlayers);
    return (
        <Table className="match-detail-table">
            <Table.Header>
                <MatchDetailTable.Header />
            </Table.Header>
            <Table.Body>
                <MatchDetailTable.Team
                    team={match.blueTeam}
                    teamColor="blue"
                    damageDealtMaxRange={damageDealtMaxRange}
                    damageTakenMaxRange={damageTakenMaxRange}
                    searchTargetPlayerId={match.searchTargetPlayer.id}
                />
                <MatchDetailTable.Team
                    team={match.redTeam}
                    teamColor="red"
                    damageDealtMaxRange={damageDealtMaxRange}
                    damageTakenMaxRange={damageTakenMaxRange}
                    searchTargetPlayerId={match.searchTargetPlayer.id}
                />
            </Table.Body>
        </Table>
    )
}

MatchDetailTable.Header = (): JSX.Element => (
    <>
        {Object.keys(COLUMN_NAMES).map((columnName: string): JSX.Element => (
            <td
                className={"match-detail-table__header " + getClassNameByPlatformWhetherDisplayObject(COLUMN_NAMES[columnName])}
                key={columnName}
            >
                {i18n.t(`table.${columnName}`)}
            </td>
        ))}
    </>
)

MatchDetailTable.Team = (
    { team, teamColor, damageDealtMaxRange, damageTakenMaxRange, searchTargetPlayerId }
        : { team: EndedMatchTeam, teamColor: string, damageDealtMaxRange: number, damageTakenMaxRange: number, searchTargetPlayerId: string }
): JSX.Element => (
    <>
        {teamColor === "blue" ? (
            <>
                <MatchDetailTable.Players
                    players={team.players}
                    teamColor="red"
                    damageDealtMaxRange={damageDealtMaxRange}
                    damageTakenMaxRange={damageTakenMaxRange}
                    searchTargetPlayerId={searchTargetPlayerId}
                />
                < MatchDetailTable.TeamSummary team={team} />
            </>
        ) : (
            <>
                < MatchDetailTable.TeamSummary team={team} />
                <MatchDetailTable.Players
                    players={team.players}
                    teamColor="blue"
                    damageDealtMaxRange={damageDealtMaxRange}
                    damageTakenMaxRange={damageTakenMaxRange}
                    searchTargetPlayerId={searchTargetPlayerId}
                />
            </>
        )}
    </>
)

MatchDetailTable.Players = (
    { players, teamColor, damageDealtMaxRange, damageTakenMaxRange, searchTargetPlayerId }
        : { players: EndedMatchPlayer[], teamColor: string, damageDealtMaxRange: number, damageTakenMaxRange: number, searchTargetPlayerId: string }
): JSX.Element => (
    <>
        {
            players.map(player => (
                <MatchDetailTable.Player
                    player={player}
                    teamColor={teamColor}
                    damageDealtMaxRange={damageDealtMaxRange}
                    damageTakenMaxRange={damageTakenMaxRange}
                    isSearchTargetPlayer={player.id === searchTargetPlayerId}
                    key={player.id}
                />
            ))
        }
    </>
)


MatchDetailTable.Player = (
    { player, teamColor, damageDealtMaxRange, damageTakenMaxRange, isSearchTargetPlayer }
        : { player: EndedMatchPlayer, teamColor: string, damageDealtMaxRange: number, damageTakenMaxRange: number, isSearchTargetPlayer: boolean }
): JSX.Element => (
    <tr className={`match-detail-table__player match-detail-table__player--${teamColor} ${isSearchTargetPlayer ? "match-detail-table__search-target" : ""}`}>
        <td>
            <ChampionImage
                className="player__champion-image"
                champion={player.champion}
            />
        </td>
        <td>
            <PlayerSummonerSpells
                className="match-detail-table__summoner-spell"
                summonerSpells={player.summonerSpells}
            />
        </td>
        <td className="text--bold mobile-hidden">
            <PlayerNameWithLink name={player.name} />
        </td>
        <td className="mobile-hidden">
            <PlayerKDA
                kills={player.kills}
                deaths={player.deaths}
                assists={player.assists}
                kda={player.kda}
                className="kda--should-shorten"
            />
        </td>
        <td className="desktop-hidden tablet-hidden">
            <PlayerNameWithLink name={player.name} className="text--bold" />
            <PlayerKDA
                kills={player.kills}
                deaths={player.deaths}
                assists={player.assists}
                kda={player.kda}
                className="kda--should-shorten"
                style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "flexDirection": "row-reverse",
                    "columnGap": "3px",
                    "marginTop": "5px"
                }}
            />
        </td>
        <td className="mobile-hidden tablet-hidden">
            {player.killParticipation}%
        </td>
        <td>
            <PlayerPerks
                mainPerks={player.mainPerks}
                subPerks={player.subPerks}
                style={{ "flexDirection": "column", "alignItems": "center" }}
            />
        </td>
        <td>
            <PlayerItems
                items={player.items}
            />
        </td>
        <td className="mobile-hidden tablet-hidden">
            <LvGCs
                championLevel={player.championLevel}
                goldEarned={player.goldEarned}
                cs={player.cs}
            />
        </td>
        <td style={{ paddingRight: "5px", paddingLeft: "5px" }}>
            <span>{player.totalDamageDealt}</span>
            <GageBar
                max={damageDealtMaxRange}
                value={player.totalDamageDealt}
                className={"match-detail-table__gage-bar match-detail-table__damage-dealt"}
            />
        </td>
        <td className="mobile-hidden" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
            <span>{player.totalDamageTaken}</span>
            <GageBar
                max={damageTakenMaxRange}
                value={player.totalDamageTaken}
                className={"match-detail-table__gage-bar match-detail-table__damage-taken"}
            />
        </td>
        <td className="mobile-hidden">
            <VisionScore
                wardsPlaced={player.wardsPlaced}
                wardsKilled={player.wardsKilled}
                detectorWardsPlaced={player.detectorWardsPlaced}
                visionScore={player.visionScore}
            />
        </td>
    </tr>
)

MatchDetailTable.TeamSummary = ({ team }: { team: EndedMatchTeam }): JSX.Element => (
    <tr>
        <td colSpan={100} style={{ height: "100%", padding: 0 }}>
            <div className="match-detail-table__team-summary">
                <span className="team-summary__match-result text--bold">{team.win ? i18n.t("common.result.win.full") : i18n.t("common.result.lose.full")}</span>
                <span>
                    <span className="mobile-hidden">{i18n.t('table.kill')}/{i18n.t('table.death')}/{i18n.t('table.assist')} </span>
                    <span className="tablet-hidden desktop-hidden">KDA </span>
                    {team.championKills}/{team.championDeaths}/{team.championAssists}
                </span>
                <span className="mobile-hidden">{i18n.t('table.totalGold', { totalGold: team.totalGold })}</span>
                <ul className="team-summary__objectives">
                    <li className="team-summary__objective">
                        <BaronIcon
                            className="team-summary__objective-icon"
                        />
                        <span className="mobile-hidden">{i18n.t('table.objectives.baron')} : </span>{team.baronKills}
                    </li>
                    <li className="team-summary__objective">
                        <DragonIcon
                            className="team-summary__objective-icon"
                        />
                        <span className="mobile-hidden">{i18n.t('table.objectives.dragon')} : </span>{team.dragonKills}
                    </li>
                    <li className="team-summary__objective">
                        <HeraldIcon
                            className="team-summary__objective-icon"
                        />
                        <span className="mobile-hidden">{i18n.t('table.objectives.herald')} : </span>{team.riftHeraldKills}
                    </li>
                    <li className="team-summary__objective">
                        {i18n.t('table.objectives.tower')} : {team.towerKills}
                    </li>
                    <li className="team-summary__objective">
                        {i18n.t('table.objectives.inhibitor')} : {team.inhibitorKills}
                    </li>
                </ul>
            </div>
        </td>
    </tr>
)


const PlayerNameWithLink = (
    { name, className = "", style = {} }
        : { name: string, className?: string, style?: StyleObject }
): JSX.Element => (
    <Link
        to={getPathToHistories(name)}
        className={className}
        style={{ ...style }}
    >
        {name}
    </Link>
)

export default React.memo(MatchDetailTable);