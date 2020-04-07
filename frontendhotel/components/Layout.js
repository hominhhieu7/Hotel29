import { Layout } from 'antd';
import React from 'react';
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router'

Router.events.on('routeChangeStart', url => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const { Header, Footer, Content } = Layout;


const style = {
    header: {
        background: "#6db8ff"
    },
    content: {
        background: "#ffffff",
        paddingTop: "3rem"
    }
}
export default class Layouts extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
                </Head>
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
            </>
        )
    }
}