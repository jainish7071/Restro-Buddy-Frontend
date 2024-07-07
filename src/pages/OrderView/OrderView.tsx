import React, { useEffect, useState } from "react";
import { OrderViewProps } from "./OrderView.types";
import { OrderModel, OrderType } from "../../common/model/OrderModel";
import { ItemType } from "../../common/model/MenuItemModel";
import { Card, Col, List, Row, Tag } from "antd";
import styles from "./OrderView.module.scss";
import { BaseService } from "../../Services/BaseService";
import { API_CONSTANT } from "../../common/constants/ApiConstants";

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

  useEffect(() => {
    fetchOrder();
    //eslint-disable-next-line
  }, []);

  const fetchOrder = async () => {
    const order = await BaseService.sendGetRequest(API_CONSTANT.FETCH_ORDER + "/3");
    setOrder(order);
  };

  const [order, setOrder] = useState<OrderModel>(dummyOrder);

  const getStatus = (orderStatus: OrderType) => {
    switch (orderStatus) {
      case OrderType.CANCELLED:
        return <Tag color="default">Cancelled</Tag>;
      case OrderType.DELIVERED:
        return <Tag color="green">Delivered</Tag>;
      case OrderType.PENDING:
        return <Tag color="yellow">Pending</Tag>;
      default:
        return <Tag>DEFAULT</Tag>;
    }
  };

  return (
    <div>
      {order && (
        <div className="container mt-4">
          <Card className={styles["order-card"]}>
            <Row className="mb-4">
              <Col xs={24} md={12}>
                <h3 className={styles["order-title"]}>Order #{order.id}</h3>
                <p>Table: {order.tableId}</p>
                <p>Order Time: {order.orderTime.toLocaleString()}</p>
              </Col>
              <Col xs={24} md={12} className={styles["text-right"]}>
                <h3>Status: {getStatus(order.orderStatus)}</h3>
                <p>Estimated Delivery: {order.estimatedTime} mins</p>
                <p>Delivered: {order.deliveredTime?.toLocaleString()}</p>
              </Col>
            </Row>
            <List
              itemLayout="horizontal"
              dataSource={order.items}
              renderItem={(item) => (
                <List.Item className={styles["list-item"]}>
                  <div className={styles["item-details"]}>
                    <img src={"/pizza.png"} alt={item.item.name} className={styles["item-image"]} />
                    <div className={styles["item-info"]}>
                      <div className={styles["item-name"]}>{item.item.name}</div>
                      <div>{item.item.description}</div>
                    </div>
                  </div>
                  <div>
                    <div className={styles["item-count"]}>Qty: {item.count}</div>
                    <div className={styles["item-price"]}>Price: ${item.item.price}</div>
                  </div>
                </List.Item>
              )}
            />
            <Row className="mt-4">
              <Col xs={24} md={12}>
                <h4>Total: ${order.totalPrice}</h4>
                <h4 className={styles["discounted-price"]}>Discounted Price: ${order.discountedPrice}</h4>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OrderView;
