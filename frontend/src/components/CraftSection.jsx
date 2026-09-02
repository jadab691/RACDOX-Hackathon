import { useState } from 'react';
import { motion } from 'framer-motion';
import MouseFollowImage from './MouseFollowImage';

const CRAFT_IMAGE = '/images/heaven-craft.jpg';
const CRAFT_IMAGE_FALLBACK = '/images/heaven-studio.jpg';

const craftStages = [
    {
        number: '01',
        title: 'CONCEPT',
        description: 'Every piece begins with understanding the space, the proportions, and the way it will be used.',
    },
    {
        number: '02',
        title: 'CRAFT',
        description: 'Materials are shaped and assembled with care, balancing structure, comfort, and longevity.',
    },
    {
        number: '03',
        title: 'FINISH',
        description: 'Textures, surfaces, and details are refined until every element feels intentional.',
    },
    {
        number: '04',
        title: 'DELIVERY',
        description: 'Your finished piece leaves our studio ready to become part of your space.',
    },
];

const revealVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const CraftSection = () => {
    const [activeStage, setActiveStage] = useState(0);

    return (
        <section className="w-full overflow-hidden bg-[#F4F0E8] py-20 text-[#172522] md:py-28 lg:py-36">
            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={revealVariants}
                        className="order-1 lg:col-start-2 lg:row-start-1"
                    >
                        <p className="sans-body mb-5 text-xs font-semibold tracking-[0.22em] text-[#B49A68]">
                            THE CRAFT
                        </p>
                        <h2 className="serif-heading max-w-xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                            Good furniture begins long before it enters your home.
                        </h2>
                        <p className="sans-body mt-7 max-w-lg text-base leading-relaxed text-[#172522]/70 md:text-lg">
                            From the first idea to the final finish, every Heaven piece is shaped with attention to proportion, material, detail, and the way it will live in your space.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={revealVariants}
                        className="order-2 aspect-[4/5] min-h-[420px] w-full overflow-hidden bg-[#DDD4C5] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-[4/5]"
                    >
                        <MouseFollowImage
                            src={CRAFT_IMAGE}
                            alt="Furniture craftsmanship detail in the Heaven studio"
                            className="h-full w-full object-cover"
                            onError={(event) => {
                                event.currentTarget.src = CRAFT_IMAGE_FALLBACK;
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                        }}
                        className="order-3 lg:col-start-2 lg:row-start-2"
                    >
                        <div className="border-t border-[#172522]/20">
                            {craftStages.map((stage, index) => {
                                const isActive = activeStage === index;

                                return (
                                    <motion.button
                                        key={stage.number}
                                        type="button"
                                        aria-pressed={isActive}
                                        onClick={() => setActiveStage(index)}
                                        onMouseEnter={() => setActiveStage(index)}
                                        onFocus={() => setActiveStage(index)}
                                        variants={revealVariants}
                                        className="group relative flex w-full gap-5 border-b border-[#172522]/20 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#B49A68] md:gap-8 md:py-7"
                                    >
                                        <span
                                            className={`sans-body w-8 flex-shrink-0 text-sm tracking-[0.12em] transition-colors duration-300 ${isActive ? 'text-[#B49A68]' : 'text-[#172522]/45'
                                                }`}
                                        >
                                            {stage.number}
                                        </span>
                                        <span className="flex-1">
                                            <span
                                                className={`serif-heading block text-2xl leading-none transition-colors duration-300 ${isActive ? 'text-[#172522]' : 'text-[#172522]/55 group-hover:text-[#172522]'
                                                    }`}
                                            >
                                                {stage.title}
                                            </span>
                                            <span className="sans-body mt-3 block max-w-md text-sm leading-relaxed text-[#172522]/65">
                                                {stage.description}
                                            </span>
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className={`mt-2 h-px flex-shrink-0 bg-[#B49A68] transition-all duration-300 ${isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-70'
                                                }`}
                                        />
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CraftSection;
