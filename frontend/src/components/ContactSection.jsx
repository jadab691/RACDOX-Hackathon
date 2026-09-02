import { useState } from 'react';
import { motion } from 'framer-motion';

const projectTypes = [
    'Living Room',
    'Bedroom',
    'Dining',
    'Office & Study',
    'Bespoke / Custom',
];

const initialForm = {
    name: '',
    email: '',
    projectType: '',
    message: '',
};

const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const ContactSection = () => {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((currentForm) => ({ ...currentForm, [name]: value }));
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setForm(initialForm);
    };

    return (
        <section
            id="contact"
            className="w-full overflow-hidden bg-[#172522] py-24 text-[#F4F0E8] md:py-32 lg:py-40"
        >
            <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(280px,0.86fr)_minmax(420px,1.14fr)] lg:gap-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={revealVariants}
                    >
                        <p className="sans-body mb-5 text-xs font-semibold tracking-[0.22em] text-[#B49A68]">
                            START YOUR PROJECT
                        </p>
                        <h2 className="serif-heading max-w-xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                            Have a space in mind?
                            <span className="mt-3 block text-[#B49A68]">Let&apos;s create something that belongs there.</span>
                        </h2>
                        <p className="sans-body mt-8 max-w-md text-base leading-relaxed text-[#DDD4C5] md:text-lg">
                            Tell us a little about your space, your needs, or the piece you&apos;ve been imagining. We&apos;ll start from there.
                        </p>

                        <div className="mt-16 border-t border-[#DDD4C5]/25 pt-6 text-sm text-[#DDD4C5] md:mt-24">
                            <p className="sans-body text-xs font-semibold tracking-[0.18em] text-[#B49A68]">
                                HEAVEN FURNITURE MART
                            </p>
                            <p className="sans-body mt-4 leading-relaxed">
                                Agrabad Access Road
                                <br />
                                Chattogram, Bangladesh
                            </p>
                            <a href="tel:+8801960481983" className="sans-body mt-5 block text-sm text-[#DDD4C5] transition-colors duration-300 hover:text-[#B49A68]">+880 1960-481983</a>
                            <a href="mailto:heavenfurnituremart@gmail.com" className="sans-body mt-2 block break-words text-sm text-[#DDD4C5] transition-colors duration-300 hover:text-[#B49A68]">heavenfurnituremart@gmail.com</a>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={revealVariants}
                        className="flex flex-col gap-8 rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
                    >
                        <div>
                            <label htmlFor="project-name" className="sans-body mb-3 block text-xs font-semibold tracking-[0.18em] text-[#B49A68]">
                                NAME
                            </label>
                            <input
                                id="project-name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="sans-body w-full border-0 border-b border-[#DDD4C5]/35 bg-white/[0.02] px-0 py-3 text-base text-[#F4F0E8] placeholder:text-[#DDD4C5]/55 transition-colors duration-300 focus:border-[#B49A68]/70 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="project-email" className="sans-body mb-3 block text-xs font-semibold tracking-[0.18em] text-[#B49A68]">
                                EMAIL
                            </label>
                            <input
                                id="project-email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                required
                                className="sans-body w-full border-0 border-b border-[#DDD4C5]/35 bg-white/[0.02] px-0 py-3 text-base text-[#F4F0E8] placeholder:text-[#DDD4C5]/55 transition-colors duration-300 focus:border-[#B49A68]/70 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="project-type" className="sans-body mb-3 block text-xs font-semibold tracking-[0.18em] text-[#B49A68]">
                                PROJECT TYPE
                            </label>
                            <select
                                id="project-type"
                                name="projectType"
                                value={form.projectType}
                                onChange={handleChange}
                                required
                                className="sans-body w-full border-0 border-b border-[#DDD4C5]/35 bg-white/[0.02] px-0 py-3 text-base text-[#F4F0E8] transition-colors duration-300 focus:border-[#B49A68]/70 focus:outline-none"
                            >
                                <option value="" disabled>
                                    Select a project type
                                </option>
                                {projectTypes.map((projectType) => (
                                    <option key={projectType} value={projectType}>
                                        {projectType}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="project-message" className="sans-body mb-3 block text-xs font-semibold tracking-[0.18em] text-[#B49A68]">
                                MESSAGE
                            </label>
                            <textarea
                                id="project-message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your space or what you&apos;re looking to create..."
                                required
                                rows="5"
                                className="sans-body w-full resize-y border-0 border-b border-[#DDD4C5]/35 bg-white/[0.02] px-0 py-3 text-base leading-relaxed text-[#F4F0E8] placeholder:text-[#DDD4C5]/55 transition-colors duration-300 focus:border-[#B49A68]/70 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col items-start gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 rounded-lg border border-[#B49A68]/80 bg-[#B49A68]/10 px-5 py-3 text-xs font-semibold tracking-[0.16em] text-[#B49A68] shadow-[0_0_14px_rgba(180,154,104,0.16)] backdrop-blur-md transition-colors duration-300 hover:bg-[#B49A68] hover:text-[#172522] hover:shadow-[0_0_20px_rgba(180,154,104,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A68]"
                            >
                                SEND PROJECT ENQUIRY
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                                    →
                                </span>
                            </button>
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    role="status"
                                    aria-live="polite"
                                    className="max-w-xs text-sm leading-relaxed text-[#DDD4C5]"
                                >
                                    <p>Thank you. Your project enquiry has been received.</p>
                                    <p className="mt-1 text-[#DDD4C5]/70">We&apos;ll be in touch to discuss your space.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
