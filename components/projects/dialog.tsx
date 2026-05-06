'use client';
import Image from 'next/image';
import './dialog.css';
import { useProjectDialog } from '@/hooks/projects/dialog';
import ReactMarkdown from "react-markdown";

interface Props {
    onClose: () => void;
    images?: string[];
    title?: string;
    description?: string;
}

export const Dialog = ({ description = '', images = [], onClose, title = 'Gallery' }: Props) => {

    const { active, setActive } = useProjectDialog({ images, onClose });

    const isImages = images.length > 0;

    return (
        <div className="dialog-backdrop" onClick={onClose}>
            <div className="dialog-panel" onClick={e => e.stopPropagation()}>

                {/* ── Header ── */}
                <div className="dialog-header">
                    <div className="dialog-title">
                        <span className="dialog-title-text">{description ? 'Project Description' : title}</span>
                        {isImages && <span className="dialog-count">{active + 1} / {images.length}</span>}
                    </div>
                    <button className="dialog-close" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                </div>

                {description && <div className='diaog-description custom-scroll'><ReactMarkdown>{description}</ReactMarkdown></div>}
                {isImages && <>
                    {/* ── Main preview ── */}
                    <div className="dialog-preview">
                        {/* Prev */}
                        {active > 0 && (
                            <button
                                className="dialog-arrow left"
                                onClick={() => setActive(p => p - 1)}
                                aria-label="Previous"
                            >
                                ←
                            </button>
                        )}

                        <div className="dialog-main-img">
                            <Image
                                src={images[active]}
                                alt={`${title} ${active + 1}`}
                                fill
                                className="dialog-img"
                                priority
                            />
                        </div>

                        {/* Next */}
                        {active < images.length - 1 && (
                            <button
                                className="dialog-arrow right"
                                onClick={() => setActive(p => p + 1)}
                                aria-label="Next"
                            >
                                →
                            </button>
                        )}
                    </div>

                    {/* ── Thumbnail strip ── */}
                    {images.length > 1 && (
                        <div className="dialog-thumbs custom-scroll">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    className={`dialog-thumb ${i === active ? 'active' : ''}`}
                                    onClick={() => setActive(i)}
                                    aria-label={`View image ${i + 1}`}
                                >
                                    <Image src={img} alt={`thumb ${i + 1}`} fill className="dialog-thumb-img" />
                                </button>
                            ))}
                        </div>
                    )}
                </>}
            </div>
        </div>
    );
};