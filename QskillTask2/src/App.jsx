import React, { useState } from 'react';
import Nav from './assets/components/nav.jsx';
import Hero from './assets/components/hero.jsx';
import Why from './assets/components/why.jsx';
import Course from './assets/components/course.jsx';
import './App.css';


function App() {


  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans antialiased selection:bg-orange-500 selection:text-white">

      <Nav />
      <Hero />
      <Course />
      <Why />

      <footer>
        
        <div className="bg-black border-t border-slate-900 py-12 text-center">
          <h2 className="p-4 text-5xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent transition-all duration-300 hover:from-slate-800 hover:to-orange-700">
            CODINGNINJAS
          </h2>
        </div>

        <div className="bg-slate-950 border-t border-slate-900 py-12 text-center text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>@{new Date().getFullYear()} Coding Ninjas Clone Website . </p>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default App;