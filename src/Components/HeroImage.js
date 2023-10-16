import React from "react";
import heroImage from "../Assets/banner1.jpg"; // Make sure to import your hero image

export default function HeroImage() {
  return (
    <div className="relative bg-cover bg-center h-[30rem] mb-12">
      <div
        className="bg-cover bg-center h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center">
          
          <h1 className="text-4xl font-bold mb-4">Unsplash</h1>
          <p className="text-lg mb-2">The internet’s source for visuals.</p>
          <p className="text-lg mb-8">Powered by creators everywhere.</p>

          
          <form>
            <label
              htmlFor="hero-search"
              className="text-sm font-medium text-white sr-only"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="hero-search"
                className="block w-[40em] h-10 rounded-full p-2 pl-10 text-sm text-gray-900 bg-white bg-opacity-70 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Search high-resolution images"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>

          <p className="text-sm mt-4">
            Trending: flower wallpapers, backgrounds, happy, love
          </p>
        </div>
      </div>

    </div>
  );
}
