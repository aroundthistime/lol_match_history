import React from "react";
import { StyleObject } from "../../types/StyleObject";

const Table = ({ children, className = "", style = {} }: { children: React.ReactNode, className?: string, style?: StyleObject }): JSX.Element => (
    <table className={className} style={{ ...style }}>
        {children}
    </table>
)

Table.Header = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <thead>
        <tr>
            {children}
        </tr>
    </thead>
)

Table.Body = ({ children }: { children: React.ReactElement }): JSX.Element => (
    <tbody>
        {children}
    </tbody>
)

Table.Row = ({ children, className = "" }: { children: React.ReactElement | React.ReactElement[], className?: string }): JSX.Element => (
    <tr className={className}>
        {children}
    </tr>
)

Table.Cell = ({ children, className = "", style = {} }: { children: React.ReactNode, className?: string, style?: StyleObject }): JSX.Element => (
    <td className={className} style={{ ...style }}>
        {children}
    </td>
)

Table.Empty = (
    { children, className = "", text = "", style = {} }
        : { children?: React.ReactNode, className?: string, text?: string, style?: StyleObject }
): JSX.Element => (
    <div className={"table__empty-body " + className} style={{ ...style }}>
        <p className="empty-body__text">{text}</p>
        {children}
    </div>
)


export default Table;