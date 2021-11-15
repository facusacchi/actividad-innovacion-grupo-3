import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';

export const DetailProject = ({ mergeUnit }) => {

    const { project } = mergeUnit;
    return (
        <div>
            <Col>
                <Card id='form-control' className='box-shadow'>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de proyecto</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>  
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                Nombre del proyecto
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Text className="text-muted">
                                                            {project.name}
                                                        </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    URL WEB
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Text className="text-muted">
                                                            {project.web_url}
                                                        </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Id de proyecto
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Text className="text-muted">
                                                            {project._id.$oid}
                                                        </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>

                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Version
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Text className="text-muted">
                                                            {mergeUnit.__v}
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
