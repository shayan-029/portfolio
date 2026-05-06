import { projects } from "@/data/projects";
import { useCallback, useEffect, useRef, useState } from "react";

function useVisibleCount() {
    const [visible, setVisible] = useState(3);
    useEffect(() => {
        const update = () => {
            if (window.innerWidth <= 600) setVisible(1);
            else if (window.innerWidth <= 900) setVisible(2);
            else setVisible(3);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return visible;
}

export const useProjects = () => {

    const INTERVAL = 4000;

    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [selectedImages, setSelecedImages] = useState<string[]>([]);
    const [description, setDescription] = useState('');

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const visibleCount = useVisibleCount();
    const maxIndex = projects.length - visibleCount;

    // hide controls when all cards fit
    const showControls = projects.length > visibleCount;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrent(prev => Math.min(prev, Math.max(maxIndex, 0)));
    }, [maxIndex]);

    const next = useCallback(() => {
        setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = useCallback(() => {
        setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    useEffect(() => {
        if (!showControls || paused) return;
        const timer = setInterval(next, INTERVAL);
        return () => clearInterval(timer);
    }, [paused, next, showControls]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const onTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 40)
            if (diff > 0) next()
            else prev();
        setPaused(false);
    };

    const cardWidth = 100 / visibleCount;
    const gapRem = 1.5;
    const translateX = showControls
        ? `calc(-${current} * (${cardWidth}% + ${gapRem}rem))`
        : '0px';



    return {
        selectedImages,
        setSelecedImages,
        translateX,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
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
        paused,
        INTERVAL,
        description, 
        setDescription
    }
}