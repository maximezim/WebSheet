import React from 'react';
import { Menu } from 'antd';
import { FileOutlined, SettingOutlined } from '@ant-design/icons';

const menuItems = [
  {
    label: 'File',
    key: 'file',
    icon: <FileOutlined />,
    children: [
      {
        label: 'New',
        key: 'file:new',
      },
      {
        label: 'Open',
        key: 'file:open',
      },
      {
        label: 'Refresh',
        key: 'file:refresh',
      },
      {
        label: 'Save',
        key: 'file:save',
      },
      {
        label: 'Reload Scenarios',
        key: 'file:reload',
      },
      {
        label: 'Probe Editor',
        key: 'file:probe',
      },
    ],
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Zoom In',
        key: 'settings:zoomIn',
      },
      {
        label: 'Zoom Out',
        key: 'settings:zoomOut',
      },
    ],
  },
];

const MenuBar: React.FC = () => {
  return <Menu mode="horizontal" items={menuItems} />;
};

export default MenuBar;
