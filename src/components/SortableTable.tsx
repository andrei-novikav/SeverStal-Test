import { useCallback, useState } from "react";
import FilterButtons from "./FilterButtons";
import SortButton from "./SortButton";
import TableRow from "./TableRow";
import {sortData} from "./helper";
import data from "../default.json";

type Data = typeof data;
type SortKeys = keyof Data[0];
type SortOrder = "ascn" | "desc";

const SortableTable = ({data}:{data: Data}) => {
    const [sortKey, setSortKey] = useState<SortKeys>("balance");
    const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
    const [activeFilter, setActiveFilter] = useState<string>("all")

    const menuItems = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Active",
            value: "active"
        },
        {
            label: "Inactive",
            value: "inactive"
        },
    ];

    const headers: { key: SortKeys; label: string, isSortActive: boolean}[] = [
        { key: "id", label: "ID", isSortActive: false },
        { key: "parentId", label: "Parent ID", isSortActive: false },
        { key: "isActive", label: "Active", isSortActive: false },
        { key: "balance", label: "Balance", isSortActive: true },
        { key: "name", label: "Name", isSortActive: false },
        { key: "email", label: "Email", isSortActive: true },
    ];

    const sortedData = useCallback(
        () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc", activeFilter: activeFilter }),
        [data, sortKey, sortOrder, activeFilter]
    );

    const changeSort = (key: SortKeys) => {
        setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
        setSortKey(key);
    }

    return (
        <div>
            <FilterButtons
                setActiveFilter={setActiveFilter}
                activeFilter={activeFilter}
                menuItems={menuItems}
            />
            <table>
                <thead>
                <tr>
                    {headers.map((row) => {
                        return (
                            <td key={row.key}>
                                {row.label}{" "}
                                {row.isSortActive && <SortButton
                                    columnKey={row.key}
                                    onClick={() => changeSort(row.key)}
                                    {...{
                                        sortOrder,
                                        sortKey,
                                    }}
                                />}
                            </td>
                        );
                    })}
                </tr>
                </thead>

                <tbody>
                {sortedData().map((person) => <TableRow person={person}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default SortableTable;
