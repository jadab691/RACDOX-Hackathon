import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollowImage = ({ className = '', ...imageProps }) => {
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.35 });
    const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.35 });
    const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 22, mass: 0.35 });
    const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 22, mass: 0.35 });

    const handleMouseMove = (event) => {
        const container = containerRef.current;
        if (!container) return;

        const bounds = container.getBoundingClientRect();
        const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

        x.set(relativeX * 8);
        y.set(relativeY * 8);
        rotateX.set(relativeY * -1.4);
        rotateY.set(relativeX * 1.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-full w-full overflow-hidden"
            style={{ perspective: '1100px' }}
        >
            <motion.img
                {...imageProps}
                className={`h-full w-full object-cover ${className}`}
                style={{
                    x: springX,
                    y: springY,
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    scale: 1.04,
                    transformPerspective: 1100,
                }}
            />
        </div>
    );
};

export default MouseFollowImage;
