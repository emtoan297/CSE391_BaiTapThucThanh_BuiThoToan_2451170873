// src/components/ProjectCard.jsx
import styles from './Portfolio.module.css';

function ProjectCard({ title, category, image, description, tags }) {
    return (
        <div className={`${styles['project-card']} ${styles[category] || ''}`}>
            <div className={styles['project-image']}>
                <img src={image} alt={title} />
            </div>
            <div className={styles['project-content']}>
                <span className={styles['project-category']}>{category}</span>
                <h3 className={styles['project-title']}>{title}</h3>
                <p className={styles['project-description']}>{description}</p>
                <div className={styles['project-tags']}>
                    {/* Thêm ?. để phòng trường hợp dữ liệu ko có tags sẽ ko bị crash web */}
                    {tags?.map(tag => (
                        <span key={tag} className={styles['tag']}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;