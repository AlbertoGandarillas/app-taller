import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import logo from "./images/logo-small.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Customers } from "./modules/customers/index";

import { Login } from "./pages/login";
import { Locales } from "./pages/locales";
import { Recepcion } from "./pages/recepcion";
import { Facturacion } from "./pages/facturacion";
import { Reportes } from "./pages/reportes";
import { OrdenReparacion } from "./pages/ordenReparacion";
import { Cotizacion } from "./pages/cotizacion";
import { Citas } from "./pages/citas";

import { Interfaces } from "./pages/security/interfaces";
import { Usuarios } from "./pages/security/users";
import { Servicios } from "./pages/configuracion/servicios";
import { Repuestos } from "./pages/configuracion/repuestos";
import { Vehiculos } from "./pages/configuracion/vehiculos";

import { NotFound } from "./pages/notfound";

import { NavBar } from "./components/nav/index";
import { DisplayUser } from "./components/user/index";
import { Layout, Dropdown, Menu } from "antd";

import {
  UserOutlined,
  LogoutOutlined,
  FormOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu theme="dark">
    <Menu.Item key="1" icon={<UserOutlined />}>
      Mi Perfil
    </Menu.Item>
    <Menu.Item key="2" icon={<FormOutlined />}>
      Feedback
    </Menu.Item>
    <Menu.Item key="3" icon={<LogoutOutlined />}>
      Salir
    </Menu.Item>
  </Menu>
);

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const year = new Date().getFullYear();

  return (
    <Router>
      <div className="wrapper">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => {
              setCollapsed(!collapsed);
            }}
          >
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <NavBar mode="inline" />
          </Sider>
          <Layout className="site-layout">
            <Header className="header">
              {/* <NavBar mode="horizontal" /> */}
              <DisplayUser userName="Alberto Gandarillas"/>
              <Dropdown.Button
                className="user-menu"
                overlay={menu}
                placement="bottomCenter"
                icon={<UserOutlined />}
              ></Dropdown.Button>
            </Header>
            <Content className="main">
              <div className="site-layout-background">
                <Switch>
                  <Route path="/clientes">
                    <Customers />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/locales">
                    <Locales />
                  </Route>
                  <Route path="/recepcion">
                    <Recepcion />
                  </Route> 
                  <Route path="/facturacion">
                    <Facturacion />
                  </Route>
                  <Route path="/reportes">
                    <Reportes />
                  </Route> 
                  <Route path="/cotizacion">
                    <Cotizacion />
                  </Route>  
                  <Route path="/citas">
                    <Citas />
                  </Route>                                     
                  <Route path="/ordenReparacion">
                    <OrdenReparacion />
                  </Route>  
                  <Route path="/servicios">
                    <Servicios />
                  </Route>  
                  <Route path="/vehiculos">
                    <Vehiculos />
                  </Route>  
                  <Route path="/repuestos">
                    <Repuestos />
                  </Route>  
                  <Route path="/interfaces">
                    <Interfaces />
                  </Route>  
                  <Route path="/usuarios">
                    <Usuarios />
                  </Route>  
                  <Route path="/ordenReparacion">
                    <OrdenReparacion />
                  </Route>                                                                                          
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer className="footer">
              Desarrollado por Grupo B - codiGO © {year}
            </Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
