import { Layout } from 'antd';
import React from 'react';
import HeaderComponent from './Header'
import FooterComponent from './Footer';

const { Header, Footer, Content } = Layout;


const style = {
    header: {
        background: "rgb(63, 63, 64)"
    },
    content: {
        background: "#ffffff",
        paddingTop: "3rem"
    }
}
export default class Layouts extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={style.header}>
                    <HeaderComponent />
                </Header>
                <Content style={style.content}>
                    {this.props.children}
                </Content>
                <Footer>
                    <FooterComponent />
                </Footer>
            </Layout>
        )
    }
}