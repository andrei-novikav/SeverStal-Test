import React from "react";

import {ORDER_DESC} from "../../constants/constants";

import data from "../../default.json";

type Data = typeof data;
type SortKeys = keyof Data[0];

const SortButton = ({
                        sortOrder,
                        columnKey,
                        sortKey,
                    }: {
    sortOrder: string;
    columnKey: SortKeys;
    sortKey: SortKeys;
}) => {
    const isOrderDesc = sortKey === columnKey && sortOrder === ORDER_DESC
    return (
        <button
            className={`sort-button ${
                isOrderDesc && "sort-reverse"
            }`}
        >
            ▲
        </button>
    );
}
export default SortButton
