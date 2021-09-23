import { useEffect, useState, Fragment } from "react";
/* Importar librerias de Ant */
import { Table, Popconfirm, Breadcrumb } from "antd";
import { Button, Modal, Form, Input, Select, InputNumber } from "antd";

/* Importar Iconos de Ant */
import { UsergroupAddOutlined, HomeOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined, FileExcelOutlined } from "@ant-design/icons";

/* Si el toolbar hubiera sido un compnente , esta seria la importacion */
// import { CustomerToolbar } from "./toolbar";
import "./toolbar.scss";

export function Customers() {
  const [customers, setCustomers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cliente, setCliente] = useState([ {
    id : "",
    name : "",
    lastName : "",
    phone : "",
    email : "",
    document : "",
  }]);

  /* Insertar cliente en JSON */
  const addCustomer = async (customer) => {
    let method = customer.id ? "UPDATE" : "POST" ;
    console.log(method);
    console.log(customer.id);
    // try {
       
    //   await fetch("http://localhost:3000/customers", {
    //     method: "POST",
    //     body: JSON.stringify(customer),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // } catch (err) {
    //   console.log("err", err);
    //   alert("no se pudo registrar intente denuevo");
    // }
  };

  /* Al llenar el formulario enviar los datos del forulario */
  const onFinish = async (fieldsValue) => {
    const { id, name, lastName, phone, email, document } = fieldsValue;
    console.log(fieldsValue);
    await addCustomer({
      id,
      name,
      lastName,
      phone,
      email,
      document,
    });
    const response = await getCustomers();
    setCustomers(response);
  };
  const onFinishFailed = (err) => {
    console.log("err", err);
  };

  /* Mostrar / Ocultar modal de cliente */
  const showModal = () => {
    setIsModalVisible(true);
  };

  /* Cuando hace cancel o cierran el modal */
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /* Obtener clientes de JSON */
  const getCustomers = async () => {
    try {
      const response = await fetch("http://localhost:3000/customers");
      return response.json();
    } catch (err) {
      alert("no se pudo obtener los datos, intenta nuevamente");
    }
  };

  /* Eliminar cliente de JSON */
  const deleteCustomer = async (customer) => {
    try {
      console.log(customer);
      await fetch(`http://localhost:3000/customers/${customer.id}`, {
        method: "DELETE",
      });
    } catch (err) {
      alert("no se pudo obtener los datos, intenta nuevamente");
    }
  };

  /* Eventos de la tabla clientes paginado, filtros , orden */
  // function onChange(pagination, filters, sorter, extra) {
  //   console.log("params", pagination, filters, sorter, extra);
  // }

  // const handleOk = () => {
  //   onFinish();
  // };

  /* Evento para borrar un cliente */
  const handleDelete = async (customer) => {
    await deleteCustomer(customer);
    const response = await getCustomers();
    setCustomers(response);
  };

  const handleEdit = async (customer) => {
    const { id, name, lastName, phone, email, document } = customer;
    console.log(id);
    console.log(name);
    console.log(lastName);
    console.log(phone);
    console.log(email);
    console.log(document);
    setCliente(customer);
    setIsModalVisible(true);
    //await deleteCustomer(customer);
    // const response = await getCustomers();
    // setCustomers(response);
  };

   /* Prefijo de numero telefonico */
   const { Option } = Select;
   const prefixSelector = (
     <Form.Item name="prefix" noStyle>
       <Select style={{ width: 70 }}>
         <Option value="1">+1</Option>
         <Option value="01">+01</Option>
       </Select>
     </Form.Item>
   );
 
   /* Definicion de columnas de la tabla de clientes */
   const columns = [
    {
      title: "ID",
      dataIndex: "id"
    },
     {
       title: "Nombres",
       dataIndex: "name",
       filters: [
         {
           text: "Juan",
           value: "Juan",
         },
         {
           text: "Carolina",
           value: "Carolina",
         },
         {
           text: "Henry",
           value: "Henry",
         },
         {
           text: "Brunella",
           value: "Brunella",
         },
       ],
       // specify the condition of filtering result
       // here is that finding the name started with `value`
       onFilter: (value, record) => record.name.indexOf(value) === 0,
       sorter: (a, b) => a.name - b.name,
     },
     {
       title: "Last Name",
       dataIndex: "lastName",
       filters: [
         {
           text: "Rojas",
           value: "Rojas",
         },
         {
           text: "Canelo",
           value: "Canelo",
         },
         {
           text: "Puerta",
           value: "Puerta",
         },
       ],
       onFilter: (value, record) => record.lastName.indexOf(value) === 0,
       sorter: (a, b) => a.lastName - b.lastName,
     },
     {
       title: "Telefono",
       dataIndex: "phone",
       filters: [
         {
           text: "999326354",
           value: "999326354",
         },
         {
           text: "999235443",
           value: "999235443",
         },
         {
           text: "999237755",
           value: "999237755",
         },
         {
           text: "993245365",
           value: "993245365",
         },
       ],
       onFilter: (value, record) => record.phone.indexOf(value) === 0,
       sorter: (a, b) => a.phone.length - b.phone.length,
     },
     {
       title: "Email",
       dataIndex: "email",
       filters: [
         {
           text: "jbrown@att.com",
           value: "jbrown@att.com",
         },
         {
           text: "carolina@att.com",
           value: "carolina@att.com",
         },
         {
           text: "henry@att.com",
           value: "henry@att.com",
         },
         {
           text: "brune@att.com",
           value: "brune@att.com",
         },
       ],
       onFilter: (value, record) => record.email.indexOf(value) === 0,
       sorter: (a, b) => a.email.length - b.email.length,
     },
     {
       title: "Document",
       dataIndex: "document",
       sorter: (a, b) => a.document > b.document,
     },
     {
       title: "Edit",
       dataIndex: "operation",
       render: (_, record) => <Button type="primary" onClick={() => { handleEdit(record)}}>Editar</Button>,
     },
     {
       title: "Delete",
       dataIndex: "operation",
       render: (_, record) => (
         <Popconfirm
           title={"Estas seguro que deseas remover este cliente?"}
           onConfirm={() => {
             handleDelete(record);
           }}
           okText="Aceptar"
           cancelText="Cancelar"
         >
           <Button type="secondary">Eliminar</Button>
         </Popconfirm>
       ),
     },
   ];
 

  // useEffect(() => {
  //   fetch("http://localhost:3000/customers")
  //     .then((response) => response.json())
  //     .then((customers) => setCustomers(customers));
  // }, []);

  /* Cargar clientes al abrir el componente */
  useEffect(() => {
    getCustomers().then((response) => {
      setCustomers(response);
    });
  }, []);

  return (
    <Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UsergroupAddOutlined />
          <span>Clientes</span>
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* <CustomerToolbar /> */}

      <div className="customer-toolbar">
        <Button
          type="primary"
          icon={<AppstoreAddOutlined />}
          onClick={showModal}
        >
          Nuevo Cliente
        </Button>
        <Button type="primary" icon={<FileExcelOutlined />}>
          Exportar a Excel
        </Button>
      </div>

      <Table columns={columns} 
      dataSource={customers} 
      // onChange={onChange} 
      />

      <Modal
        title="Agregar Nuevo Cliente"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          // <Button key="submit" type="primary" onClick={handleOk}>
          //   Enviar
          // </Button>,
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
        ]}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nombres"
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el nombre",
              },
            ]}
          >
            <Input value={cliente.name} defaultValue={cliente.name} />
          </Form.Item>
          <Form.Item
            label="Apellidos"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el apellido",
              },
            ]}
          >
            <Input value={cliente.lastName} defaultValue={cliente.lastName} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Telefono"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el nro. telefonico",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} value={cliente.phone} defaultValue={cliente.phone} />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "No es cun correo valido!",
              },
              {
                required: true,
                message: "Por favor ingrese un correo.",
              },
            ]}
          >
            <Input value={cliente.email} defaultValue={cliente.email} />
          </Form.Item>
          <Form.Item label="Tipo Documento">
            <Select>
              <Select.Option value="dni">DNI</Select.Option>
              <Select.Option value="pasaporte">Pasaporte</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Nro. Documento">
            <Form.Item name="document" noStyle>
              <InputNumber min={1} max={10} value={cliente.document} defaultValue={cliente.document} />
            </Form.Item>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}
