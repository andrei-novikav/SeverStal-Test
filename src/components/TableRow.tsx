import React, {useState} from "react";
import {Profile} from "./helper";

const TableRow = ({person}:{person: Profile}) => {
    const [isExpand, setExpand] = useState<boolean>(false);
    return (
        <React.Fragment>
                <tr key={person.id} onClick={() => setExpand(!isExpand)}>
                    <td>{person.id}</td>
                    <td>{person.parentId}</td>
                    <td>{person.isActive ? "Active" : "Inactive"}</td>
                    <td>{person.balance}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                </tr>
                {isExpand && <tr>
                        <td colSpan={6}>
                            <div className="infoRow">
                                <p>
                                    {`User ${person.name} is an ${person.isActive ? "Active" : "Inactive"} 
                                    user with a balance of ${person.balance}. You can contact him via email: ${person.email}`}
                                </p>
                            </div>
                        </td>
                </tr>
                }
        </React.Fragment>
    );
}
export default TableRow
