import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailRepository = ({ mergeUnit: { repository } }) => {
    return (
        <div>
            <Col>
                <Card id='form-control' className='box-shadow'>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de repositorio</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Homepage
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {repository.homepage}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Name
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {repository.name}
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
