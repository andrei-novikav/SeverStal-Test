import React, {useState} from "react";
import SortableTable from "../components/SortableTable";
import data from "../default.json";
import ButtonGroup from "../components/ButtonGroup";
import {
    FILTER_ACTIVE,
    FILTER_ALL,
    FILTER_INACTIVE, PROFILE_BALANCE, PROFILE_EMAIL,
    PROFILE_ID,
    PROFILE_IS_ACTIVE, PROFILE_NAME,
    PROFILE_PARENT_ID
} from "../constants/constants";

type Data = typeof data;
type SortKeys = keyof Data[0];

const ProfileTableScreen = () => {
    const [activeFilter, setActiveFilter] = useState<string>(FILTER_ALL)

    const menuItems = [
        {
            label: "All",
            value: FILTER_ALL
        },
        {
            label: "Active",
            value: FILTER_ACTIVE,
        },
        {
            label: "Inactive",
            value: FILTER_INACTIVE
        },
    ];

    const headers: { key: SortKeys; label: string, isSortActive: boolean}[] = [
        { key: PROFILE_ID, label: "ID", isSortActive: false },
        { key: PROFILE_PARENT_ID, label: "Parent ID", isSortActive: false },
        { key: PROFILE_IS_ACTIVE, label: "Active", isSortActive: false },
        { key: PROFILE_BALANCE, label: "Balance", isSortActive: true },
        { key: PROFILE_NAME, label: "Name", isSortActive: false },
        { key: PROFILE_EMAIL, label: "Email", isSortActive: true },
    ];

    return (
        <div>
            <ButtonGroup
                setActiveFilter={setActiveFilter}
                activeFilter={activeFilter}
                menuItems={menuItems}
            />
            <SortableTable
                data={data}
                activeFilter={activeFilter}
                headers={headers}
            />
        </div>
    )
}
export default ProfileTableScreen
