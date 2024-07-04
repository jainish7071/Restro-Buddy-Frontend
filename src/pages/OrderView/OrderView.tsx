import React, { useState } from "react";
import { OrderViewProps } from "./OrderView.types";
import { OrderItemModel, OrderModel, OrderType } from "../../common/model/OrderModel";
import { ItemType } from "../../common/model/MenuItemModel";

const OrderView = (props: React.PropsWithChildren<OrderViewProps>) => {
  const dummyOrder: OrderModel = {
    id: 1,
    tableId: "9",
    paymentId: "paykefakjefjhasd",
    orderTime: new Date("06-12-2024"),
    estimatedTime: 12,
    deliveredTime: new Date(),
    totalPrice: 400,
    discountedPrice: 340,
    orderStatus: OrderType.DELIVERED,
    items: [
      {
        id: 1,
        item: {
          id: 2,
          name: "Burger",
          description: "Description 2",
          price: 20,
          discount: 10,
          imageUrl: "image_url",
          timeToPrepare: 10,
          itemType: ItemType.CONTAINS_EGG,
          active: true,
          available: true,
          recommended: false,
        },
        count: 2,
      },
      {
        id: 2,
        item: {
          id: 3,
          name: "Pizza",
          description: "Description 1",
          price: 15,
          discount: 0,
          imageUrl: "image_url_pizza",
          timeToPrepare: 15,
          itemType: ItemType.NON_VEG,
          active: true,
          available: true,
          recommended: true,
        },
        count: 3,
      },
      {
        id: 3,
        item: {
          id: 4,
          name: "Sandwich",
          description: "Description 3",
          price: 10,
          discount: 0,
          imageUrl: "image_url_sandwich",
          timeToPrepare: 8,
          itemType: ItemType.VEG,
          active: true,
          available: false,
          recommended: false,
        },
        count: 1,
      },
    ],
  };

  const [order] = useState<OrderModel>(dummyOrder);

  return (
    <div>
      {order && (
        <div className="m-2">
          <div>Order Placed On Time : {order.orderTime.toUTCString()}</div>
          <div>Table No : {order.tableId}</div>
          <div>Estimated time : {order.estimatedTime}</div>
          <div>Delivered Time : {order.deliveredTime.toUTCString()}</div>
          <div>Payment Time : {order.paymentId}</div>
          <div>Total Price : {order.totalPrice}</div>
          <div>Discount Price : {order.discountedPrice}</div>
          <div>OrderStatus : {order.orderStatus}</div>
          <div>
            {order.items.map((orderItem: OrderItemModel) => {
              return (
                <div className="border border-black my-2" key={orderItem.item.id}>
                  <div>Item Name : {orderItem.item.name}</div>
                  <div>Item Description : {orderItem.item.description}</div>
                  <div>Item Count : {orderItem.count}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderView;
