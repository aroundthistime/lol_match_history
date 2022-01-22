import React from "react";
import { Match } from "../../types/Match/Match";
import { PlatformWhetherDisplay } from "../../types/PlatformWhetherDisplay";
import { CurrentMatchTeam, EndedMatchTeam } from "../../types/Team/Team";
import { getClassNameByPlatformWhetherDisplayObject } from "../../utils/viewHandlers";
import BaronIcon from "../Icons/Objectives/Baron/Baron";
import Table from "../Table/Table";

type ColumnNameObject = { [key: string]: PlatformWhetherDisplay }

const COLUMN_NAMES: ColumnNameObject = {
    "챔피언": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "KDA": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "킬관여": {
        mobile: false,
        tablet: false,
        desktop: true
    },
    "스펠": {
        mobile: true,
        tablet: true,
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
    }
}

const MatchDetailTable = ({ match }: { match: Match }): JSX.Element => {
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
                    team={{
                        ...match.blueTeam,
                        championDeaths: match.redTeam.championKills
                    }}
                />
            </Table.Body>
        </Table>
    )
}

MatchDetailTable.Team = ({ team }: { team: EndedMatchTeam }): JSX.Element => (
    <MatchDetailTable.TeamSummary team={team} />
)

MatchDetailTable.TeamSummary = ({ team }: { team: EndedMatchTeam }): JSX.Element => (
    <tr>
        <td colSpan={100} className="match-detail-table__summary">
            <BaronIcon />
            <TeamKDASummary
                kills={team.championKills}
                deaths={team.championDeaths}
                assists={team.championAssists}
            />
        </td>
    </tr>
)

const TeamKDASummary = ({ kills, deaths, assists }: { kills: number, deaths: number, assists: number }): JSX.Element => (
    <div className="">
        <span>킬/데스/어시스트 : {kills}/{deaths}/{assists}</span>
    </div>
)

export default MatchDetailTable;