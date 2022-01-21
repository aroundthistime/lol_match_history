import React from "react";
import { Match } from "../../../types/Match/Match";
import Table from "../../Table/Table";

const MatchRow = ({ match }: { match: Match }): JSX.Element =>
(
    <Table.Row>
        <MatchRow.Cell><div></div></MatchRow.Cell>
    </Table.Row>
)


MatchRow.Cell = ({ children, className = "" }: { children: React.ReactNode, className?: string }): JSX.Element => (
    <Table.Cell className={"matche-table__cell " + className}>

    </Table.Cell>
)

export default MatchRow;