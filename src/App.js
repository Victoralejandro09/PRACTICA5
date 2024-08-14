// src/App.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';

const App = () => {
    const [loans, setLoans] = useState([]);
    const [editingLoan, setEditingLoan] = useState(null);

    const handleSave = (loan) => {
        if (loan.id) {
            // Editar préstamo existente
            setLoans(loans.map(l => (l.id === loan.id ? loan : l)));
        } else {
            // Agregar nuevo préstamo
            setLoans([...loans, { ...loan, id: Date.now() }]);
        }
        setEditingLoan(null);
    };

    const handleEdit = (loan) => {
        setEditingLoan(loan);
    };

    const handleDelete = (id) => {
        setLoans(loans.filter(loan => loan.id !== id));
    };

    const handleCancel = () => {
        setEditingLoan(null);
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <LoanForm loan={editingLoan} onSave={handleSave} onCancel={handleCancel} />
                </Col>
                <Col md={6}>
                    <LoanList loans={loans} onEdit={handleEdit} onDelete={handleDelete} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
