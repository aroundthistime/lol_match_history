import React from "react";
import { Item } from "../../types/Item/Item";
import { StyleObject } from "../../types/StyleObject";
import EmptyBlock from "../EmptyBlock/EmptyBlock";

const ItemImage = (
    { item, className = "", style = {} }
        : { item: Item | null, className?: string, style?: StyleObject }
): JSX.Element => {
    if (item === null) {
        return (
            <EmptyBlock
                className={"no-item item-image " + className}
                style={{ ...style }}
            />
        )
    } else {
        return (
            <img
                src={item.image}
                alt={item.name}
                className={`item-image ${item.isTrinket ? "item-trinket" : ""} ` + className}
                style={{ ...style }}
            />
        )
    }
}

export default ItemImage;