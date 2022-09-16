import React, {useState} from "react";
import {Profile} from "../../types/propTypes";

const TableRow = ({person}:{person: Profile}) => {
    const [isExpand, setExpand] = useState<boolean>(false);
    return (
        <React.Fragment>
                <tr onClick={() => setExpand(!isExpand)}>
                    <td>{person.id}</td>
                    <td>{person.parentId}</td>
                    <td>{person.isActive ? "Active" : "Inactive"}</td>
                    <td>{person.balance}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                </tr>
                {isExpand && <tr>
                        <td colSpan={6}>
                            <section className="infoRow">
                                <p>
                                    {`User ${person.name} is an ${person.isActive ? "Active" : "Inactive"} 
                                    user with a balance of ${person.balance}. You can contact him via email: ${person.email}`}
                                </p>
                            </section>
                        </td>
                </tr>
                }
        </React.Fragment>
    );
}
export const MemoizedTableRow = React.memo(TableRow)
