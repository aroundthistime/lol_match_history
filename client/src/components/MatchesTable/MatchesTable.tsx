import React from "react";
import { EndedMatch } from "../../types/Match/Match";
import { PlatformWhetherDisplay } from "../../types/PlatformWhetherDisplay";
import { getClassNameByPlatformWhetherDisplayObject } from "../../utils/viewHandlers";
import Table from "../Table/Table";
import MatchRow from "./MatchRow/MatchRow";

type ColumnNameObject = { [key: string]: PlatformWhetherDisplay }

const COLUMN_NAMES: ColumnNameObject = {
    "승": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "챔피언": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "모드": {
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
    "팀": {
        mobile: false,
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
    "시간": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    " ": { //더보기는 공간 문제로 header text 생략
        mobile: true,
        tablet: true,
        desktop: true
    }
}

const MatchesTable = ({ matches }: { matches: EndedMatch[] }): JSX.Element => {
    return (
        <Table className="matches-table">
            <Table.Header>
                {Object.keys(COLUMN_NAMES).map((columnName: string): JSX.Element => (
                    <td
                        className={"matches-table__header " + getClassNameByPlatformWhetherDisplayObject(COLUMN_NAMES[columnName])}
                        key={columnName}
                    >
                        {columnName}
                    </td>
                ))}
            </Table.Header>
            <Table.Body>
                <MatchesTable.Matches matches={matches} />
            </Table.Body>
        </Table>
    )
}

MatchesTable.Matches = ({ matches }: { matches: EndedMatch[] }): JSX.Element => {
    if (matches.length > 0) {
        return (
            <>
                {matches.map((match: EndedMatch): JSX.Element => {
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