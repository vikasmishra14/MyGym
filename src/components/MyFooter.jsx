import { HeartFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

const MyFooter = () => {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                    marginTop:"300px"
                }}
            >
                MY GYM ©{new Date().getFullYear()} Created by <HeartFilled style={{ color: "red" }} /> Vikas Mishra
            </Footer>
        </>
    )
}

export default MyFooter