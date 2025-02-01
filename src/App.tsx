import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center min-h-screen">
        <div className="container bg-white p-10 rounded-lg shadow-md w-3/5 border-amber-200">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-5">
            🚀 Launch Your Next-Gen React App: TypeScript, Vite, and Tailwind,🚀
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            Forget the clunky setups and endless configurations! This isn't just
            a template; it's your express lane to building cutting-edge React
            applications. We're talking blazing-fast development with Vite, the
            robustness of TypeScript, the sleek styling power of Tailwind CSS,
            and a complete suite of developer tools – all working together in
            perfect harmony.
          </p>
          <br />
         
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
            Install
          </h2>
          <div className="flex justify-items-center gap-20 w-full">
            <div className="w-94 bg-gray-300 text-center p-2 rounded-md  text-sm text-gray-800 resize-none mb-6">
              {" "}
              <span className="text-gray-800 text-lg font-semibold">
                NPM
              </span>{" "}
              <br />
              npm install{" "}
            </div>
            <div className="w-94 bg-gray-300 text-center p-2 rounded-md  text-sm text-gray-800 resize-none mb-6">
              {" "}
              <span className="text-gray-800 text-lg font-semibold">
                PNPM
              </span>{" "}
              <br />
              pnpm install{" "}
            </div>
            <div className="w-94 bg-gray-300 text-center p-2 rounded-md  text-sm text-gray-800 resize-none mb-6">
              {" "}
              <span className="text-gray-800 text-lg font-semibold">
                YARN
              </span>{" "}
              <br />
              yarn install{" "}
            </div>
          </div>
          <br />
          <a
            href="https://github.com/kweku360/vite-react-tailwind-starter-ts"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            Star on GitHub
          </a>
          <br />
          <br />
          <br />

          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature flex items-start">
              <span className="feature-icon text-2xl text-blue-500 mr-4">
                <i className="fas fa-bolt"></i>
              </span>
              <div className="feature-content">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Lightning-fast HMR
                </h3>
                <p className="text-sm text-gray-700">
                  Vite's instant hot module replacement keeps your development
                  flow smooth and uninterrupted. See your changes in the blink
                  of an eye!
                </p>
              </div>
            </div>
            <div className="feature flex items-start">
              <span className="feature-icon text-2xl text-green-500 mr-4">
                <i className="fas fa-check-circle"></i>
              </span>
              <div className="feature-content">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Type Safety from the Start
                </h3>
                <p className="text-sm text-gray-700">
                  TypeScript catches those pesky errors early, saving you
                  precious debugging time and ensuring a more stable,
                  maintainable codebase.
                </p>
              </div>
            </div>
            <div className="feature flex items-start">
              <span className="feature-icon text-2xl text-yellow-500 mr-4">
                <i className="fas fa-palette"></i>
              </span>
              <div className="feature-content">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Effortless Styling
                </h3>
                <p className="text-sm text-gray-700">
                  Craft beautiful UIs with Tailwind CSS's utility-first
                  approach. Rapidly prototype and customize your designs without
                  writing a single line of custom CSS (unless you want to!).
                </p>
              </div>
            </div>
            <div className="feature flex items-start">
              <span className="feature-icon text-2xl text-indigo-500 mr-4">
                <i className="fas fa-code"></i>
              </span>
              <div className="feature-content">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Code Perfection
                </h3>
                <p className="text-sm text-gray-700">
                  ESLint keeps your code clean and consistent, while Prettier
                  ensures a beautifully formatted codebase. No more style wars!
                </p>
              </div>
            </div>
            <div className="feature flex items-start">
              <span className="feature-icon text-2xl text-red-500 mr-4">
                <i className="fas fa-shield-alt"></i>
              </span>
              <div className="feature-content">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Rock-Solid Testing
                </h3>
                <p className="text-sm text-gray-700">
                  Jest and React Testing Library empower you to write
                  comprehensive tests, ensuring your components are bulletproof
                  and your application is reliable.
                </p>
              </div>
            </div>
            <div className="feature flex items-start">
              <span className="feature-icon text-2xl text-purple-500 mr-4">
                <i className="fas fa-rocket"></i>
              </span>
              <div className="feature-content">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Minimal Footprint, Maximum Impact
                </h3>
                <p className="text-sm text-gray-700">
                  This template is lean and mean, providing only the essentials
                  so you can focus on what matters: building amazing features.
                  No bloat, just pure performance.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <p className="text-sm text-gray-700 mt-8">
            Stop wrestling with complex configurations. This streamlined setup
            gets you coding in seconds, so you can bring your brilliant React
            ideas to life faster than ever before. Get ready to ignite your
            creativity and build stunning, high-performance web applications!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
