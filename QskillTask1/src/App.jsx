import './App.css';
import Translator from './component/translator.jsx';
import StringGenerator from './component/string.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <nav className="bg-gray-800 px-2 text-zinc-950 flex justify-center gap-3 sm:px-4 py-2.5  dark:bg-gray-900">
          <button className="bg-blue-500 p-2 font-medium shadow-sm  text-white bold rounded-xl hover:bg-blue-600"><Link to="/translator" >Translator</Link></button>
          <br />
          <button className="bg-blue-500 p-2 font-medium shadow-sm text-white bold rounded-xl hover:bg-blue-600"><Link to="/string">String Generator</Link></button>
        </nav>

        {/* the routed section which will change */}
        <section className=" bg-gray-200 h-120hv  px-2 sm:px-4 py-6">
          <Routes>
            <Route path="/translator" element={<Translator />} />
            <Route path="/string" element={<StringGenerator />} />
          </Routes>
        </section>

        <footer className="">
        <p className="font-semibold ml-3"> In this one project ,i have done all the three tasks together .</p>
        <p className="font-semibold ml-3"> 1 , Translator : takes input in english and translates it in another language <br /> 2 , Random String Generator : takes the length in input and generate random string with that length <br /> 3 , Client Side Routing : by Switching the page between translator and generator</p>
        </footer>
      </BrowserRouter>


    </>
  )
}

export default App
