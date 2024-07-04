export interface MenuItem {
    id: number
    name: string
    description: string
    price: number
    discount?: number;
    recommended?: boolean
    imageUrl: string
    available?: boolean
    timeToPrepare?: number
    mostOrdered?: boolean
    itemType?: ItemType
    active?: boolean
}
export enum ItemType {
    VEG,
    CONTAINS_EGG,
    NON_VEG
}