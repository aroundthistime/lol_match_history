import React from "react";
import { StyleObject } from "../../types/StyleObject";

const EmptyBlock = ({ className = "", style = {} }: { className?: string, style?: StyleObject }): JSX.Element => (
    <div className={"empty-block " + className} style={{ ...style }} />
)

export default EmptyBlock;