import React from 'react'

const nav = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-20">

                    <div className=" flex items-center gap-8">

                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer">

                            <div className="bg-amber-600  p-2.5 rounded-xl shadow-lg shadow-orange-500/20">
                                <span className="text-xl font-black text-slate-900 tracking-tighter">CN</span>
                            </div>
                            
                            <span className="text-xl font-bold tracking-tight bg-amber-600  bg-clip-text text-transparent">
                                <a href="#hero">
                                coding<span className="text-orange-500 font-extrabold">ninjas</span>
                                </a>
                            </span>
                        </div>

                        {/* Items */}
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200">
                            <a href="#courses" className="hover:text-orange-500 ">For Working Professionals </a>
                            <a href="#courses" className="hover:text-orange-500 transition-colors">For College Students</a>

                        </div>
                    </div>

                    {/* Login */}
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-semibold bg-amber-600  text-slate-950 px-5 py-2.5 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-orange-500/10">
                            Login
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default nav