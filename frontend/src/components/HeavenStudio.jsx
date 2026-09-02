import { motion } from 'framer-motion';
import MouseFollowImage from './MouseFollowImage';

// ========================================
// STUDIO IMAGE CONSTANT - Replace this path with real Heaven Furniture photography
// ========================================
const STUDIO_IMAGE = "/images/heaven-studio.jpg";

const HeavenStudio = () => {
    return (
        <section
            className="relative w-full bg-warm-ivory py-20 md:py-28 lg:py-32"
            style={{ backgroundColor: '#F4F0E8' }}
        >
            {/* Main container */}
            <div className="w-full px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
                {/* Desktop: Two-column asymmetrical layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col"
                    >
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="mb-8 md:mb-12"
                        >
                            <p
                                className="sans-body text-xs md:text-sm tracking-widest font-600"
                                style={{ color: '#B49A68' }}
                            >
                                THE HEAVEN STUDIO
                            </p>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="serif-heading text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 md:mb-10"
                            style={{ color: '#172522' }}
                        >
                            Furniture should not simply
                            <br />
                            fill a room.
                            <br />
                            <span style={{ color: '#B49A68' }}>It should belong there.</span>
                        </motion.h2>

                        {/* Body Paragraph */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="sans-body text-base md:text-lg leading-relaxed max-w-md mb-10 md:mb-14"
                            style={{ color: '#172522' }}
                        >
                            At Heaven Furniture Mart, we create bespoke furniture and interior pieces designed around your space, lifestyle, and taste — bringing thoughtful design and craftsmanship together in Chattogram.
                        </motion.p>

                        {/* Editorial Metadata */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-3"
                        >
                            <div className="flex gap-8 md:gap-12">
                                <div>
                                    <p
                                        className="sans-body text-xs tracking-widest font-600 mb-1"
                                        style={{ color: '#172522' }}
                                    >
                                        CHITTAGONG
                                    </p>
                                    <p
                                        className="sans-body text-xs tracking-widest font-600"
                                        style={{ color: '#172522' }}
                                    >
                                        BANGLADESH
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className="sans-body text-xs tracking-widest font-600 mb-1"
                                        style={{ color: '#172522' }}
                                    >
                                        EST.
                                    </p>
                                    <p
                                        className="sans-body text-xs tracking-widest font-600"
                                        style={{ color: '#172522' }}
                                    >
                                        2020
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative h-96 md:h-full lg:min-h-screen flex items-center"
                    >
                        <MouseFollowImage
                            src={STUDIO_IMAGE}
                            alt="Heaven Furniture Mart Studio - Interior Design & Bespoke Furniture"
                            className="w-full h-96 md:h-96 lg:h-full object-cover"
                            onError={(e) => {
                                e.target.style.backgroundColor = '#DDD4C5';
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeavenStudio;
