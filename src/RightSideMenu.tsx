import React, { useState } from 'react';
import { Menu, Form, Input, Button } from 'antd';
import { FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './css/RightSideMenu.css';

const initialFiles = [
  { label: 'File 1', key: 'file1', icon: <FileOutlined /> },
  { label: 'File 2', key: 'file2', icon: <FileOutlined /> },
  { label: 'File 3', key: 'file3', icon: <FileOutlined /> },
];

const RightSideMenu: React.FC = () => {
  const [files, setFiles] = useState(initialFiles);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onSearch = (searchText: string) => {
    const filteredFiles = initialFiles.filter(file =>
      file.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiles(filteredFiles);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`rightSideMenu ${isCollapsed ? 'collapsed' : ''}`}>
      <Button type="default" onClick={toggleCollapse} style={{ marginBottom: 8, marginTop: '5%', width: '90%',  alignSelf: 'center' }}>
        {isCollapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined/>}
      </Button>
      {!isCollapsed && (
        <>
          <div className="searchBar">
            <Input.Search
              placeholder="Search files"
              onSearch={onSearch}
              style={{ marginBottom: 8 }}
            />
          </div>
          <Menu
            mode="inline"
            items={files.map(file => ({ ...file, icon: <FileOutlined /> }))}
            style={{ flex: 1, overflow: 'auto', backgroundColor: '#f5f5f5' }} 
          />
          <div className="menuForm">
            <Form>
              <Form.Item>
                <Input.TextArea rows={4} placeholder="Enter your text here" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Commit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSideMenu;
