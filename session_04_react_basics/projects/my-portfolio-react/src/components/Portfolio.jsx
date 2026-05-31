// src/components/Portfolio.jsx
import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

function Portfolio() {
    const [items] = useState(projects);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2 className="text-center mb-5">My Portfolio</h2>

                {/* Filter Buttons */}
                <div className={styles['filter-container']}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                        >
                            {category.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Render filtered items */}
                <div className={styles['portfolio-grid']}>
                    {items.map(project => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;