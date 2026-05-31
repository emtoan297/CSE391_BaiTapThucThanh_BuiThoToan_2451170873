// src/components/Contact.jsx
import { useState } from 'react';
import styles from './Portfolio.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Controlled Component: Cập nhật state khi user gõ phím
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

   