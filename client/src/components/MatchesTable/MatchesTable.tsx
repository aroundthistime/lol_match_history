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
    "소환사주문",
    "룬",
    "팀",
    "아이템",
    "LV/G/CS",
    "플레이시간(게임Duration, 게임으로부터 지금까지의 시간 격차)",
    "와드",
    "더보기",
]

const MatchesTable = ({ matches }: { matches: Match[] }): JSX.Element => {
    return (
        <Table className="matches-table">
            <Table.Header>
                {COLUMN_NAMES.map((columnName: string): JSX.Element => (
                    <td className="matches-table__header">{columnName}</td>
                ))}
            </Table.Header>
            <Table.Body>
                <MatchesTable.Matches matches={matches} />
            </Table.Body>
        </Table>
    )
}

MatchesTable.Matches = ({ matches }: { matches: Match[] }): JSX.Element => {
    // const matchesWithSearchTargetExtracted = 
    if (matches.length > 0) {
        return (
            <>
                {matches.map((match: Match): JSX.Element => {
                    // const searchTargetPlayer = match.participants.find(participant => participant.isSearchTarget);
                    // const searchTargetPlayerWithGameResult = {
                    //     ...searchTargetPlayer,
                    //     win : playerHasWon(searchTargetPlayer, match.blueTeam, match.redTeam)
                    // }
                    return (
                        <MatchRow
                            match={match}
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