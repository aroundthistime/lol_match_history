import React from "react";
import { Match } from "../../types/Match/Match";
import Table from "../Table/Table";
import MatchRow from "./MatchRow/MatchRow";

const COLUMN_NAMES: string[] = [
    "승",
    "챔피언",
    "모드",
    "KDA",
    "킬관여",
    "스펠",
    "룬",
    "팀",
    "아이템",
    "LV/G/CS",
    "시간",
    "시야",
    "더보기",
]

const MatchesTable = ({ matches }: { matches: Match[] }): JSX.Element => {
    return (
        <Table className="matches-table">
            <Table.Header>
                {COLUMN_NAMES.map((columnName: string): JSX.Element => (
                    <Table.Cell className="matches-table__header" key={columnName}>
                        {columnName}
                    </Table.Cell>
                ))}
            </Table.Header>
            <Table.Body>
                <MatchesTable.Matches matches={matches} />
            </Table.Body>
        </Table>
    )
}

MatchesTable.Matches = ({ matches }: { matches: Match[] }): JSX.Element => {
    if (matches.length > 0) {
        return (
            <>
                {matches.map((match: Match): JSX.Element => {
                    return (
                        <MatchRow
                            match={match}
                            key={match.id}
                        />
                    )
                })}
            </>
        )
    } else {
        return (
            <Table.Empty
                className="matches-table__empty-body"
                text="최근 전적이 없습니다."
            />
        )

    }
}

export default MatchesTable;