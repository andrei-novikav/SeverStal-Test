import React from "react";
import SortableTable from "../components/SortableTable";
import data from "../default.json";

const ProfileTableScreen = () => {
    return (
        <SortableTable data={data}/>
    )
}
export default ProfileTableScreen
