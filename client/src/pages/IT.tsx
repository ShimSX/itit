import React from 'react';

const IT: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      {/* Top Red Banner */}
      <div className="bg-red-500 text-white py-3 text-center uppercase font-bold text-base tracking-wide">
        Limited Time Offer
      </div>

      {/* Header with Fire Emojis */}
      <header className="py-4 text-center bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-2xl md:text-3xl font-bold uppercase text-gray-900">
            🔥 Get your own Shimon Shnaider! 🔥
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 max-w-6xl pb-8">
        <section className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-500 uppercase">NEED BETTER IT??</h2>
          {/* YouTube Video Embed - Placeholder; replace VIDEO_ID with exact from page source */}
          <div className="mb-6 mx-auto max-w-4xl relative aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder; update to actual promo video ID
              title="Watch this video for some MUST SEE INFORMATION!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-2xl mb-8 uppercase font-semibold">Watch this video for some MUST SEE INFORMATION!</p>
          <div className="bg-yellow-400 text-black p-6 inline-block rounded-lg mb-6 mx-auto max-w-md">
            <p className="font-semibold text-lg mb-2 uppercase">NO SUBSCRIPTION</p>
            <p className="text-3xl font-bold uppercase">JUST $19.99 ONE TIME & IT'S YOURS FOREVER</p>
          </div>
          {/* Green CTA Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-md text-xl font-bold uppercase transition-colors duration-300 mb-6 inline-block">
            YES! I WANT TO UNFUCK MY LIFE &gt;
          </button>
          {/* Guarantee Badge and Payment Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold inline-block">
              100% Money Back Guarantee No questions asked
            </div>
            <img src="/images/card-icons.png" alt="Payment icons: Visa, Mastercard, Amex, PayPal" className="h-8 w-auto" />
          </div>
        </section>

        {/* Features Grid: 1-col mobile, 2-col desktop */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Track Weight Feature */}
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-3xl font-bold mb-4 text-red-500 uppercase">TRACK ALL OF YOUR WEIGHT</h3>
            <img src="/images/gym-bench-press.jpg" alt="Guy on bench press in gym" className="w-full h-auto rounded mb-4" /> {/* Gym photo */}
            <img src="/images/track-weight-screenshot.jpg" alt="App screenshot: Logging incline dumbbell press weights" className="w-full h-auto rounded mb-4" /> {/* App screenshot */}
            <p className="text-gray-700 mb-2 text-lg leading-relaxed">
              If you've tried carrying around a notebook in the gym then you too have lost several notebooks...
            </p>
            <p className="text-gray-700 mb-2 text-lg leading-relaxed font-semibold">
              It's a pain in the dick
            </p>
            <p className="text-gray-700 mb-2 text-lg leading-relaxed">
              You can now log all of your weights as well as look back the weights you used during previous sessions
            </p>
            <p className="text-gray-700 mb-2 text-lg leading-relaxed">
              You can also log notes about how disappointed you are in yourself like:
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-red-500 pl-4 my-2">
              "You were a real piece of shit today dan... not your best"
            </blockquote>
          </article>

          {/* Exercise Library Feature */}
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-3xl font-bold mb-4 text-red-500 uppercase">FULL EXERCISE LIBRARY</h3>
            <img src="/images/exercise-library-screenshot.jpg" alt="App screenshot: Muscle groups and exercises list" className="w-full h-auto rounded mb-4" /> {/* App screenshot */}
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Ever walk in the gym and forget all the exercises you've been doing for the past 20 years....
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Instead of doing the same thing for the 1000th time, look in the exercise library and try something new... or stay small, idc.
            </p>
          </article>
        </section>

        {/* Program Details Section */}
        <section className="mb-8">
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-500 uppercase">YOU GET THE UPDATED & ORIGINAL PROGRAM</h2>
            <p className="text-gray-700 mb-4 text-lg">I've gone through and updated the hypertrophy program:</p>
            <ul className="text-left max-w-2xl mx-auto mb-6 space-y-2 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-bold">&gt;</span>
                <span>Added New Exercises that I've determined after testing and training work the best</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-bold">&gt;</span>
                <span>Turned it into an 8 Week Program so you can kick your ass twice as long</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-bold">&gt;</span>
                <span>Increased the load lifted on exercises that still allowed for the majority of the movement to stay with the targeted muscle</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <img src="/images/guy-photo-1.jpg" alt="Guy photo for updated program" className="absolute inset-0 w-full h-full object-cover rounded" />
                <div className="relative bg-white p-2 rounded shadow-md">
                  <h4 className="text-red-500 font-bold uppercase text-sm mb-1">UPDATED</h4>
                  <p className="text-sm mb-1">Backed By Science</p>
                  <p className="text-xs font-semibold">Hypertrophy 8 WEEK Program</p>
                  <div className="flex text-xs mt-2">
                    <span className="mr-1">Overview</span>
                    <span className="mr-1">Workouts</span>
                    <span>Resources</span>
                    <span className="ml-auto">Equipment</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/images/guy-photo-2.jpg" alt="Guy photo for original program" className="absolute inset-0 w-full h-full object-cover rounded" />
                <div className="relative bg-white p-2 rounded shadow-md">
                  <h4 className="text-red-500 font-bold uppercase text-sm mb-1">ORIGINAL</h4>
                  <p className="text-sm mb-1">Backed By Science</p>
                  <p className="text-xs font-semibold">Hypertrophy Program</p>
                  <div className="flex text-xs mt-2">
                    <span className="mr-1">Overview</span>
                    <span className="mr-1">Workouts</span>
                    <span>Resources</span>
                    <span className="ml-auto">Equipment</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Final Pricing Section */}
        <section className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-500 uppercase">AGAIN... ONLY $19.99</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed max-w-3xl mx-auto">
            I tried building a app that would have all the programs in one place but it was a subscription and...
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed max-w-3xl mx-auto">
            I hate subscriptions.. you hate them.. they never end well, also I want everyone to be able to afford these.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
            Did you ever go door to door as a kid and sell candy bars.. just do that as a creepy old adult and boom you got enough money for the program.
          </p>
          {/* Green CTA Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-md text-xl font-bold uppercase transition-colors duration-300 inline-block">
            YES! LET'S GROW &gt;
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center text-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          TLGM LLC©2024 Scottsdale, AZ Privacy Policy Terms and conditions
        </div>
      </footer>
    </div>
  );
};

export default IT;