"use client";

import Image from "next/image";

export default function Home() {
  function toggleDarkMode(): void {
    document.body.classList.toggle("dark");
    console.log(document.body.classList.value);
  }

  return (
    <main className="p-5">
      <h1 className="text-blue-400 text-center text-lg">Hello World</h1>

      <div className="border-2 border-violet-600 bg-violet-200 my-4 p-2 rounded-md w-full">
        <p className="font-extrabold font-mono text-center">A div</p>
      </div>

      {/* Layout */}
      <div className="top-0 fixed bg-red-500 w-10 h-10"></div>

      <div className="flex justify-between">
        <div className="bg-blue-500 rounded-full w-16 h-16"></div>
        <div className="bg-blue-500 rounded-full w-16 h-16"></div>
        <div className="bg-blue-500 rounded-full w-16 h-16"></div>
      </div>

      <div className="gap-2 grid grid-cols-5 mt-3">
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
      </div>

      {/* media queries */}
      <div className="md:block hidden">
        <p>greater than 768px</p>
      </div>

      <div className="max-md:block hidden">
        <p>less than 768px</p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 my-2 px-4 py-2 text-white focus:ring focus:ring-blue-300 focus:outline-none rounded-lg">
        Click Me
      </button>

      {/* Theme dark; */}
      <ul className="space-y-2 bg-white dark:bg-black shadow-lg px-3 py-4 rounded-lg">
        <li className="first:bg-yellow-100 p-2">Item 1</li>
        <li className="odd:bg-blue-200 even:bg-green-200 p-2">Item 1</li>
        <li className="odd:bg-blue-200 even:bg-green-200 p-2">Item 1</li>
        <li className="odd:bg-blue-200 even:bg-green-200 p-2">Item 1</li>
        <li className="odd:bg-blue-200 even:bg-green-200 p-2">Item 1</li>
      </ul>

      <div className="card">
        <h3 className="dark:text-white">this is a text element</h3>
        <p className="text-slate-500 dark:text-slate-400">
          this is an even longer p tag element
        </p>

        <button
          id="toggleDark"
          className="bg-blue-100 hover:bg-blue-500 active:ring-2 active:bg-blue-700 mt-8 rounded-md font-medium text-blue-900 text-sm hover:text-white active:outline-none px-2 py-2"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Custom style */}
      <p className="bg-stone-100 p-[16px] text-[12px] text-chestnut">
        Chestnut Color
      </p>
    </main>
  );
}
