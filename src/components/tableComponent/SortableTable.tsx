import { useState, useMemo } from "react";
import SortButton from "./SortButton";
import { MemoizedTableRow } from "./TableRow";

import { sortData } from "./helper";

import {
    ORDER_ASC,
    ORDER_DESC,
    PROFILE_BALANCE
} from "../../constants/constants";

import {GroupProfiles, SortKeys} from "../../types/propTypes";

const SortableTable = ({data, activeFilter, headers, tableStyle}
                           :{
                                data: GroupProfiles,
                                activeFilter: string,
                                headers: { key: SortKeys; label: string, isSortActive: boolean}[]
                                tableStyle: string, }) => {
    const [sortKey, setSortKey] = useState<SortKeys>(PROFILE_BALANCE);
    const [sortOrder, setSortOrder] = useState<string>(ORDER_ASC);

    const sortedData = useMemo(
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
        <table className={tableStyle}>
            <thead>
                <tr className={"tableRow"}>
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
            {sortedData.map((person) => <MemoizedTableRow key={person.id} person={person}/>)}
            </tbody>
        </table>
    );
}

export default SortableTable;
