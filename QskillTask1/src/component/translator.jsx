import React, { useState } from 'react';
const key= import.meta.env.VITE_KEY;


const Translator = () => {

    // State management
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('');

    const languages = [
    { name: 'Afrikaans', code: 'af' }, { name: 'Albanian', code: 'sq' }, { name: 'Arabic', code: 'ar' },
    { name: 'Bengali', code: 'bn' }, { name: 'Chinese', code: 'zh' }, { name: 'Croatian', code: 'hr' },
    { name: 'Czech', code: 'cs' }, { name: 'Danish', code: 'da' }, { name: 'Dutch', code: 'nl' },
    { name: 'English', code: 'en' }, { name: 'French', code: 'fr' }, { name: 'German', code: 'de' },
    { name: 'Greek', code: 'el' }, { name: 'Gujarati', code: 'gu' }, { name: 'Hindi', code: 'hi' },
    { name: 'Hungarian', code: 'hu' }, { name: 'Indonesian', code: 'id' }, { name: 'Italian', code: 'it' },
    { name: 'Japanese', code: 'ja' }, { name: 'Kannada', code: 'kn' }, { name: 'Korean', code: 'ko' },
    { name: 'Malayalam', code: 'ml' }, { name: 'Marathi', code: 'mr' }, { name: 'Nepali', code: 'ne' },
    { name: 'Norwegian', code: 'no' }, { name: 'Persian', code: 'fa' }, { name: 'Polish', code: 'pl' },
    { name: 'Portuguese', code: 'pt' }, { name: 'Punjabi', code: 'pa' }, { name: 'Russian', code: 'ru' },
    { name: 'Spanish', code: 'es' }, { name: 'Tamil', code: 'ta' }, { name: 'Telugu', code: 'te' },
    { name: 'Thai', code: 'th' }, { name: 'Turkish', code: 'tr' }, { name: 'Urdu', code: 'ur' },
    { name: 'Vietnamese', code: 'vi' }
];

    //function creation 
    const translateText = async (input, targetLanguage) => {

        if (!input.trim() || !targetLanguage) {
            alert("Please enter text and select a language.");
            return;
        }

        setTranslatedText("Translating...");

        const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'x-rapidapi-key':key
            },
            
            body: JSON.stringify({
                from: 'auto',
                to: targetLanguage,
                text: input
            })
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const errorBody = await response.json();
                console.error("Server Error Details:", errorBody);
                throw new Error(`Server Error: ${response.status}`);
            }

            const result = await response.json();
            console.log("API Response:", result);
            console.log(key);
            
            if (result && result.trans) {
                setTranslatedText(result.trans);
                
            } else {
                setTranslatedText("Error: Translation data not found in response.");
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            setTranslatedText('Error: Failed to translate.');
        }
    };



    return (
        <div className=" bg-gray-200">

            <div className="min-h-screen bg-gray-200 flex items-center justify-center ">
                {/* work section */}
                <section className="border-4 border-gray-500 w-full max-w-4xl bg-gray-900 rounded-xl shadow-md overflow-hidden">

                    {/* label */}
                    <h1 className="border-b-2 border-gray-500 text-2xl font-bold text-gray-300 text-center p-3">TRANSLATOR</h1>

                    {/* section to divide*/}
                    <div className=" grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-600">

                        {/* left container */}
                        <div className="p-6 bg-gray-900">
                            <label className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                                Text (English)
                            </label>
                            <textarea
                                type="text"
                                placeholder='Enter text to translate...'
                                className='border border-gray-300 text-gray-300 rounded-lg p-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />

                            <label className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                                Language to convert
                            </label>

                            {/* Enter language */}
                            {/* <textarea
                                type="text"
                                placeholder='e.g., Spanish, French...'
                                className='border border-gray-300 text-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4'
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            /> */}

                            <div className="relative w-full mb-4">
                                {/* The Select Input */}
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full bg-gray-900 text-blue-200 border border-gray-600 rounded-xl px-5 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-lg"
                                >
                                    <option value="" disabled>Select Language</option>
                                    {languages.map((lang) => (
                                        <option key={lang.code} value={lang.code} className="bg-gray-900">
                                            {lang.name}
                                        </option>
                                    ))}
                                </select>

                                {/* The Custom Arrow (Down Icon) */}
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </div>


                        {/* right container */}
                        <div className="p-6 bg-gray-900 flex flex-col justify-between">

                            <div>


                                {/* output */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                                        Translated Text
                                    </label>
                                    <textarea
                                        className=" text-gray-300 rounded-lg p-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={translatedText || 'Your translation will appear here...'}
                                        readOnly
                                    />
                                </div>
                            </div>

                            {/* generate */}
                            <div className="text-right mt-4">
                                <button
                                    onClick={() => translateText(inputText, language)}
                                    className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-sm'>
                                    Translate
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Translator;