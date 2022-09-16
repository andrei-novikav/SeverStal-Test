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
    return (
        <button
            className={`${
                sortKey === columnKey && sortOrder === ORDER_DESC
                    ? "sort-button sort-reverse"
                    : "sort-button"
            }`}
        >
            ▲
        </button>
    );
}
export default SortButton
