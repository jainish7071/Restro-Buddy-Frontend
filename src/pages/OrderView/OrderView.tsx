import React, { useEffect, useState } from "react";
import { OrderViewProps } from "./OrderView.types";
import { OrderModel, OrderType } from "../../common/model/OrderModel";
import { Card, Col, List, Row, Tag } from "antd";
import styles from "./OrderView.module.scss";
import { OrderService } from "../../Services/OrderService";

const OrderView = (props: React.PropsWithChildren<OrderViewProps>) => {
  useEffect(() => {
    fetchOrder();
    //eslint-disable-next-line
  }, []);

  const fetchOrder = async () => {
    const order = await OrderService.fetchOrder(3);
    setOrder(order);
  };

  const [order, setOrder] = useState<OrderModel>();

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
