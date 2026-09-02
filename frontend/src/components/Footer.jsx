import { motion } from 'framer-motion';

const exploreLinks = [
    { label: 'Studio', href: '#studio' },
    { label: 'Collections', href: '#collections' },
    { label: 'Design Your Space', href: '#design-your-space' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Bespoke Journey', href: '#bespoke-journey' },
    { label: 'Start Your Project', href: '#contact' },
];

const collectionLinks = [
    { label: 'Living Room', href: '#collections' },
    { label: 'Bedroom', href: '#collections' },
    { label: 'Dining', href: '#collections' },
    { label: 'Office & Study', href: '#collections' },
    { label: 'Bespoke', href: '#collections' },
];

const footerLinkClass = 'transition-colors duration-300 hover:text-[#B49A68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68]';

const Footer = () => (
    <footer className="w-full overflow-hidden bg-[#172522] py-20 text-[#F4F0E8] md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="border-b border-[#DDD4C5]/25 pb-16 md:pb-20"
            >
                <p className="serif-heading text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                    DESIGNED<span className="text-[#B49A68]">.</span>{' '}
                    CRAFTED<span className="text-[#B49A68]">.</span>{' '}
                    CUSTOMIZED<span className="text-[#B49A68]">.</span>
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
                }}
                className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 md:gap-10 md:py-20 lg:grid-cols-[1.25fr_1fr_1fr_1fr]"
            >
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="serif-heading text-3xl">HEAVEN</p>
                    <p className="sans-body mt-4 text-sm text-[#DDD4C5]">Furniture &amp; Interior Styling</p>
                    <p className="sans-body mt-2 text-sm text-[#DDD4C5]/75">Chattogram, Bangladesh</p>
                </motion.div>

                <motion.nav
                    aria-label="Explore"
                    variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">EXPLORE</p>
                    <ul className="sans-body space-y-3 text-sm text-[#F4F0E8]/80">
                        {exploreLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className={footerLinkClass}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </motion.nav>

                <motion.nav
                    aria-label="Collections"
                    variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">COLLECTIONS</p>
                    <ul className="sans-body space-y-3 text-sm text-[#F4F0E8]/80">
                        {collectionLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className={footerLinkClass}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </motion.nav>

                <motion.div
                    variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="sans-body mb-5 text-xs font-semibold tracking-[0.2em] text-[#B49A68]">CONTACT</p>
                    <p className="sans-body text-sm leading-relaxed text-[#DDD4C5]">
                        Agrabad Access Road
                        <br />
                        Chattogram, Bangladesh
                    </p>
                    <a href="tel:+8801960481983" className={`sans-body mt-4 block text-sm text-[#F4F0E8]/80 ${footerLinkClass}`}>
                        +880 1960-481983
                    </a>
                    <a href="mailto:heavenfurnituremart@gmail.com" className={`sans-body mt-2 block break-words text-sm text-[#F4F0E8]/80 ${footerLinkClass}`}>
                        heavenfurnituremart@gmail.com
                    </a>
                    <div className="mt-5 flex gap-5">
                        <a href="https://www.facebook.com/HeavenFurnitureMart" target="_blank" rel="noreferrer" className={`sans-body text-xs tracking-[0.12em] text-[#B49A68] ${footerLinkClass}`}>Facebook</a>
                        <a href="https://www.instagram.com/heaven_furniture_ltd" target="_blank" rel="noreferrer" className={`sans-body text-xs tracking-[0.12em] text-[#B49A68] ${footerLinkClass}`}>Instagram</a>
                        <a href="https://www.youtube.com/@HeavenFurnitureMart" target="_blank" rel="noreferrer" className={`sans-body text-xs tracking-[0.12em] text-[#B49A68] ${footerLinkClass}`}>YouTube</a>
                    </div>
                    <a href="#contact" className={`sans-body mt-5 inline-block text-sm text-[#F4F0E8]/80 ${footerLinkClass}`}>
                        Start a conversation
                    </a>
                </motion.div>
            </motion.div>

            <div className="flex flex-col gap-6 border-t border-[#DDD4C5]/25 pt-6 text-xs text-[#DDD4C5]/70 sm:flex-row sm:items-center sm:justify-between">
                <p className="sans-body">© 2026 Heaven Furniture Mart</p>
                <p className="sans-body">Designed. Crafted. Customized.</p>
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`group sans-body inline-flex items-center gap-2 self-start text-[#DDD4C5]/80 ${footerLinkClass}`}
                >
                    Back to top
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true">↑</span>
                </button>
            </div>
        </div>
    </footer>
);

export default Footer;
