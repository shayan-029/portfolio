'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from './dialog';
import { useProjects } from '@/hooks/projects';
import ReactMarkdown from "react-markdown";
import './style.css';

export const Projects = () => {

    const {
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        selectedImages,
        setSelecedImages,
        translateX,
        projects,
        showControls,
        prev,
        next,
        setPaused,
        current,
        visibleCount,
        gapRem,
        cardWidth,
        maxIndex,
        setCurrent,
        description,
        setDescription
    } = useProjects();

    return (
        <section className="projects" id="projects">
            <div className="section-tag">Portfolio</div>
            <div className="projects-header">
                <div>
                    <div className="section-title">Recent Projects</div>
                    <p className="section-sub">
                        A few examples of what I&apos;ve built. Every project is unique and built with precision in mind.
                    </p>
                </div>
                {showControls && (
                    <div className="carousel-controls">
                        <button className="carousel-btn" onClick={prev} aria-label="Previous">←</button>
                        <button className="carousel-btn" onClick={next} aria-label="Next">→</button>
                    </div>
                )}
            </div>

            {/* padding trick to allow overflow border on hover */}
            <div className="carousel-outer">
                <div
                    className="carousel-viewport"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(${translateX})` }}
                    >
                        {projects.map((project, i) => (
                            <div
                                key={project.id}
                                className={`project-card ${showControls && i === current + Math.floor(visibleCount / 2) ? 'featured' : ''}`}
                                style={{ flex: `0 0 calc(${cardWidth}% - ${gapRem * (visibleCount - 1) / visibleCount}rem)` }}
                            >
                                <div className="project-thumb">
                                    <Image
                                        src={project.logo}
                                        alt="project-logo"
                                        height={200}
                                        width={200}
                                    />
                                </div>
                                <div className="project-info">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={tag} className={`tag ${i % 2 === 0 ? 'tag-blue' : 'tag-purple'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="project-name">{project.name}</div>
                                    <div className='project-description-box'>
                                        <div className="project-desc">
                                            <ReactMarkdown>{project.description}</ReactMarkdown>
                                        </div>
                                        <span className='view-more' onClick={() => setDescription(project.description)}>↗</span>
                                    </div>
                                    <div className="project-footer">
                                        <Link
                                            href={project.link || '#'}
                                            className="project-link"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Project ↗
                                        </Link>
                                        <button
                                            className="show-image-btn"
                                            onClick={() => setSelecedImages(project.images)}
                                        >
                                            📸 Gallery
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showControls && (
                <>
                    <div className="carousel-dots">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                className={`carousel-dot ${i === current ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            {selectedImages.length > 0 && (
                <Dialog
                    images={selectedImages}
                    onClose={() => setSelecedImages([])}
                />
            )}
            {description && (
                <Dialog
                    description={description}
                    images={selectedImages}
                    onClose={() => setDescription('')}
                />
            )}
        </section>
    );
};