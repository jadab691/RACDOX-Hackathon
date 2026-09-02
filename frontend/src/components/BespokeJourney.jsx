import { useState } from 'react';
import { motion } from 'framer-motion';

const journeyStages = [
    {
        number: '01',
        title: 'DISCOVER',
        description: 'Tell us about your space, needs, and inspiration.',
    },
    {
        number: '02',
        title: 'DESIGN',
        description: 'We shape the concept around your dimensions, lifestyle, and vision.',
    },
    {
        number: '03',
        title: 'REFINE',
        description: 'Choose materials, finishes, proportions, and details.',
    },
    {
        number: '04',
        title: 'CREATE',
        description: 'Your furniture is crafted and prepared for its place in your space.',
    },
];

const introVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const BespokeJourney = () => {
    const [activeStage, setActiveStage] = useState(0);
    const progress = `${(activeStage / (journeyStages.length - 1)) * 100}%`;

    return (
        <section className="w-full overflow-hidden bg-[#F4F0E8] py-20 text-[#172522] md:py-28 lg:py-36">
            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={introVariants}
                    className="max-w-2xl"
                >
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.22em] text-[#B49A68]">
                        THE BESPOKE JOURNEY
                    </p>
                    <h2 className="serif-heading max-w-xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                        Your vision. Our craft. One piece made for you.
                    </h2>
                    <p className="sans-body mt-7 max-w-lg text-base leading-relaxed text-[#172522]/70 md:text-lg">
                        From the first conversation to the final piece, we shape every decision around your space, your needs, and the way you want to live.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
                    }}
                    className="relative mt-20 md:mt-24"
                >
                    <div
                        aria-hidden="true"
                        className="absolute left-3 top-4 bottom-4 w-px bg-[#172522]/15 lg:left-[12.5%] lg:right-[12.5%] lg:top-4 lg:bottom-auto lg:h-px lg:w-auto"
                    >
                        <motion.div
                            className="h-full w-full origin-top bg-[#B49A68] lg:hidden"
                            initial={{ height: 0 }}
                            whileInView={{ height: progress }}
                            viewport={{ once: true }}
                            animate={{ height: progress }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                        />
                        <motion.div
                            className="hidden h-full w-full origin-left bg-[#B49A68] lg:block"
                            initial={{ width: 0 }}
                            whileInView={{ width: progress }}
                            viewport={{ once: true }}
                            animate={{ width: progress }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-8">
                        {journeyStages.map((stage, index) => {
                            const isActive = activeStage === index;

                            return (
                                <motion.button
                                    key={stage.number}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveStage(index)}
                                    onMouseEnter={() => setActiveStage(index)}
                                    onFocus={() => setActiveStage(index)}
                                    variants={introVariants}
                                    className="group relative flex gap-6 border-b border-[#172522]/15 py-7 text-left first:pt-0 last:border-b-0 lg:block lg:border-b-0 lg:py-0 lg:first:pt-0"
                                >
                                    <span
                                        className={`relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[#F4F0E8] sans-body text-xs tracking-[0.08em] transition-colors duration-300 lg:mb-8 ${isActive ? 'text-[#B49A68]' : 'text-[#172522]/45'
                                            }`}
                                    >
                                        {stage.number}
                                    </span>
                                    <span className="block flex-1">
                                        <span
                                            className={`serif-heading block text-3xl leading-none transition-colors duration-300 ${isActive ? 'text-[#172522]' : 'text-[#172522]/55 group-hover:text-[#172522]'
                                                }`}
                                        >
                                            {stage.title}
                                        </span>
                                        <span className="sans-body mt-4 block max-w-xs text-sm leading-relaxed text-[#172522]/65">
                                            {stage.description}
                                        </span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className={`absolute right-0 top-9 h-px bg-[#B49A68] transition-all duration-300 lg:bottom-[-2.5rem] lg:top-auto ${isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-70'
                                            }`}
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
                    variants={introVariants}
                    className="mt-24 border-t border-[#172522]/20 pt-10 md:mt-32 md:flex md:items-end md:justify-between md:gap-12"
                >
                    <div>
                        <p className="sans-body mb-4 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">
                            DESIGNED AROUND YOU / CRAFTED WITH INTENTION
                        </p>
                        <h3 className="serif-heading text-4xl leading-none sm:text-5xl">
                            Have a space in mind?
                        </h3>
                        <p className="sans-body mt-4 text-base text-[#172522]/70">
                            Let&apos;s create something that belongs there.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="sans-body mt-8 inline-flex flex-shrink-0 items-center gap-3 text-sm font-semibold tracking-[0.16em] text-[#B49A68] transition-colors duration-300 hover:text-[#172522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68] md:mt-0"
                    >
                        START A CONVERSATION <span aria-hidden="true">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BespokeJourney;
