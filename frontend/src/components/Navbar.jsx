import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY.current;

            if (currentScrollY <= 8) {
                setIsHidden(false);
            } else if (Math.abs(scrollDelta) >= 4) {
                setIsHidden(scrollDelta > 0);

                if (scrollDelta > 0 && isOpen) {
                    setIsOpen(false);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const navItems = [
        { label: 'COLLECTIONS', href: '#collections' },
        { label: 'ABOUT', href: '#about' },
        { label: 'CONTACT', href: '#contact' },
    ];

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
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? '-100%' : 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-[#B49A68]/15 bg-[#3A2C24]/30 backdrop-blur-[5px]"
        >
            <div className="w-full px-8 md:px-16 lg:px-20 py-6 md:py-8 flex items-center justify-between ">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex-shrink-0"
                >
                    <h1 className="serif-heading text-2xl md:text-3xl tracking-tight" style={{ color: '#F4F0E8' }}>
                        HEAVEN
                    </h1>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hidden md:flex items-center gap-12"
                >
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            variants={itemVariants}
                            href={item.href}
                            className="sans-body text-xs tracking-widest transition-colors duration-300 hover:text-amber-600"
                            style={{ color: '#F4F0E8' }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#F4F0E8' }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-[#B49A68]/15 bg-[#3A2C24]/75 backdrop-blur-[5px]"
                >
                    <div className="px-8 py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="sans-body text-sm tracking-widest py-2 transition-colors duration-300 hover:text-amber-600"
                                style={{ color: '#F4F0E8' }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
