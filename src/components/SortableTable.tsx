import { useCallback, useState } from "react";
import SortButton from "./SortButton";
import TableRow from "./TableRow";

import {sortData} from "./helper";

import {
    ORDER_ASC,
    ORDER_DESC,
    PROFILE_BALANCE
} from "../constants/constants";

import data from "../default.json";

type Data = typeof data;
type SortKeys = keyof Data[0];

const SortableTable = ({data, activeFilter, headers}
                           :{
                               data: Data,
                               activeFilter: string,
                               headers: { key: SortKeys; label: string, isSortActive: boolean}[] }) => {
    const [sortKey, setSortKey] = useState<SortKeys>(PROFILE_BALANCE);
    const [sortOrder, setSortOrder] = useState<string>(ORDER_ASC);

    const sortedData = useCallback(
        () => sortData({
            tableData: data,
            sortKey,
            reverse: sortOrder === ORDER_DESC,
            activeFilter: activeFilter
        }),
        [data, sortKey, sortOrder, activeFilter]
    );

    const changeSort = (key: SortKeys) => {
        setSortOrder(sortOrder === ORDER_ASC ? ORDER_DESC : ORDER_ASC);
        setSortKey(key);
    }

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((row) => {
                        return (
                            <td key={row.key} onClick={() => row.isSortActive && changeSort(row.key)}>
                                {row.label}{" "}
                                {row.isSortActive && <SortButton
                                    columnKey={row.key}
                                    {...{sortOrder, sortKey}}
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
    );
}

export default SortableTable;
