import { motion } from 'framer-motion';

const milestones = [
    { year: '2020', detail: 'Founded by Abul Kalam Bhuiyan' },
    { year: '2021', detail: 'Agrabad showroom opened' },
    { year: '2024-25', detail: 'Exhibited at the International Furniture Fair, Chattogram' },
    { year: '2025', detail: 'Became a member of the Chamber of Commerce' },
    { year: '2026', detail: 'Nationwide BFIOA recognition' },
];

const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const AboutSection = () => (
    <section id="about" className="w-full overflow-hidden bg-[#F4F0E8] py-20 text-[#172522] md:py-28 lg:py-36">
        <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(280px,0.85fr)_minmax(420px,1.15fr)] lg:gap-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={revealVariants}
                >
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.22em] text-[#B49A68]">
                        ABOUT HEAVEN
                    </p>
                    <h2 className="serif-heading max-w-xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                        Furniture made to feel like it belongs.
                    </h2>
                    <p className="sans-body mt-8 max-w-md text-base leading-relaxed text-[#172522]/70 md:text-lg">
                        Heaven Furniture Mart is a bespoke furniture and interior styling studio in Chattogram. We design and craft sofas, beds, dining sets, office pieces, and custom furniture around the way people actually live.
                    </p>
                    <blockquote className="mt-14 max-w-md border-l border-[#B49A68] pl-6 md:mt-20">
                        <p className="serif-heading text-2xl leading-tight md:text-3xl">
                            &ldquo;At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.&rdquo;
                        </p>
                        <cite className="sans-body mt-5 block text-xs not-italic tracking-[0.14em] text-[#172522]/60">
                            ABUL KALAM BHUIYAN, MANAGING DIRECTOR
                        </cite>
                    </blockquote>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={revealVariants}
                >
                    <div className="grid grid-cols-1 border-t border-[#172522]/20 sm:grid-cols-2">
                        <div className="border-b border-[#172522]/20 py-6 sm:border-r sm:pr-8">
                            <p className="sans-body text-xs font-semibold tracking-[0.2em] text-[#B49A68]">CATEGORY</p>
                            <p className="sans-body mt-4 text-base leading-relaxed">Luxury / Bespoke Furniture &amp; Interior Styling</p>
                        </div>
                        <div className="border-b border-[#172522]/20 py-6 sm:pl-8">
                            <p className="sans-body text-xs font-semibold tracking-[0.2em] text-[#B49A68]">FOUNDED</p>
                            <p className="sans-body mt-4 text-base leading-relaxed">2020, by Abul Kalam Bhuiyan</p>
                        </div>
                        <div className="border-b border-[#172522]/20 py-6 sm:border-r sm:pr-8">
                            <p className="sans-body text-xs font-semibold tracking-[0.2em] text-[#B49A68]">SHOWROOM</p>
                            <p className="sans-body mt-4 text-base leading-relaxed">Agrabad Access Road<br />Chattogram, Bangladesh</p>
                        </div>
                        <div className="border-b border-[#172522]/20 py-6 sm:pl-8">
                            <p className="sans-body text-xs font-semibold tracking-[0.2em] text-[#B49A68]">CONTACT</p>
                            <a href="tel:+8801960481983" className="sans-body mt-4 block text-base transition-colors duration-300 hover:text-[#B49A68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68]">+880 1960-481983</a>
                            <a href="mailto:heavenfurnituremart@gmail.com" className="sans-body mt-2 block break-words text-base transition-colors duration-300 hover:text-[#B49A68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68]">heavenfurnituremart@gmail.com</a>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-[#172522]/20 pb-6">
                        <a href="https://www.facebook.com/HeavenFurnitureMart" target="_blank" rel="noreferrer" className="sans-body text-xs tracking-[0.16em] text-[#B49A68] transition-colors duration-300 hover:text-[#172522]">FACEBOOK</a>
                        <a href="https://www.instagram.com/heaven_furniture_ltd" target="_blank" rel="noreferrer" className="sans-body text-xs tracking-[0.16em] text-[#B49A68] transition-colors duration-300 hover:text-[#172522]">INSTAGRAM</a>
                        <a href="https://www.youtube.com/@HeavenFurnitureMart" target="_blank" rel="noreferrer" className="sans-body text-xs tracking-[0.16em] text-[#B49A68] transition-colors duration-300 hover:text-[#172522]">YOUTUBE</a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
                className="mt-20 border-t border-[#172522]/20 pt-8 md:mt-28"
            >
                <p className="sans-body mb-8 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">A GROWING STORY</p>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    {milestones.map((milestone) => (
                        <div key={milestone.year} className="border-l border-[#B49A68] pl-5">
                            <p className="serif-heading text-3xl">{milestone.year}</p>
                            <p className="sans-body mt-2 text-sm leading-relaxed text-[#172522]/65">{milestone.detail}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default AboutSection;
