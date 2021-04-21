import React, { Component } from 'react';
import './content.css';
import { Table } from 'antd';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    phone: 123445566
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    phone: 123445566
  },
];

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ảnh đại diện',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
];

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div classNam="header">
          <div className="title pl-4">
            Admin
          </div>
          <div>
            <Table dataSource={dataSource} columns={columns}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
