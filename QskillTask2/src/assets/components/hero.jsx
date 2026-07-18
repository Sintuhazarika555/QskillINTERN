import React, { useState } from 'react'

const hero = () => {
    const [formData, setFormData] = useState({
        experience: '',
        interest: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', {...formData });
    };

    return (
        <div id="hero">
            <header className="bg-linear-to-tr from-slate-900 to-slate-1000 relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

                        {/* Left */}
                        <div
                            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
                                Ready to 10x your Career
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                                Give your career an  <br />
                                <span className="bg-linear-to-r from-orange-500 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                                    unfair AI advantage
                                </span>
                            </h1>

                            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                                Learn Data Structures, Algorithms, Web Development, and Data Science from elite tech professionals. Build high-performance software and land your dream tech role.
                            </p>

                        </div>

                        {/* Right */}
                        <div className="h-130 mt-16 lg:mt-0 lg:col-span-6 relative flex justify-center">
                            <div className="relative w-130 max-w-md lg:max-w-none aspect-video bg-linear-to-tr from-blue-900 to-slate-1000 rounded-2xl border border-slate-700/50 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group">

                                {/* experience */}
                                <div className="pt-1">

                                    <label className="block text-sm font-medium text-slate-300 mb-2">Select Experience</label>

                                    <div className="relative">

                                        <select
                                            value={formData.experience}
                                            onChange={handleInputChange}
                                            name="experience"
                                            className="w-full bg-[#1b1f24] text-slate-400 border border-slate-700/80 rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-slate-500 focus:text-slate-200 transition-all text-sm font-medium"
                                        >
                                            <option value="" disabled hidden>Select your options/choices</option>
                                            <option value="WPTR">Working Professional-Technical Roles</option>
                                            <option value="WPNT">Working Professional-Non Technical</option>
                                            <option value="CSFY">College Student - Final YearI</option>
                                            <option value="CSJ">College Student - 1st to pre final year</option>
                                        </select>

                                        {/* SVG Arrow icon */}
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                    </div>

                                </div>
                                {/* topic of interest */}
                                <div className="pt-1">

                                    <label className="block text-sm font-medium text-slate-300 mb-2">Select topic of interest</label>

                                    <div className="relative">

                                        <select
                                            value={formData.interest}
                                            onChange={handleInputChange}
                                            name="interest"
                                            className="w-full bg-[#1b1f24] text-slate-400 border border-slate-700/80 rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-slate-500 focus:text-slate-200 transition-all text-sm font-medium"
                                        >
                                            <option value="" disabled hidden>Select your options/choices</option>
                                            <option value="dsa">Data Structures & Algorithms</option>
                                            <option value="webdev">Full Stack Web Development</option>
                                            <option value="data-science">Data Science & AI</option>
                                        </select>

                                        {/* SVG Arrow icon */}
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                    </div>

                                </div>
                                {/* name */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#191d22] text-white placeholder-slate-600 border border-slate-700/80 rounded-xl px-4 py-3.5 outline-none focus:border-slate-500 transition-all text-sm"
                                    />
                                </div>
                                {/* phone no. */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Phone Number "
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#191d22] text-white placeholder-slate-600 border border-slate-700/80 rounded-xl px-4 py-3.5 outline-none focus:border-slate-500 transition-all text-sm"
                                    />
                                </div>
                                {/* email */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Email Id
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email Id"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#191d22] text-white placeholder-slate-600 border border-slate-700/80 rounded-xl px-4 py-3.5 outline-none focus:border-slate-500 transition-all text-sm"
                                    />
                                </div>
                                {/* submit */}
                                <div className="pt-3">
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="w-full py-4 bg-linear-to-r from-orange-400 to-orange-500 hover:bg-orange-300 active:scale-[0.99] text-white font-bold rounded-xl text-lg tracking-wide transition-all shadow-lg shadow-orange-950/20"
                                    >
                                        Find your course
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </header>
        </div>
    )
}

export default hero