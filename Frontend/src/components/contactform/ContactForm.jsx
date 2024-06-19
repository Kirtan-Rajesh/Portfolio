import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactForm.scss';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        // Name validation (only letters and spaces)
        if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            valid = false;
            errors.name = 'Name must contain only letters and spaces';
        }

        // Email validation
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
            valid = false;
            errors.email = 'Invalid email address';
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('kirtan-portfolio.vercel.app/api/mails/', formData);
                if (response.status === 201) {
                    setFormData({ name: '', email: '', message: '' });
                    toast.success('Message sent successfully!');
                }
            } catch (error) {
                console.error('Error sending message:', error);
                toast.error('Error sending message');
            }
        } else {
            toast.error('Please fix the errors in the form');
        }
    };

    return (
        <div className="contact-form-container">
            <ToastContainer />
            <div className="form-wrapper">
                <Form onSubmit={handleSubmit} className="contact-form">
                    <h2>Contact Me</h2>
                    <Form.Group controlId="formName">
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            required
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Control
                            as="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            rows={6}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ContactForm;
