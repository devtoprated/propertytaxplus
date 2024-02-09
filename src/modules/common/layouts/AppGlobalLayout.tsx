import { Layout, theme } from "antd";
import React, { PropsWithChildren, useState } from "react";
import Image from 'next/image';
import menuUnfoldImage from '../../../../public/images/left-arrow.png';
import menuFoldImage from '../../../../public/images/rightarrow.png';
import MainMenu from "../components/MainMenu";
import Navbar from "../components/Navbar";

const { Header, Sider, Content } = Layout;


export default function AppGlobalLayout({ children }: PropsWithChildren) {


    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout>
                <Navbar />
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}
                        width={212}
                        style={{ minHeight: 780, marginTop: 20, maxHeight:'100%'}}>
                        <div className="demo-logo-vertical" />
                        <MainMenu />
                    </Sider>
                    <button className="togglearrow"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Image
                            src={collapsed ? menuFoldImage : menuUnfoldImage}
                            alt={collapsed ? 'Menu Unfold' : 'Menu Fold'}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </button>
                    <Content
                        style={{
                            margin: '24px 0 16px 10px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>

                </Layout>

            </Layout>
        </>
    );
}

