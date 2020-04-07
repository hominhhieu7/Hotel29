import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, message } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import apiServices from '../../../services/apiServices';
import { API } from '../../../services/apiResource';




function RenderHotel(props) {
    const { hotel } = props;
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false)
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
                    <h1> {hotel.name} </h1>
                    <h2>Price: {hotel.price}$</h2>
                    <h2>Adress: {hotel.address}</h2>
                    <h3><StarOutlined />{hotel.vote}</h3>
                    <h3><LikeOutlined />{hotel.like}</h3>
                    {hotel.status ? <span>Hotel has booked by someone</span> : <Button type="primary" disabled={disabled} onClick={bookingButton} loading={loading}>
                            Book
                    </Button>}
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

