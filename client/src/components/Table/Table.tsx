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

Table.Body = ({ children }: { children: React.ReactElement | React.ReactElement[] }): JSX.Element => (
    <tbody>
        {children}
    </tbody>
)

Table.Empty = (
    { children, className = "", text = "", style = {} }
        : { children?: React.ReactNode, className?: string, text?: string, style?: StyleObject }
): JSX.Element => (
    <tr>
        <td colSpan={100}>
            <div className={"table__empty-body " + className} style={{ ...style }}>
                <p className="empty-body__text">{text}</p>
                {children}
            </div>
        </td>
    </tr>
)


export default Table;