import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoanForm = ({ loan, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        id: '',
        book: '',
        member: '',
        loanDate: '',
        returnDate: ''
    });

    useEffect(() => {
        if (loan) {
            setFormData({
                id: loan.id,
                book: loan.book,
                member: loan.member,
                loanDate: loan.loanDate,
                returnDate: loan.returnDate
            });
        } else {
            // Clear form if no loan is provided
            setFormData({
                id: '',
                book: '',
                member: '',
                loanDate: '',
                returnDate: ''
            });
        }
    }, [loan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        // Clear form after submission
        setFormData({
            id: '',
            book: '',
            member: '',
            loanDate: '',
            returnDate: ''
        });
    };

    return (
        <Container>
            <h1 className="text-center my-4">{loan ? 'Editar Prestamo' : 'Agregar Prestamo'}</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formBook">
                            <Form.Label>Libro</Form.Label>
                            <Form.Control
                                type="text"
                                name="book"
                                value={formData.book}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formMember">
                            <Form.Label>Socio</Form.Label>
                            <Form.Control
                                type="text"
                                name="member"
                                value={formData.member}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formLoanDate">
                            <Form.Label>Fecha de Prestamo</Form.Label>
                            <Form.Control
                                type="date"
                                name="loanDate"
                                value={formData.loanDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formReturnDate">
                            <Form.Label>Fecha de Devolucion</Form.Label>
                            <Form.Control
                                type="date"
                                name="returnDate"
                                value={formData.returnDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">
                            {loan ? 'Guardar Cambios' : 'Agregar Prestamo'}
                        </Button>
                        <Button variant="secondary" onClick={() => {
                            setFormData({
                                id: '',
                                book: '',
                                member: '',
                                loanDate: '',
                                returnDate: ''
                            });
                            onCancel();
                        }}>
                            Cancelar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default LoanForm;
