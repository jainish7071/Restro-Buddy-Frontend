export interface MenuItemProps {
    item: Item
    onChange: Function
    count: number
}

export interface Item {
    id: number
    name: string
    description: string
    price: number
    discount?: number;
    isRecommended?: boolean
    imageUrl: string
    isAvailable?: boolean
    timeToPrepare?: number
    mostOrdered?: boolean
    itemType?: ItemType
    containsEgg?: boolean
}

export enum ItemType {
    VEG,
    CONTAINS_EGG,
    NON_VEG
}