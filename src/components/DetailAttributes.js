import React from 'react';
import { Col, Card, Form, Row } from 'react-bootstrap';
import '../css/card.css';

export const DetailAttributes = ({ mergeUnit: {attributes} }) => {
    return (
        <div>
            <Col>
                <Card id='form-control' className='box-shadow'>
                    <Card.Header style={{fontWeight: 'bold'}}>Detalles de los atributos</Card.Header>
                    <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Row>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                Id
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.id}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Target Branch
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.target_branch}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Source Branch
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.source_branch}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Id Autor 
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.author.id}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Assignee Id
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.assignee_id}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Título
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.title}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label column style={{fontWeight:'bold'}}>
                                                    Fecha de creación
                                                </Form.Label>
                                                <div>
                                                <Col>
                                                    <Form.Text className="text-muted">
                                                        {attributes.created_at.$date}
                                                    </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    Estado del merge
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Text className="text-muted">
                                                            {attributes.merge_status}
                                                        </Form.Text>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                 <Form.Label column style={{fontWeight:'bold'}}>
                                                    Estado del merge
                                                </Form.Label>
                                                <div>
                                                    <Col>
                                                        <Form.Text className="text-muted">
                                                            {attributes.merge_status}
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