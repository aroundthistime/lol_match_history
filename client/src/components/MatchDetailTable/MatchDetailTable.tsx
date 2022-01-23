import React from "react";
import { Link } from "react-router-dom";
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
    "챔피언": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "스펠": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "소환사명": {
        mobile: false,
        tablet: true,
        desktop: true
    },
    "KDA": {
        mobile: false,
        tablet: true,
        desktop: true
    },
    "소환사명(KDA)": {
        mobile: true,
        tablet: false,
        desktop: false
    },
    "킬관여": {
        mobile: false,
        tablet: false,
        desktop: true
    },
    "룬": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "아이템": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "LV/G/CS": {
        mobile: false,
        tablet: false,
        desktop: true
    },
    "입힌 피해량": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "받은 피해량": {
        mobile: false,
        tablet: true,
        desktop: true
    },
    "시야": {
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
                {Object.keys(COLUMN_NAMES).map((columnName: string): JSX.Element => (
                    <td
                        className={"match-detail-table__header " + getClassNameByPlatformWhetherDisplayObject(COLUMN_NAMES[columnName])}
                        key={columnName}
                    >
                        {columnName}
                    </td>
                ))}
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
                    "justify-content": "center",
                    "flex-direction": "row-reverse",
                    "column-gap": "3px",
                    "margin-top": "5px"
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
                style={{ "flex-direction": "column", "align-items": "center" }}
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
                <span className="team-summary__match-result text--bold">{team.win ? "승리" : "패배"}</span>
                <span>
                    <span className="mobile-hidden">킬/데스/어시스트</span>
                    <span className="tablet-hidden desktop-hidden">KDA</span>
                    {team.championKills}/{team.championDeaths}/{team.championAssists}
                </span>
                <span className="mobile-hidden">총 골드 : {team.totalGold}(G)</span>
                <ul className="team-summary__objectives">
                    <li className="team-summary__objective">
                        <BaronIcon
                            className="team-summary__objective-icon"
                        />
                        <span className="mobile-hidden">바론 : </span>{team.baronKills}
                    </li>
                    <li className="team-summary__objective">
                        <DragonIcon
                            className="team-summary__objective-icon"
                        />
                        <span className="mobile-hidden">드래곤 : </span>{team.dragonKills}
                    </li>
                    <li className="team-summary__objective">
                        <HeraldIcon
                            className="team-summary__objective-icon"
                        />
                        <span className="mobile-hidden">전령 : </span>{team.riftHeraldKills}
                    </li>
                    <li className="team-summary__objective">
                        타워 : {team.towerKills}
                    </li>
                    <li className="team-summary__objective">
                        억제기 : {team.inhibitorKills}
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