import { FileDoneOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Col, Select, Input, Avatar, Drawer, Popover, Button, Typography } from 'antd'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import myImage from '../../../../public/images/logo.png';
import gwlogo from '../../../../public/images/GW-Logo.png';
import dottoggle from '../../../../public/images/menutoggle.svg';
import notification from '../../../../public/images/notification.png';
import { FormattedMessage } from 'react-intl';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  function handleIdSearchChange(event: ChangeEvent<HTMLInputElement>): void {

  }
  const content = (
    <Row>
      <Col span={12} className="fileicon">
        <FileDoneOutlined />
        <FormattedMessage id="property-tax-plus-appeal-appeals" defaultMessage="Appeals" />
      </Col>
      <Col span={12} className="fileicon">
        <FileDoneOutlined />
        <FormattedMessage id="property-tax-plus-appeal-compilance" defaultMessage="Compliance" />
      </Col>
      <Col span={12} className="fileicon">
        <FileDoneOutlined />
        <FormattedMessage id="property-tax-plus-appeal-forecast" defaultMessage="Forecast" />
      </Col>
      <Col span={12} className="fileicon">
        <FileDoneOutlined />
        <FormattedMessage id="property-tax-plus-appeal-payment" defaultMessage="Payment" />
      </Col>
    </Row>
  );
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8}>
          <Image src={myImage} alt="My Image" />
        </Col>
        <Col xs={24} sm={24} md={12} style={{  marginTop:'5px'}}>
          <Row gutter={[16, 16]}>
            <Col  xs={24} sm={24} md={12} lg={12}>
            <Select
                size="large"
                defaultValue="lucy"
                style={{ width: '100%' }}
                onChange={handleChange}
                options={[
                  {
                    label: 'Manager',
                    options: [
                      { label: 'Jack', value: 'jack' },
                      { label: 'Lucy', value: 'lucy' },
                    ],
                  },
                  {
                    label: 'Engineer',
                    options: [{ label: 'yiminghe', value: 'Yiminghe' }],
                  },
                ]}
              />
            </Col>
            <Col  xs={24} sm={24} md={12} lg={12}>
            <Input
                placeholder="Search by title"
                prefix={<SearchOutlined />}
                size="large"
                onChange={handleIdSearchChange}
                onPressEnter={() => { }}
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={4}>
          <Row >
            <Col xs={6} sm={6} md={6}>
              <div className="navinfo logofirst">
                <Image src={gwlogo} alt="gw-logo" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <div className="navinfo avtar">
                <Avatar size={40} icon={<UserOutlined />} />
              </div>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <div className="navinfo noti" onClick={showDrawer}>
                <Image src={notification} alt="gw-logo" width={40} />
              </div>
              <Drawer title="Notifications" onClose={onClose} visible={open}>
                <Typography.Text>Some contents...</Typography.Text>
              </Drawer>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <div className="navinfo">
                <Popover placement="topLeft" content={content} trigger="click">
                  <Button className="togglebtn">
                    <Image src={dottoggle} alt="My Image" />
                  </Button>
                </Popover>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default Navbar;
