import React, { Fragment } from "react";
import { Breadcrumb } from "antd";
import {
    ReconciliationOutlined,
    HomeOutlined
  } from "@ant-design/icons";
export function Recepcion() {
  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
        <ReconciliationOutlined />
          <span>Recepcion de Vehiculo</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  );
}
