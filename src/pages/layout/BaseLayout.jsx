import React, { useState } from 'react';
import {Link, Outlet} from "react-router-dom";
import {Button, Layout, Menu} from 'antd';
import {
    HomeOutlined,
    FileAddOutlined,
    PhoneOutlined,
    CheckCircleOutlined,
    UnorderedListOutlined,
    MoneyCollectOutlined,
    UserOutlined,
    GroupOutlined,
    LinkOutlined,
} from '@ant-design/icons';
import {EyeClosed, Eye, PanelLeftOpen, PanelLeftClose} from "lucide-react";

const { Header, Sider, Content } = Layout;

const BaseLayout = () => {
    const [collapsed, setCollapsed] = useState(false); // Состояние для управления сайдбаром

    const toggleCollapsed = () => {
        setCollapsed(!collapsed); // Переключение состояния сайдбара
    };
    return (
        <Layout className="relative" style={{ minHeight: '100vh' }}>
            <Sider  width={300} className="bg-gray-800 sticky top-0 text-white max-h-screen overflow-y-scroll [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-blue-500
  [&::-webkit-scrollbar-thumb]:bg-blue-500
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500" collapsed={collapsed}>
                <div className="logo p-4 text-lg font-bold">
                    <img src="/logo.svg" className="h-20 mx-auto" />
                </div>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Bosh sahifa</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileAddOutlined />}>
                        <Link to="/register">Ro'yxatga olish</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                        <Link to="/hujjat">Ro'yxatga olinganlar</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<PhoneOutlined />}>
                        <Link to="/qungiroq">Qo'ng'iroq</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        <Link to="/ruyxat-uzi">O'zi ro'yxatga olganlar</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<CheckCircleOutlined />}>
                        <Link to="/dtm">DTM</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<MoneyCollectOutlined />}>
                        <Link to="/tasdiqlangan">To'lov tasdiqlanganlar</Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<CheckCircleOutlined />}>
                        <Link to="/tasdiqlangan-uzi">O'zi tasdiqlanganlar</Link>
                    </Menu.Item>
                    <Menu.Item key="9" icon={<CheckCircleOutlined />}>
                        <Link to="/hisobot-kunlik">Kunlik hisobot</Link>
                    </Menu.Item>
                    <Menu.Item key="10" icon={<CheckCircleOutlined />}>
                        <Link to="/dtm-bonus">DTM bonus</Link>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<CheckCircleOutlined />}>
                        <Link to="/hisobot">Kunlik hisobot - barcha</Link>
                    </Menu.Item>
                    <Menu.Item key="12" icon={<UserOutlined />}>
                        <Link to="/hisobot-user-all">User hisoboti</Link>
                    </Menu.Item>
                    <Menu.Item key="13" icon={<CheckCircleOutlined />}>
                        <Link to="/barcha">!!! O'zgartirish</Link>
                    </Menu.Item>
                    <Menu.Item key="14" icon={<CheckCircleOutlined />}>
                        <Link to="/sms/natija">Natijalarni yuklash</Link>
                    </Menu.Item>
                    <Menu.Item key="15" icon={<CheckCircleOutlined />}>
                        <Link to="/sms/sms-send">SMS yuborish</Link>
                    </Menu.Item>
                    <Menu.Item key="16" icon={<CheckCircleOutlined />}>
                        <Link to="/imtihon-utgan-yangi">Imtihondan o'tganlar</Link>
                    </Menu.Item>
                    <Menu.Item key="17" icon={<CheckCircleOutlined />}>
                        <Link to="/imtihon-utgan-super">Super kontrakt</Link>
                    </Menu.Item>
                    <Menu.Item key="18" icon={<CheckCircleOutlined />}>
                        <Link to="/imtihon-vaqti">Imtihon vaqtlari</Link>
                    </Menu.Item>
                    <Menu.Item key="19" icon={<UserOutlined />}>
                        <Link to="/xodimlar">Xodimlar</Link>
                    </Menu.Item>
                    <Menu.Item key="20" icon={<LinkOutlined />}>
                        <Link to="/referral-link">Referal link</Link>
                    </Menu.Item>
                    <Menu.Item key="21" icon={<CheckCircleOutlined />}>
                        <Link to="/barcha2">!!! O'zgartirish 2</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-dark z-[30] sticky top-0 shadow flex justify-between items-center p-4">
                    <button  onClick={toggleCollapsed}
                             style={{
                                 marginBottom: 16,
                             }} type="button"
                            className="flex shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-medium rounded-lg border border-transparent bg-[#1e90ff] text-white hover:bg-[#1E90FFB2] focus:outline-none focus:[#1E90FFB2] disabled:opacity-50 disabled:pointer-events-none">
                        {collapsed ? <PanelLeftOpen strokeWidth="1.2" /> : <PanelLeftClose strokeWidth="1.2" />}
                    </button>
                    {/*<h2 className="text-xl font-semibold">OSIYO XALQARO UNIVERSITETI QABUL</h2>*/}
                    <div>
                        {/* Здесь могут быть дополнительные элементы навбара, такие как уведомления или профиль */}
                    </div>
                </Header>
                <Content className="m-5">
                    <div className="p-4 bg-white rounded shadow h-full">
                        <Outlet/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default BaseLayout;
