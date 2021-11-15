import { useEffect, useState } from 'react';
import DetailUser from './DetailUser';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import { DetailRepository } from './DetailRepository';
import { DetailAttributes } from './DetailAttributes';
import { DetailProject } from './DetailProject';
import { DetailAssigne } from './DetailAssigne';
import { DetailLastCommit } from './DetailLastCommit';
import { DetailVersion } from './DetailVersion';
import { DetailUrl } from './DetailUrl';
import { withRouter } from 'react-router-dom';

const DetailView = ({ history }) => {

    const {location} = history;
    const {state} = location;

    return (
        <div>
            <Row style={{ margin: '1% auto' }}>
                <Col>
                    <DetailAttributes mergeUnit={state} />
                </Col>
            </Row>
            <Row style={{ margin: '1% auto' }}>
                <Col>
                     <DetailUser mergeUnit={state}/>
                </Col>
            </Row>
            <Row style={{ margin: '1% auto' }}>
                <Col>
                    <DetailRepository mergeUnit={state}/>
                </Col>
            </Row>
            <Row style={{ margin: '1% auto' }}>
                <Col>
                    <DetailProject mergeUnit={state}/>
                </Col>
            </Row>
            <Row style={{ margin: '1% auto' }}>
                <Col>
                    <DetailAssigne mergeUnit={state}/>
                </Col>
            </Row>
        </div>
    )
}

export default DetailView;