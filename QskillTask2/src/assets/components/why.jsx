import React from 'react'


const why = () => {
    return (
        <section className="py-20 bg-slate-950 border-y border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Why Choose Us?
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-700/60 transition-colors">
                        <h3 className="text-lg font-bold text-white">Master key AI tools in your domain</h3>
                        <p className="mt-2 text-sm text-orange-400 leading-relaxed">Lear the tools that matter, integrate them into your workflow.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-700/60 transition-colors">
                        <h3 className="text-lg font-bold text-white">Expert faculty</h3>
                        <p className="mt-2 text-sm text-orange-400 leading-relaxed">Lear the tools that matter, integrate them into your workflow.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-700/60 transition-colors">
                        <h3 className="text-lg font-bold text-white">Get instant Doubt Support</h3>
                        <p className="mt-2 text-sm text-orange-400 leading-relaxed">24/7 support with our Teaching assistants & Ninja AI</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-700/60 transition-colors">
                        <h3 className="text-lg font-bold text-white">Interview prep like a pro with AI</h3>
                        <p className="mt-2 text-sm text-orange-400 leading-relaxed">Practice interviews, refine your resume, and improve with AI-powered feedback.</p>
                    </div>

                    

                </div>
            </div>
        </section>
    )
}

export default why