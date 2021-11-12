import React from 'react';
import { Col, Card, Form, Row, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

export const DetailUser = (props) => {

    const {mergeUnit} = props;
    
    const [user, setUser] = useState({})

    const handle = (param) => {
        console.log(param);
    }
    
    useEffect(() => {
        /* console.log('MergeUnit', mergeUnit.mergeUnit.user); */
        setUser(mergeUnit.user);
        console.log(props);
    }, [])

    return (
        <div>
            <Col>
                <Card>
                    <Card.Header style={{fontWeight: 'bold'}}>Datos de usuario</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    ID
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue='{user.id}'/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    name
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue='{user.name}'/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    username
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue='{user.username}'/>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    email
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Control plaintext readOnly defaultValue='{user.email}'/>
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
            <Button onClick={() => handle(user)} variant="primary"></Button>
        </div>
    )
}

export default withRouter(DetailUser);
