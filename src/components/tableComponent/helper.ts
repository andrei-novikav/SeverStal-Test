import { Profile, GroupProfiles, SortKeys } from "../../types/propTypes";
import {FILTER_ALL, FILTER_ACTIVE} from "../../constants/constants";

export const groupData = (data: GroupProfiles, parentId: number):Profile[] => (
    data
        .filter(element => element.parentId === parentId)
        .map(element => ({
            ...element,
            children: groupData(data, element.id)
        }))
);

export const sortData = ({
                                   tableData,
                                   sortKey,
                                   reverse,
                                   activeFilter,
                               }: {
    tableData:GroupProfiles;
    sortKey: SortKeys;
    reverse: boolean;
    activeFilter: string;
}) => {
    if (!sortKey) return tableData;
    const filteredData = tableData
        .filter(el => {
            if (activeFilter === FILTER_ALL) return el
            if (activeFilter === FILTER_ACTIVE)
                return el.isActive
            else return !(el.isActive)
        })
    const sortedData = filteredData
        .sort((current, next) => {
                if (current[sortKey] > next[sortKey]) {
                    return reverse ? 1 : -1
                }
                if (current[sortKey] < next[sortKey]) {
                    return reverse ? -1 : 1;
                }
                return 0
        }
        // Out of respect for IE explorer
    );
    return sortedData;
}
