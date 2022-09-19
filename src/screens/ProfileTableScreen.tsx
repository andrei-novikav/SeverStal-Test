import React, {useEffect, useState} from "react";
import SortableTable from "../components/tableComponent/SortableTable";
import data from "../default.json";
import ButtonGroup from "../components/ButtonGroup";
import {
    FILTER_ACTIVE,
    FILTER_ALL,
    FILTER_INACTIVE
} from "../constants/constants";
import {headers} from "../constants/constants";
import {groupData} from "../components/tableComponent/helper";
import {GroupProfiles} from "../types/propTypes";

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

const ProfileTableScreen = () => {
    const [activeFilter, setActiveFilter] = useState<string>(FILTER_ALL)
    const [groupProfiles, setGroupProfile] = useState<GroupProfiles>(data);

    useEffect(() => {
        const groupedData = groupData(data, 0);
        //data grouped initially to reduce rendering operations in subsequent components
        setGroupProfile(groupedData);
    },[])

    return (
        <div>
            <ButtonGroup
                setActiveFilter={setActiveFilter}
                activeFilter={activeFilter}
                menuItems={menuItems}
            />
            <SortableTable
                data={groupProfiles}
                activeFilter={activeFilter}
                headers={headers}
                tableStyle={"rootTable"}
            />
        </div>
    )
}
export default ProfileTableScreen
