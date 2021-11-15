import React from "react";
import { Col, Card, Form, Row } from 'react-bootstrap';

const FilterId = ({id, list}) => {
    return(
        <>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Id merge</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" />
            </Form.Group>
        </>
    );
}

export default FilterId;