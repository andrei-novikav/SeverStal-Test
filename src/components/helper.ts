export type Profile = {
    id: number,
    parentId: number,
    isActive: boolean,
    balance: string,
    name: string,
    email: string,
}

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
    const sortedData = tableData
        .filter(el => {
            if (activeFilter === "all") return el
            if (activeFilter === "active")
                return el.isActive
            else return !(el.isActive)
        })
        .sort((current, next) => {
        return current[sortKey] > next[sortKey] ? 1 : -1;
    });
    if (reverse) {
        return sortedData
            .filter(el => {
                if (activeFilter === "all") return el
                if (activeFilter === "active")
                    return el.isActive
                else return !(el.isActive)
            })
            .reverse();
    }
    return sortedData;
}
