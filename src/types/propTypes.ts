export type Profiles = Profile[]

export type Profile = {
    id: number,
    parentId: number,
    isActive: boolean,
    balance: string,
    name: string,
    email: string,
}

export type GroupProfile = {
    id: number,
    parentId: number,
    isActive: boolean,
    balance: string,
    name: string,
    email: string,
    children?: GroupProfiles
}
export type GroupProfiles = GroupProfile[]

export type SortKeys = keyof Profiles[0];
