import React, { Fragment } from "react";
import { Breadcrumb } from "antd";
import {
    SettingOutlined,
    HomeOutlined
  } from "@ant-design/icons";
export function Repuestos() {
  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
        <SettingOutlined />
          <span>Repuestos</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  );
}
