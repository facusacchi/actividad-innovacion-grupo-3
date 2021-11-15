import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Table, Col, Form, Row } from "react-bootstrap";
import '../stylesheets/merge.css';
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import '../css/table.css';
import '../css/merge.css';

const data = require('../data/data.json');

const Merge = ({ history }) => {
    const [dataMerge, setDataMerge] = useState([]);
    const [id, setId] = useState("");
    const [usuario, setUsuario] = useState("");

    useEffect(() => {
        setDataMerge(data);
    }, []);

    const handleFilter = () => {
        let newData = null;
        if(id != "") {
            newData = data.filter(merge => merge._id.$oid == id);
        } else if (usuario != "") {
            newData = data.filter(merge => merge.user.name.toLocaleLowerCase().includes(usuario.toLocaleLowerCase()));
        }
        setDataMerge(newData);
    }

    return (
        <>
            <Form className='merge-form'>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Id merge</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" onChange={(event) => setId(event.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Enter user" onChange={(event) => setUsuario(event.target.value)}/>
                    </Form.Group>
                </Row>
                <div className='container-button'>
            <Button as={Col} className="mb-3 search-button" variant="primary" type="submit" onClick={handleFilter}>
                Buscar
            </Button>
                </div>
            </Form>
            <div id='table' className='container-shadow'>
                <Table bordered hover variant="dark">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        <TableBody state={dataMerge} route={history} />
                    </tbody>
                </Table>
            </div>
        </>
    );
}

const TableHead = () => {
    return (
        <tr>
            <th id='form-control'>Id</th>
            <th id='form-control'>Nombre del Usuario</th>
            <th id='form-control'>Estado del merge</th>
            <th id='form-control'>Última actualización del merge</th>
            <th id='form-control'>Branch Origen</th>
            <th id='form-control'>Branch Destino</th>
            <th id='form-control'></th>
        </tr>
    );
}

const TableBody = ({ state, route }) => {

    const handleRedirect = (merge) => {
        route.push(`/merge/${merge._id.$oid}/detail`, merge);
    }

    return state.map((merge) => (
        <tr key={`tr-${merge._id.$oid}`}>
            <td>{merge._id.$oid}</td>
            <td>{merge.user.name}</td>
            <td>{merge.attributes.merge_status}</td>
            <td>{merge.attributes.updated_at.$date}</td>
            <td>{merge.attributes.source_branch}</td>
            <td>{merge.attributes.target_branch}</td>
            <td><Button onClick={() => handleRedirect(merge)} variant="primary"><FontAwesomeIcon icon={faEye} /></Button>{' '}</td>
        </tr>
    ));
}
export default withRouter(Merge);