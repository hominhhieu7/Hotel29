import React from 'react'
import PropTypes from 'prop-types'
import { Comment, List, Col, Row } from 'antd';

function RenderComments(props) {
    const { comments } = props;
    return (
        <Row justify="center">
            <Col span={8}>
                <List
                    className="comment-list"
                    header={`${comments.length} comments`}
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={item => (
                        <li key={item.id}>
                            <Comment
                                author={item.author}
                                content={item.comment}
                            />
                        </li>
                    )}
                />
            </Col>
        </Row>
    )
}

RenderComments.propTypes = {
    comments: PropTypes.array,
}
RenderComments.defaultProps = {
    comments: []
}

export default RenderComments

