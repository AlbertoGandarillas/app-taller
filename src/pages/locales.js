import React, { Fragment } from "react";
import { Breadcrumb } from "antd";
import {
    ShopOutlined,
    HomeOutlined
  } from "@ant-design/icons";
export function Locales() {
  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
        <ShopOutlined />
          <span>Locales</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  );
}
