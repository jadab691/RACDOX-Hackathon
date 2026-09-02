import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MouseFollowImage from './MouseFollowImage';

// ========================================
// COLLECTIONS DATA - Image paths centralized for easy replacement
// ========================================
const collectionsData = [
    {
        id: 'living',
        label: 'LIVING',
        title: 'Living',
        description: 'Spaces designed for conversation, comfort, and everyday living.',
        items: ['Sofas', 'Coffee Tables', 'TV Units', 'Accent Chairs'],
        image: '/images/collection-living.jpg',
    },
    {
        id: 'bedroom',
        label: 'BEDROOM',
        title: 'Bedroom',
        description: 'Serene sanctuaries crafted for rest, luxury, and personal style.',
        items: ['Beds', 'Nightstands', 'Dressers', 'Accent Pieces'],
        image: '/images/collection-bedroom.jpg',
    },
    {
        id: 'dining',
        label: 'DINING',
        title: 'Dining',
        description: 'Gather around furniture designed for connection and memorable moments.',
        items: ['Dining Tables', 'Chairs', 'Sideboards', 'Lighting'],
        image: '/images/collection-dining.jpg',
    },
    {
        id: 'office',
        label: 'OFFICE',
        title: 'Office',
        description: 'Work spaces designed for focus, inspiration, and professional elegance.',
        items: ['Desks', 'Chairs', 'Storage', 'Accessories'],
        image: '/images/collection-office.jpg',
    },
    {
        id: 'bespoke',
        label: 'BESPOKE',
        title: 'Bespoke',
        description: 'From first sketch to final finish, we create furniture around the way you live.',
        items: ['Custom Design', 'Handcrafted', 'Your Vision', 'Your Space'],
        image: '/images/collection-bespoke.jpeg',
    },
];

const Collections = () => {
    const [activeCollectionId, setActiveCollectionId] = useState('living');

    const activeCollection = collectionsData.find(
        (collection) => collection.id === activeCollectionId
    );

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const imageVariants = {
        exit: { opacity: 0 },
        enter: { opacity: 1 },
        transition: { duration: 0.6 },
    };

    const textVariants = {
        exit: { opacity: 0, y: 10 },
        enter: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    return (
        <section
            className="relative w-full py-20 md:py-28 lg:py-32"
            style={{ backgroundColor: '#172522' }}
        >
            {/* Main container */}
            <div className="w-full px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Section Intro */}
                    <motion.div variants={itemVariants} className="mb-12 md:mb-16">
                        <p
                            className="sans-body text-xs md:text-sm tracking-widest font-600 mb-4"
                            style={{ color: '#B49A68' }}
                        >
                            EXPLORE THE COLLECTIONS
                        </p>
                        <h2
                            className="serif-heading text-4xl sm:text-5xl md:text-6xl leading-tight"
                            style={{ color: '#F4F0E8' }}
                        >
                            Designed for the way you live.
                        </h2>
                    </motion.div>

                    {/* Category Navigation */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16 md:mb-20 overflow-x-auto"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style>{`
                            .collections-scroll::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div
                            className="collections-scroll flex gap-8 md:gap-12 pb-4 -mb-4"
                        >
                            {collectionsData.map((collection) => (
                                <motion.button
                                    key={collection.id}
                                    onClick={() => setActiveCollectionId(collection.id)}
                                    className="relative flex-shrink-0 sans-body tracking-widest font-600 text-sm md:text-base transition-colors duration-300 pb-3"
                                    style={{
                                        color:
                                            activeCollectionId === collection.id
                                                ? '#F4F0E8'
                                                : '#999999',
                                    }}
                                >
                                    {collection.label}
                                    {activeCollectionId === collection.id && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute bottom-0 left-0 right-0 h-px"
                                            style={{ backgroundColor: '#B49A68' }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Featured Collection - Asymmetrical Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
                        {/* Left: Image */}
                        <motion.div
                            className="relative h-80 sm:h-96 md:h-full lg:min-h-96 order-2 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                        >
                            <AnimatePresence mode="wait">
                                <MouseFollowImage
                                    key={activeCollection.id}
                                    src={activeCollection.image}
                                    alt={activeCollection.title}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    onError={(e) => {
                                        e.target.style.backgroundColor = '#2a3a38';
                                    }}
                                />
                            </AnimatePresence>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            className="flex flex-col justify-center order-1 lg:order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCollection.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Category Title */}
                                    <h3
                                        className="serif-heading text-3xl sm:text-4xl md:text-5xl mb-6"
                                        style={{ color: '#F4F0E8' }}
                                    >
                                        {activeCollection.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="sans-body text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                                        style={{ color: '#F4F0E8' }}
                                    >
                                        {activeCollection.description}
                                    </p>

                                    {/* Furniture Items List */}
                                    <div className="mb-10">
                                        <div className="space-y-3">
                                            {activeCollection.items.map((item, index) => (
                                                <p
                                                    key={index}
                                                    className="sans-body text-sm md:text-base tracking-wide"
                                                    style={{ color: '#DDD4C5' }}
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <motion.a
                                        href="#"
                                        className="sans-body text-sm md:text-base tracking-widest font-600 inline-flex items-center gap-3 transition-colors duration-300"
                                        style={{ color: '#B49A68' }}
                                        whileHover={{ color: '#F4F0E8' }}
                                    >
                                        EXPLORE COLLECTION
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.a>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Collections;
