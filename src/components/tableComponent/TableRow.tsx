import React, {useState} from "react";
import {GroupProfile} from "../../types/propTypes";
import SortableTable from "./SortableTable";
import {FILTER_ALL, headers} from "../../constants/constants";

const TableRow = ({person}:{person: GroupProfile}) => {
    const [isExpand, setExpand] = useState<boolean>(false);
    return (
        <React.Fragment>
                <tr className={"tableRow"} onClick={() => setExpand(!isExpand)}>
                    <td>{person.id}</td>
                    <td>{person.isActive ? "Active" : "Inactive"}</td>
                    <td>{person.balance}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                </tr>
                {isExpand && person.children && person.children.some(el => el) && <tr>
                        <td colSpan={5} align={"right"}>
                                <SortableTable
                                    data={person.children} activeFilter={FILTER_ALL} headers={headers} tableStyle={"childTable"}/>
                        </td>
                </tr>
                }
        </React.Fragment>
    );
}
export const MemoizedTableRow = React.memo(TableRow)
