import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MouseFollowImage from './MouseFollowImage';

const spaceData = {
    living: {
        label: 'LIVING ROOM',
        resultLabel: 'living room',
        image: '/images/collection-living.jpg',
    },
    bedroom: {
        label: 'BEDROOM',
        resultLabel: 'bedroom',
        image: '/images/collection-bedroom.jpg',
    },
    dining: {
        label: 'DINING',
        resultLabel: 'dining space',
        image: '/images/collection-dining.jpg',
    },
    office: {
        label: 'OFFICE',
        resultLabel: 'office',
        image: '/images/collection-office.jpg',
    },
};

const styleData = {
    modern: { label: 'MODERN', resultLabel: 'modern' },
    minimal: { label: 'MINIMAL', resultLabel: 'minimal' },
    classic: { label: 'CLASSIC', resultLabel: 'classic' },
    contemporary: { label: 'CONTEMPORARY', resultLabel: 'contemporary' },
};

const finishData = {
    wood: { label: 'NATURAL WOOD', resultLabel: 'natural wood' },
    fabric: { label: 'FABRIC', resultLabel: 'fabric' },
    marble: { label: 'MARBLE', resultLabel: 'marble' },
    mixed: { label: 'MIXED MATERIALS', resultLabel: 'mixed materials' },
};

const selectorVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const SelectionGroup = ({ label, options, value, onChange }) => (
    <div className="rounded-xl border border-[#172522]/10 bg-white/[0.035] p-5 backdrop-blur-md">
        <p className="sans-body mb-5 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">
            {label}
        </p>
        <div className="flex flex-col items-start gap-3">
            {Object.entries(options).map(([id, option]) => (
                <button
                    key={id}
                    type="button"
                    aria-pressed={value === id}
                    onClick={() => onChange(id)}
                    className={`relative rounded-xl border px-4 py-3 text-left font-sans text-sm tracking-[0.16em] backdrop-blur-md transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68] ${value === id ? 'border-[#B49A68]/50 bg-[#B49A68]/15 text-[#172522]' : 'border-[#172522]/10 bg-white/[0.04] text-[#172522]/55 hover:border-[#B49A68]/40 hover:bg-white/[0.08] hover:text-[#172522]'
                        }`}
                >
                    {option.label}
                    <span
                        className={`absolute bottom-0 left-0 h-px bg-[#B49A68] transition-all duration-300 ${value === id ? 'w-full' : 'w-0'
                            }`}
                        aria-hidden="true"
                    />
                </button>
            ))}
        </div>
    </div>
);

const DesignYourSpace = () => {
    const [space, setSpace] = useState('');
    const [style, setStyle] = useState('');
    const [finish, setFinish] = useState('');

    const selectionComplete = space && style && finish;
    const activeSpace = spaceData[space] || spaceData.living;
    const result = selectionComplete
        ? `A bespoke ${spaceData[space].resultLabel} with a ${styleData[style].resultLabel} character and ${finishData[finish].resultLabel} finish.`
        : '';

    return (
        <section className="w-full overflow-hidden bg-[#F4F0E8] py-20 text-[#172522] md:py-28 lg:py-36">
            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
                <div className="mb-16 max-w-2xl md:mb-20">
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.22em] text-[#B49A68]">
                        DESIGN YOUR SPACE
                    </p>
                    <h2 className="serif-heading max-w-xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                        Let&apos;s create something that belongs to you.
                    </h2>
                    <p className="sans-body mt-7 max-w-md text-base leading-relaxed text-[#172522]/70 md:text-lg">
                        Tell us a little about your space, and we&apos;ll begin shaping a piece around the way you live.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(280px,0.72fr)_minmax(420px,1.28fr)] lg:gap-20">
                    <div className="flex flex-col gap-10">
                        <SelectionGroup
                            label="WHAT ARE YOU DESIGNING?"
                            options={spaceData}
                            value={space}
                            onChange={(nextSpace) => {
                                setSpace(nextSpace);
                                setStyle('');
                                setFinish('');
                            }}
                        />

                        <AnimatePresence initial={false}>
                            {space && (
                                <motion.div initial="hidden" animate="visible" variants={selectorVariants}>
                                    <SelectionGroup
                                        label="WHAT FEELS LIKE YOU?"
                                        options={styleData}
                                        value={style}
                                        onChange={(nextStyle) => {
                                            setStyle(nextStyle);
                                            setFinish('');
                                        }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence initial={false}>
                            {style && (
                                <motion.div initial="hidden" animate="visible" variants={selectorVariants}>
                                    <SelectionGroup
                                        label="CHOOSE YOUR FINISH"
                                        options={finishData}
                                        value={finish}
                                        onChange={setFinish}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-12 lg:pt-2">
                        <div className="relative aspect-[4/3] min-h-[280px] w-full overflow-hidden bg-[#DDD4C5] md:aspect-[5/4]">
                            <AnimatePresence mode="wait">
                                <MouseFollowImage
                                    key={activeSpace.image}
                                    src={activeSpace.image}
                                    alt={`${activeSpace.label.toLowerCase()} furniture interior`}
                                    className="h-full w-full object-cover"
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    onError={(event) => {
                                        event.currentTarget.src = '/images/furniture-hero.jpg';
                                    }}
                                />
                            </AnimatePresence>
                        </div>

                        <AnimatePresence initial={false}>
                            {selectionComplete && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={selectorVariants}
                                    className="border-t border-[#172522]/20 pt-8"
                                >
                                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">
                                        YOUR SPACE, YOUR WAY.
                                    </p>
                                    <p className="serif-heading max-w-lg text-3xl leading-tight md:text-4xl">
                                        {result}
                                    </p>
                                    <a
                                        href="#contact"
                                        className="sans-body mt-8 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-[#B49A68] transition-colors duration-300 hover:text-[#172522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68]"
                                    >
                                        START YOUR PROJECT <span aria-hidden="true">→</span>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignYourSpace;
