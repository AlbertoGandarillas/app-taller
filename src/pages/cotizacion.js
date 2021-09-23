import React, { Fragment } from "react";
import { Breadcrumb } from "antd";
import {
    FileDoneOutlined,
    HomeOutlined
  } from "@ant-design/icons";
export function Cotizacion() {
  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
        <FileDoneOutlined />
          <span>Cotizaciones</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  );
}
