import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MyLogo from '../assets/people.svg';
const { Header } = Layout;
const MyHeader = () => {

    const navigate = useNavigate();
    const loaction = useLocation(); 

    const handleClick = (value) => {
        navigate(value.key);
    }

    const items = [
        {
            key: "/",
            label: "Home",
            onClick: handleClick
        },
        {
            key: "/bmi",
            label: "BMI",
            onClick: handleClick
        }
    ]


    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center', 
                position: 'sticky'
            }}
        >
            <img width={"60px"} src={MyLogo} />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={active}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0
                }}
            />
        </Header>
    )
}

export default MyHeader