import { useState } from 'react';
import { motion } from 'framer-motion';

const principles = [
    {
        number: '01',
        title: 'THOUGHTFUL DESIGN',
        description: 'Every piece begins with the space, proportion, and way it will be lived in.',
    },
    {
        number: '02',
        title: 'CUSTOM BY NATURE',
        description: 'Dimensions, materials, finishes, and details can be shaped around your needs.',
    },
    {
        number: '03',
        title: 'CRAFTED WITH CARE',
        description: 'We pay attention to the details that turn a functional piece into something considered.',
    },
    {
        number: '04',
        title: 'MADE TO BELONG',
        description: 'The goal is simple: furniture that feels natural in your home, office, or space.',
    },
];

const trustPoints = [
    'Free design consultation',
    'Fully bespoke, built to your space',
    'Premium wood and materials with skilled in-house craftsmanship',
    'Large physical showroom in Chattogram',
    'Delivery and installation included',
    'Easy payment options',
    'Trusted by hundreds of happy homeowners',
];

const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const WhyHeaven = () => {
    const [activePrinciple, setActivePrinciple] = useState(0);

    return (
        <section className="w-full overflow-hidden bg-[#F4F0E8] py-20 text-[#172522] md:py-28 lg:py-36">
            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={revealVariants}
                    className="max-w-3xl"
                >
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.22em] text-[#B49A68]">
                        WHY HEAVEN
                    </p>
                    <h2 className="serif-heading max-w-3xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                        Because the best furniture feels like it was{' '}
                        <span className="text-[#B49A68]">always meant to be there.</span>
                    </h2>
                    <p className="sans-body mt-7 max-w-xl text-base leading-relaxed text-[#172522]/70 md:text-lg">
                        We bring together thoughtful design, careful craftsmanship, and customization to create furniture that works with your space, not against it.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={revealVariants}
                    className="mt-20 border-t border-[#172522]/20 pt-8 md:mt-24 md:flex md:gap-16"
                >
                    <p className="sans-body mb-6 flex-shrink-0 text-xs font-semibold tracking-[0.2em] text-[#B49A68] md:mb-0 md:w-48">
                        WHY CUSTOMERS CHOOSE US
                    </p>
                    <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                        {trustPoints.map((point) => (
                            <p key={point} className="sans-body border-l border-[#B49A68]/60 pl-4 text-sm leading-relaxed text-[#172522]/70">
                                {point}
                            </p>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
                    }}
                    className="mt-20 border-t border-[#172522]/25 md:mt-24"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {principles.map((principle, index) => {
                            const isActive = activePrinciple === index;
                            const isLastDesktopColumn = index === principles.length - 1;

                            return (
                                <motion.button
                                    key={principle.number}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActivePrinciple(index)}
                                    onMouseEnter={() => setActivePrinciple(index)}
                                    onFocus={() => setActivePrinciple(index)}
                                    variants={revealVariants}
                                    className={`group relative min-w-0 border-b border-[#172522]/20 py-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#B49A68] md:px-6 md:py-9 md:first:pl-0 md:[&:nth-child(-n+2)]:border-b lg:border-b-0 lg:py-10 lg:first:pl-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:first-child)]:pl-8 ${isLastDesktopColumn ? 'border-b-0' : ''}`}
                                >
                                    <span
                                        className={`sans-body block text-xs tracking-[0.14em] transition-colors duration-300 ${isActive ? 'text-[#B49A68]' : 'text-[#172522]/45'
                                            }`}
                                    >
                                        {principle.number}
                                    </span>
                                    <span
                                        className={`serif-heading mt-5 block text-2xl leading-none transition-colors duration-300 ${isActive ? 'text-[#172522]' : 'text-[#172522]/60 group-hover:text-[#172522]'
                                            }`}
                                    >
                                        {principle.title}
                                    </span>
                                    <span className="sans-body mt-4 block max-w-xs text-sm leading-relaxed text-[#172522]/65">
                                        {principle.description}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className={`absolute bottom-0 left-0 h-px bg-[#B49A68] transition-all duration-300 md:left-6 md:right-6 lg:bottom-0 lg:left-8 lg:right-8 ${isActive ? 'opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-70'
                                            } ${index === 0 ? 'md:left-0 lg:left-0' : ''} ${isLastDesktopColumn ? 'md:right-0 lg:right-0' : ''}`}
                                    />
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={revealVariants}
                    className="mt-20 border-t border-[#172522]/20 pt-8 md:mt-28 md:flex md:items-center md:justify-between md:gap-12"
                >
                    <p className="sans-body text-xs font-semibold tracking-[0.2em] text-[#B49A68]">
                        READY TO CREATE SOMETHING OF YOUR OWN?
                    </p>
                    <a
                        href="#contact"
                        className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-[#B49A68] transition-colors duration-300 hover:text-[#172522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68] md:mt-0"
                    >
                        START YOUR PROJECT
                        <motion.span
                            aria-hidden="true"
                            className="inline-block"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                        >
                            →
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyHeaven;
