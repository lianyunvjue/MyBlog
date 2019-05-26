import React, { Component } from 'react';
// import numeral from 'numeral';
// import { connect } from 'dva';
// import { FormattedMessage } from 'umi-plugin-react/locale';
import { Table, Divider, Tag } from 'antd';

class Peoplemanagement extends Component {
  
  render() {
    
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '权限',
    key: 'permission',
    dataIndex: 'permission',
    render: permission => (
      <span>
        {permission.map(permission => {
          let color = permission.length > 5 ? 'geekblue' : 'green';
          if (permission === 'user') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={permission}>
              {permission.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">锁定用户</a>
        <Divider type="vertical" />
        <a href="javascript:;">解锁用户</a>
        <Divider type="vertical" />
        <a href="javascript:;">删除用户</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    permission: ['admin', 'user'],
  },
  {
    key: '2',
    name: 'Jim Green',
    permission: ['user'],
  },
  {
    key: '3',
    name: 'Joe Black',
    permission: ['admin', 'user'],
  },
];

    return (
      <Table columns={columns} dataSource={data} />    );
  }
}
export default Peoplemanagement;