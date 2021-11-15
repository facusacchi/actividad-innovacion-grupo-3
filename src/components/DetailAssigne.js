import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailAssigne = ({ mergeUnit: {attributes} }) => {
    return (
        <div>
            <Col>
                <Card id='form-control' className='box-shadow'>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de asignación</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                    <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Id
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.assignee._id.$oid}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Assignee name
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.assignee.name}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Username
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.assignee.username}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
