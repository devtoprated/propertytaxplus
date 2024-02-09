import { Menu } from 'antd'
import Image from 'next/image'
import React from 'react'
import dashboard from '../../../../public/images/dashboard.png';
import account from '../../../../public/images/Account.png';
import notice from '../../../../public/images/Notice.png';
import appeals from '../../../../public/images/Appeals.png';
import appealsletter from '../../../../public/images/Appealletter.png';
import resolution from '../../../../public/images/resolution.png';
import archive from '../../../../public/images/archive.png';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
const MainMenu = () => {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1" icon={<Image src={dashboard} alt="Dashboard" width={20} />}>
          <Link href="/">
          <FormattedMessage id="property-tax-plus-appeal-dashboard" defaultMessage="Dashboard"/>   
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<Image src={account} alt="Account" width={20} />}>
          <Link href="/">
          <FormattedMessage id="property-tax-plus-appeal-accounts" defaultMessage="Accounts"/>  
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<Image src={archive} alt="Account" width={20} />}>
          <Link href="/">
          <FormattedMessage id="property-tax-plus-appeal-batches" defaultMessage="Batches"/> 
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<Image src={resolution} alt="Notice" width={20} />}>
          <Link href="/">
          <FormattedMessage id="property-tax-plus-appeal-resolution" defaultMessage="Resolution"/> 
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<Image src={notice} alt="Notice" width={20} />}>
          <Link href="/">
          <FormattedMessage id="property-tax-plus-appeal-notices" defaultMessage="Notices"/>  
          </Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<Image src={appeals} alt="Appeals" width={20} />}>
          <Link href="/appeal">
          <FormattedMessage id="property-tax-plus-appeal-appeals" defaultMessage="Appeals"/>  
          </Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<Image src={appealsletter} alt="Appeals Letter" width={20} />}>
          <Link href="/">
           <FormattedMessage id="property-tax-plus-appeal-letter" defaultMessage=" Apeal Letter"/>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default MainMenu
