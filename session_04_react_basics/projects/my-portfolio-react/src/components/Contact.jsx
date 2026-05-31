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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Giả lập việc gửi form
        if (!validateForm()) {
            setStatus('Vui lòng điền đầy đủ thông tin.');
            setTimeout(() => setStatus(''), 3000);
            return;
        }
        console.log('Dữ liệu gửi đi:', formData);
        setStatus('Cảm ơn bạn! Tin nhắn đã được gửi thành công.');
        setFormData({ name: '', email: '', message: '' });
        
        // Tự động ẩn thông báo sau 3 giây
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <section id="contact" className={styles['contact-section']}>
            <div className="container">
                <h2 className="text-center mb-4">Liên hệ với tôi</h2>
                {status && <div className={styles['alert-success']}>{status}</div>}
                
                <form onSubmit={handleSubmit} className={styles['contact-form']}>
                    <div className={styles['form-group']}>
                        <label>Họ tên:</label>
                        <input 
                            type="text" name="name" required
                            value={formData.name} onChange={handleChange} 
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Email:</label>
                        <input 
                            type="email" name="email" required
                            value={formData.email} onChange={handleChange} 
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Tin nhắn:</label>
                        <textarea 
                            name="message" rows="5" required
                            value={formData.message} onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className={styles['submit-btn']}>Gửi tin nhắn</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
