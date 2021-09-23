import React, { Fragment } from "react";
import { Breadcrumb } from "antd";
import {
    TeamOutlined,
    HomeOutlined
  } from "@ant-design/icons";
export function Usuarios() {
  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
        <TeamOutlined />
          <span>Users</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  );
}
