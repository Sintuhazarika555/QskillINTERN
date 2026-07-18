import React, { useState, useCallback, useEffect } from 'react';

const stringComp = () => {


    const [length, setLength] = useState(''); //useState hook to store the length of the string to be generated
    const [generatedText, setGeneratedText] = useState(''); 
    const [clickCount ,setClickCount] = useState(0);

    const generateString = useCallback(() => { //useCallback hook is used to re-create the function only if the length changes

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        
        const targetLength = Number(length) || 0;

        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setGeneratedText(result);
    },[length]);

    useEffect(() => { //useEffect hook here ensures it skips the initial page load and only triggers when clickCount changes.
        if (clickCount > 0 ) {
            generateString();
        }
    }, [clickCount, generateString]);

    const handleInputChange =(e) => {
        setLength(e.target.value);
        setClickCount(0);
    };

    return (
        <div className=" bg-gray-200">

            <div className="min-h-screen bg-gray-200 flex items-center justify-center ">
                {/* work section */}
                <section className="border-4 border-gray-500 w-full max-w-4xl bg-gray-900 rounded-xl shadow-md overflow-hidden">

                    {/* label */}
                    <h1 className="border-b-2 border-gray-500 text-2xl font-bold text-gray-300 text-center p-3">RANDOM STRING GENERATOR</h1>

                    {/* input area */}
                    <div className="flex gap-4 justify-center items-center p-3 bg-gray-900">
                        <input
                            type="number"
                            placeholder='Enter length of string'
                            className=" text-gray-500 bg-gray-50 rounded-lg p-3 w-1/3 h-10 resize-none border border-blue-500"
                            value={length}
                            onChange={handleInputChange}
                            
                        />
                        <button 
                        className="bg-blue-500 p-2 font-medium shadow-sm text-white bold rounded-xl hover:bg-blue-600 m-3" 
                        onClick={() => setClickCount(prev => prev + 1)}>
                            Generate</button>
                    </div>

                    {/* output area */}
                    <div className="p-3 bg-gray-900 flex justify-center">
                        <textarea
                            className=" text-gray-500 bg-gray-50 rounded-lg p-3 w-1/2 h-15 resize-none border border-blue-500"
                            value={generatedText || 'Your generated string will appear here...'}
                            readOnly

                        />
                    </div>

                </section>
            </div>
        </div>

    )
}

export default stringComp;