import React from "react";
import { Item } from "../../../types/Item/Item";
import { StyleObject } from "../../../types/StyleObject";
import ItemImage from "../ItemImage";

const PlayerItems = (
    { items, className = "", style = {} }
        : { items: (Item | null)[], className?: string, style?: StyleObject }
): JSX.Element => (
    <div className={"player__items " + className} style={{ ...style }}>
        {items.map((item, index) => (
            <ItemImage
                item={item}
                className="player__item icon--small"
                key={index}
            />
        ))}
    </div>
)

export default PlayerItems;