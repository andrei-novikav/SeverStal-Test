import {SortKeys} from "../types/propTypes";


export const ORDER_ASC = "asc"
export const ORDER_DESC = "desc"

export const FILTER_ALL = "all"
export const FILTER_ACTIVE = "active"
export const FILTER_INACTIVE = "inactive"

export const PROFILE_ID = "id"
export const PROFILE_PARENT_ID = "parentId"
export const PROFILE_IS_ACTIVE = "isActive"
export const PROFILE_BALANCE = "balance"
export const PROFILE_NAME = "name"
export const PROFILE_EMAIL = "email"
export const EXPAND = "expand"

export const headers: { key: SortKeys; label: string, isSortActive: boolean}[] = [
    { key: PROFILE_ID, label: "ID", isSortActive: false },
    { key: PROFILE_IS_ACTIVE, label: "Active", isSortActive: false },
    { key: PROFILE_BALANCE, label: "Balance", isSortActive: true },
    { key: PROFILE_NAME, label: "Name", isSortActive: false },
    { key: PROFILE_EMAIL, label: "Email", isSortActive: true },
];


