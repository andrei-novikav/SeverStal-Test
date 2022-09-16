import {Profile} from "../../types/propTypes";

export const sortData = ({
                                   tableData,
                                   sortKey,
                                   reverse,
                                   activeFilter,
                               }: {
    tableData: Profile[];
    sortKey: keyof Profile;
    reverse: boolean;
    activeFilter: string;
}) => {
    if (!sortKey) return tableData;
    const filteredData = tableData
        .filter(el => {
            if (activeFilter === "all") return el
            if (activeFilter === "active")
                return el.isActive
            else return !(el.isActive)
        })
    const sortedData = filteredData
        .sort((current, next) => {
        return current[sortKey] > next[sortKey] ? 1 : -1;
    });
    if (reverse) {
        return filteredData
            .reverse();
    }
    return sortedData;
}
