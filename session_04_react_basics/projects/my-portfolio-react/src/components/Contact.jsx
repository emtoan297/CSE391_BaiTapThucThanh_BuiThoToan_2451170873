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
const validateForm = () => {
        // Kiểm tra nếu có bất kỳ trường nào trống hoặc chỉ chứa dấu cách
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            return false;
        }
        return true;
    };
    