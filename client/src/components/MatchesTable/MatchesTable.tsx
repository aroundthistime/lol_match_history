import React, { MouseEventHandler, useEffect, useState } from "react";
import { useMatches } from "../../queries/useMatches";
import { EndedMatch } from "../../types/Match/Match";
import { PlatformWhetherDisplay } from "../../types/PlatformWhetherDisplay";
import { getClassNameByPlatformWhetherDisplayObject } from "../../utils/viewHandlers";
import Table from "../Table/Table";
import MatchRow from "./MatchRow/MatchRow";
import fetchMoreImage from "../../assets/images/fetchingMore.gif";
import i18n from "i18next";

type ColumnNameObject = { [key: string]: PlatformWhetherDisplay }

const COLUMN_NAMES: ColumnNameObject = {
    "win": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "champion": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "mode": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "kda": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "killParticipation": {
        mobile: false,
        tablet: false,
        desktop: true
    },
    "summonerSpell": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "rune": {
        mobile: true,
        tablet: true,
        desktop: true
    },
    "team": {
        mobile: false,
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
    "time": {
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

const MatchesTable = (
    { matches: initialMatches, summonerPuuid, summonerId }
        : { matches: EndedMatch[], summonerPuuid: string, summonerId: string }
): JSX.Element => {
    const [matches, setMatches] = useState<EndedMatch[]>(initialMatches)
    const [page, setPage] = useState<number>(2);
    const { isLoading, data, refetch, isFetched } = useMatches(summonerPuuid, summonerId, page, false)

    useEffect(() => {
        if (isFetched) {
            if (data && data.length > 0) {
                setMatches([...matches, ...data])
                setPage(prev => prev + 1);
            } else {
                setPage(0)
            }
        }
    }, [data])

    const canRefetch = page !== 0 && !isLoading;
    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        if (page !== 0) {
            refetch();
        }
    }

    return (
        <Table className="matches-table">
            <Table.Header>
                <MatchesTable.Header />
            </Table.Header>
            <Table.Body>
                <MatchesTable.Matches matches={matches} />
                {canRefetch && (
                    <MatchesTable.FetchMore onClick={onClick} />
                )}
                {isLoading && (
                    <MatchesTable.Loader />
                )}
            </Table.Body>
        </Table>
    )
}

MatchesTable.Header = (): JSX.Element => (
    <>
        {Object.keys(COLUMN_NAMES).map((columnName: string): JSX.Element => (
            <td
                className={"matches-table__header " + getClassNameByPlatformWhetherDisplayObject(COLUMN_NAMES[columnName])}
                key={columnName}
            >
                {i18n.t(`table.${columnName}`)}
            </td>
        ))}
    </>
)

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
                text="최근 전적이 없습니다"
            />
        )

    }
}

MatchesTable.FetchMore = ({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }): JSX.Element => (
    <tr className="matches-table__footer">
        <td colSpan={100}>
            <div>
                <button
                    className="matches-table__fetch-more-btn"
                    onClick={onClick}
                >
                    {i18n.t('button.more')}
                </button>
            </div>

        </td>
    </tr>
)

MatchesTable.Loader = (): JSX.Element => (
    <tr className="matches-table__fetching-more">
        <td colSpan={100}>
            <div>
                <img
                    src={fetchMoreImage}
                    alt={"로딩중"}
                    className={"fetching-more__image"}
                />
            </div>
        </td>
    </tr>
)


export default React.memo(MatchesTable);