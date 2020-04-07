import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, message, Rate, Space } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import apiServices from '../../../services/apiServices';
import { API } from '../../../services/apiResource';
import { UserContext } from '../../../Context/StoreContext';




function RenderHotel(props) {
    const { hotel } = props;
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const { user } = useContext(UserContext);
    async function bookingButton() {
        setLoading(true);
        const changeStatus = {
            id: hotel.id,
            status: true
        }
        const data = await apiServices.put(API.HOTELS.getAll + `${hotel.id}`, changeStatus);
        console.log(data);
        if (data.status) {
            setLoading(false);
            message.success("Booking success", 1);
            setDisabled(true);
        }
    }
    return (
        <div key={hotel.id}>
            <Row justify="center">
                <Col span={8}>
                    <img src={hotel.image}></img>
                </Col>
                <Col span={8} offset={3} >
                    <Space size="middle" direction="vertical">
                        <h1> {hotel.name} </h1>
                        <h2>Price: {hotel.price}$ per day</h2>
                        <h2>Adress: {hotel.streetAdress}, {hotel.stateAdress}, {hotel.countryAdress}</h2>
                        <h3><LikeOutlined />{hotel.like}</h3>
                        <Rate disabled defaultValue={hotel.star} />
                        {hotel.status ? <span>Hotel has booked by someone</span> : <Button type="primary" disabled={disabled} onClick={bookingButton} loading={loading}>
                            Book
                    </Button>}
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

RenderHotel.propTypes = {
    hotel: PropTypes.object,
}
RenderHotel.defaultProps = {
    hotel: {}
}

export default RenderHotel

