import React from 'react';


function About(){
    return (
      <div className="flex flex-col min-h-screen bg-[#141414] p-5 text-green">
        <div className="px-5 pt-20 mb-5 ">
          <h1 className="text-5xl font-bold text-center uppercase">About</h1>
          
          <div className="flex flex-col gap-3">
            <div className="p-7 flex flex-col gap-3">
              <h2 className="text-3xl font-semibold uppercase">Our Vision</h2>
              <p className="text-gray-400 text-lg">
                Welcome to our mock ecommerce site selling keyboards, where every keyboard showcased is from my collection of keyboards.
              </p>
            </div>
    
            <div className="p-7 flex flex-col gap-3">
              <h2 className="text-3xl font-semibold uppercase">Technology Stack</h2>
              <ul className="text-lg text-gray-400">
                <li ><span className="font-bold text-green">Frontend:</span> React</li>
                <li ><span className="font-bold text-green">Backend:</span> Express.js</li>
                <li ><span className="font-bold text-green">Database:</span> MongoDB</li>
                <li ><span className="font-bold text-green">Content:</span> My keyboard collection</li>
                <li ><span className="font-bold text-green">Images:</span> Hero Photo by <a className="underline" target="_blank" glitch="76" href="https://unsplash.com/@abishvijayan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">76</a> on <a className="underline" glitch="Unsplash" target="_blank" href="https://unsplash.com/photos/a-close-up-of-a-keyboard-Xu4hXhKCfkg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </li>
              </ul>
            </div>
    
            <div className="p-7 flex flex-col gap-3">
              <h2 className="text-3xl font-semibold uppercase">Design Inspiration</h2>
              <p className="text-gray-400 text-lg">
                Hover glitch effect is inspired by <span><a className="underline" glitch="Inbase" target="_blank" href="https://inbase.me/agency">Inbase</a> on <a className="underline" glitch="Stack Sorted" target="_blank" href="https://stacksorted.com/buttons/inbase">Stack Sorted</a></span>
              </p>
            </div>
    
            <div className="p-7 flex flex-col gap-3">
              <h2 className="text-3xl font-semibold uppercase">Our Process</h2>
              <p className="text-gray-400 text-lg">
                Each keyboard on the ecommerce site is from my collection of keyboards I own.
              </p>
            </div>
          </div>
        </div></div>
      );
};

export default About;