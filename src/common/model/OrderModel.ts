import { MenuItem } from "./MenuItemModel"

export interface OrderModel {
    id: number,
    tableId: string,
    paymentId: string,
    orderTime: Date,
    estimatedTime: number,
    deliveredTime: Date,
    totalPrice: number,
    discountedPrice: number,
    orderStatus: OrderType,
    items: OrderItemModel[]
}

export interface OrderItemModel {
    id: number,
    item: MenuItem,
    count: number
}


export enum OrderType {
    PENDING = "PENDING",
    CANCELLED = "CANCELLED",
    DELIVERED = "DELIVERED"
}