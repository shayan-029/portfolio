import { useCallback, useEffect, useState } from "react";

interface Props {
    onClose: () => void;
    images: string[]
}

export const useProjectDialog = ({ images, onClose }: Props) => {

    const [active, setActive] = useState(0);

    // keyboard navigation
    const handleKey = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') setActive(p => Math.min(p + 1, images.length - 1));
        if (e.key === 'ArrowLeft') setActive(p => Math.max(p - 1, 0));
    }, [onClose, images.length]);

    useEffect(() => {
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [handleKey]);

    return {
        active,
        setActive,
        handleKey
    }
}