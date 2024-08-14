// src/components/LoanList.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const LoanList = ({ loans, onEdit, onDelete }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Libro</th>
                    <th>Socio</th>
                    <th>Fecha de Prestamo</th>
                    <th>Fecha de Devolucion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {loans.map(loan => (
                    <tr key={loan.id}>
                        <td>{loan.book}</td>
                        <td>{loan.member}</td>
                        <td>{loan.loanDate}</td>
                        <td>{loan.returnDate}</td>
                        <td>
                            <Button variant="info" onClick={() => onEdit(loan)}>Editar</Button>
                            <Button variant="danger" onClick={() => onDelete(loan.id)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default LoanList;
