import React from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Table } from "react-bootstrap";
import '../stylesheets/merge.css';
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { DetailView } from "./DetailView";
import { withRouter } from 'react-router-dom';

const getData = async () => {
    const {data} = await axios.get('data.json'); 
    const info = data.map( merge => {
        return {...merge}
    })
    return info;
}   

export const Merge = ({history}) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
 
    useEffect(() => {
        console.log('handleRedirect//Merge', history);
        getData().then( data => {
            setState({
                data: data,
                loading: false
            })
        })
    }, []);
    
    return(
        <>
            <div id='table' className='container-shadow'>
                <Table striped bordered hover>
                        <thead>
                            <TableHead />
                        </thead>
                        <tbody>
                            <TableBody state={state.data} route={history}/> 
                        </tbody>
                </Table>
            </div>
        </>
    );
}

const TableHead = () => {
    return (
        <tr>
            <th>Id</th>
            <th>Nombre del Usuario</th>
            <th>Origen del projecto</th>
            <th>Destino del repositorio</th>
            <th>Fecha del atributos</th>
            <th>Estado del merge</th>
            <th>Última actualización del merge</th>
            <th>Branch Origen</th>
            <th>Branch Destino</th>
            <th>Versión</th>
            <th></th>
        </tr>
    );
}

const TableBody = ({state, route}) => {

    const handleRedirect = (merge) => {
        //history.push(`/detail/${merge.id}`, merge);
        route.push(`/merge/${merge._id.$oid}/detail`, merge);
    }

    return state.map( (merge) => (
        <tr key={`tr-${merge._id.$oid}`}>
            <td>{merge._id.$oid}</td>
            <td>{merge.user.name}</td>
            <td>{merge.project.name}</td>
            <td>{merge.repository.name}</td>
            <td>{merge.attributes.id}</td>
            <td>{merge.attributes.merge_status}</td>
            <td>{merge.attributes.updated_at.$date}</td>
            <td>{merge.attributes.source_branch}</td>
            <td>{merge.attributes.target_branch}</td>
            <td>{merge.__v}</td>
            <td><Button onClick={() => handleRedirect(merge)} variant="primary" /* style='border-radius: 100%' */><FontAwesomeIcon icon={faEye}/></Button>{' '}</td>
        </tr>
    ));
} 
export default withRouter(TableBody);