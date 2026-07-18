import React from 'react'
import { useState } from 'react';

const course = () => {

    const [activeTab, setActiveTab] = useState('workers');

    const courseCategories = {
        workers: [
            { title: 'IIT Certification - Data Analytics', rating: '4.9', students: '25k+' },
            { title: 'Job bootcamp - Data Analytics', rating: '4.8', students: '32k+' },
            { title: 'Certification - Generative AI', rating: '4.9', students: '18k+' },
            { title: 'IIT Certification - Generative AI', rating: '4.9', students: '18k+' },
            { title: 'Job bootcamp - Software Development', rating: '4.9', students: '18k+' },
            { title: 'Job bootcamp - Data Science', rating: '4.9', students: '18k+' },

        ],
        students: [
            { title: 'IIT Certification - Data Analytics', rating: '5.0', students: '15k+' },
            { title: 'IIT Certification - Software Development', rating: '4.7', students: '10k+' },
            { title: 'IIT Certification - Data Structures and Algorithms', rating: '4.8', students: '12k+' },
        ],

    };

    return (
        <section id="courses" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Explore Our Courses</h2>
                    <p className="mt-3 text-slate-400">Select your track to go further.</p>
                </div>

                {/* selection */}
                <div className="flex justify-center mb-12">
                    <div className="bg-slate-950 p-1.5 rounded-xl border border-slate-800 flex gap-2">
                        <button
                            onClick={() => setActiveTab('workers')}
                            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'workers' ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/10' : 'text-slate-400 hover:text-white'}`}
                        >
                            For Working Professionals
                        </button>
                        <button
                            onClick={() => setActiveTab('students')}
                            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'students' ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/10' : 'text-slate-400 hover:text-white'}`}
                        >
                            For College Students
                        </button>
                    </div>
                </div>

                {/* courses*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseCategories[activeTab].map((course, index) => (
                        <div key={index} className="bg-slate-950 rounded-2xl border border-gray-600 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">

                            <div className="p-6">
                                <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200 line-clamp-2">
                                    {course.title}
                                </h4>
                                <div className="mt-6 flex items-center justify-between text-sm text-slate-400 border-t border-gray-600 pt-4">
                                    <span>❤️{course.rating} Rating</span>
                                    <span>{course.students} Learners</span>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-800/50 border-t border-slate-900">
                                <button className="w-full py-3 px-4 rounded-xl font-bold text-sm text-center bg-gray-800 hover:bg-orange-500 text-white active:scale-98 transition-all">
                                    View Complete Syllabus
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default course