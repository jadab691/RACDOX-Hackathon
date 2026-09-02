import { motion } from 'framer-motion';
import MouseFollowImage from './MouseFollowImage';

// ========================================
// HERO IMAGE CONSTANT - Replace this path with real Heaven Furniture photography
// ========================================
const HERO_IMAGE = "./images/furniture-hero.jpg";

const Hero = () => {
    const scrollIndicatorVariants = {
        initial: { opacity: 0.5, y: 0 },
        animate: {
            opacity: [0.5, 0.7, 0.5],
            y: [0, 4, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-neutral-900">
            {/* Background Image - Main Visual Star */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0 w-full h-full"
                style={{ perspective: '1400px' }}
            >
                <MouseFollowImage
                    src={HERO_IMAGE}
                    alt="Heaven Furniture Mart - Premium Furniture & Interior Design"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.backgroundColor = '#1a1a1a';
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: 'rgba(23, 37, 34, 0.16)' }}
                ></div>
                {/* Overlay localized to left, fading right - preserves bright photography on right */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, rgba(10, 20, 18, 0.4) 0%, rgba(10, 20, 18, 0.25) 35%, rgba(10, 20, 18, 0.08) 70%, rgba(10, 20, 18, 0) 100%)'
                    }}
                ></div>
            </motion.div>

            {/* Content Container - Positioned bottom-left */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-full px-8 md:px-12 lg:px-16 flex flex-col justify-end pb-24 md:pb-28 lg:pb-40"
                    style={{ maxWidth: '90%' }}
                >
                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        initial={{
                            color: '#cfb22d',
                            textShadow: '0 0 18px rgba(180, 154, 104, 0.32)',
                        }}
                        animate={{
                            color: '#F4F0E8',
                            textShadow: '0 2px 0 rgba(58, 44, 36, 0.72), 0 4px 0 rgba(180, 154, 104, 0.38), 0 8px 24px rgba(23, 37, 34, 0.34), 0 0 18px rgba(244, 240, 232, 0.14)',
                        }}
                        transition={{
                            color: { duration: 1.8, delay: 0.45, ease: 'easeOut' },
                            textShadow: { duration: 3, delay: 0.45, ease: 'easeOut' },
                        }}
                        className="serif-heading text-5xl sm:text-6xl md:text-7xl leading-tight md:leading-tight lg:leading-tight max-w-3xl "
                        style={{ fontSize: 'clamp(3rem, 10vw, 5.25rem)' }}
                    >
                        FURNITURE,
                        <br />
                        CRAFTED
                        <br />
                        AROUND YOU.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="sans-body text-base md:text-lg lg:text-xl mt-6 md:mt-8 leading-relaxed max-w-md"
                        style={{ color: '#F4F0E8', textShadow: '0 2px 12px rgba(244, 240, 232, 0.22)' }}
                    >
                        Bespoke furniture & interior styling, crafted around your space, lifestyle, and taste.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 md:mt-10 pointer-events-auto"
                    >
                        <motion.a
                            href="#design-your-space"
                            whileHover={{ borderColor: '#B49A68', color: '#B49A68', backgroundColor: 'rgba(244, 240, 232, 0.11)' }}
                            transition={{ duration: 0.3 }}
                            className="group sans-body inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/[0.09] px-6 py-3 text-xs tracking-widest shadow-[0_0_14px_rgba(180,154,104,0.16)] backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,154,104,0.32)] md:px-8 md:py-3.5 md:text-sm"
                            style={{ color: '#F4F0E8', textShadow: '0 1px 10px rgba(244, 240, 232, 0.2)' }}
                        >
                            START YOUR DESIGN
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* One-time brand reveal along the bottom edge */}
            <motion.div
                initial={{ opacity: 10, x: '-100%' }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="pointer-events-none absolute bottom-8 left-8 right-24 z-10 overflow-hidden md:bottom-12 md:left-12 md:right-32"
            >
                <p
                    className="sans-body whitespace-nowrap text-sm font-semibold tracking-[0.18em] text-[#F4F0E8]/80 md:text-base lg:text-lg"
                    style={{ textShadow: '0 2px 10px rgba(23, 37, 34, 0.5)' }}
                >
                    HEAVEN FURNITURE MART <span className="text-[#B49A68]">·</span> BESPOKE FURNITURE <span className="text-[#B49A68]">·</span> INTERIOR STYLING
                </p>
            </motion.div>

            {/* Scroll Indicator - Bottom Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 md:bottom-12 right-8 md:right-12 z-20 flex flex-col items-center gap-2"
            >
                <motion.p
                    className="sans-body text-xs tracking-widest text-center"
                    style={{ color: '#F4F0E8', textShadow: '0 1px 10px rgba(244, 240, 232, 0.2)' }}
                >
                    SCROLL
                    <br />
                    TO EXPLORE
                </motion.p>
                <motion.div
                    variants={scrollIndicatorVariants}
                    initial="initial"
                    animate="animate"
                >
                    <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#F4F0E8' }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
