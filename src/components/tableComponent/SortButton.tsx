import React from "react";

import {ORDER_DESC} from "../../constants/constants";
import {SortKeys} from "../../types/propTypes";

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
