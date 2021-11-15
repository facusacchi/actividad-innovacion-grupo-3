import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

const DetailUser = ({ mergeUnit: { user } }) => {
    return (
        <div>
            <Col>
                <Card id='form-control' className='box-shadow'>
                    <Card.Header style={{ fontWeight: 'bold' }}>Datos de usuario</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                    <Row>
                                        <Col sm={3}>
                                            <Form.Label column style={{ fontWeight: 'bold' }}>
                                                Id
                                            </Form.Label>
                                            <div>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        {user.id}
                                                    </Form.Text>
                                                </Col>
                                            </div>
                                        </Col>
                                        <Col sm={3}>
                                            <Form.Label column style={{ fontWeight: 'bold' }}>
                                                name
                                            </Form.Label>
                                            <div>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        {user.name}
                                                    </Form.Text>
                                                </Col>
                                            </div>
                                        </Col>
                                        <Col sm={3}>
                                            <Form.Label column style={{ fontWeight: 'bold' }}>
                                                username
                                            </Form.Label>
                                            <div>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        {user.username}
                                                    </Form.Text>
                                                </Col>
                                            </div>
                                        </Col>
                                        <Col sm={3}>
                                            <Form.Label column style={{ fontWeight: 'bold' }}>
                                                email
                                            </Form.Label>
                                            <div>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        {user.email}
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

export default DetailUser;

