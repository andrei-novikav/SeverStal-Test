import React, {MouseEventHandler} from "react";
import data from "../default.json";

type Data = typeof data;
type SortKeys = keyof Data[0];
type SortOrder = "ascn" | "desc";

const SortButton = ({
                        sortOrder,
                        columnKey,
                        sortKey,
                        onClick,
                    }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            onClick={onClick}
            className={`${
                sortKey === columnKey && sortOrder === "desc"
                    ? "sort-button sort-reverse"
                    : "sort-button"
            }`}
        >
            ▲
        </button>
    );
}
export default SortButton
