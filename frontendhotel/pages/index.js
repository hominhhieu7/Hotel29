import apiService from '../services/apiServices'
import { API } from '../services/apiResource'
import Layout from '../components/Layout'
import Link from 'next/link'
import 'antd/dist/antd.css';
import { List, Row, Col, message } from 'antd';
import React, { useState, useEffect } from 'react'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


export default function Index(props) {
    return (
        <>
            <Layout>
                <List style={{
                    borderTopWidth: '0px',
                    borderBottomWidth: '0px'
                }}
                    itemLayout="vertical"
                    size="large"
                    bordered={true}
                    pagination={{
                        onChange: page => {
                        },
                        pageSize: 8,
                    }}
                    dataSource={props.hotels}
                    renderItem={renderItem}
                >
                </List>
            </Layout>
        </>
    )
}

function renderItem(item) {
    const IconText = ({ icon, text }) => (
        <span>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </span>
    );
    return (
        <Row key={item.id} justify="center">
            <Col span={8}>
                <List.Item
                    style={{ borderBottom: '1px solid', borderColor: '#e2dedc' }}
                    actions={[,
                        <IconText icon={LikeOutlined} text={item.like} key="list-vertical-like-o" />,
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <Link href={`/detail/[id]`} as={`/detail/${item.id}`}>
                            <a>
                                <img
                                    width={172}
                                    alt="logo"
                                    src={item.image}
                                />
                            </a>
                        </Link>
                    }
                >
                    <Link href={`/detail/[id]`} as={`/detail/${item.id}`} >
                        <a>
                            <List.Item.Meta
                                title={item.name}
                                description={item.address}
                            />
                        </a>
                    </Link>
                    {item.description}
                </List.Item>
            </Col>
        </Row>
    )
}
export async function getStaticProps() {
    try {
        const data = await apiService.get(API.HOTELS.getAll);
        const hotels = data.filter(hotels => hotels.status === false)
        return {
            props: {
                hotels: hotels
            }
        }
    } catch (error) {
        console.log(error);
    }
}