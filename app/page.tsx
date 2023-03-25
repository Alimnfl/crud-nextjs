import React from 'react';

export default function Home() {
  return (
    <div className="mx-auto mt-5 border-solid text-gray-300 text-center p-5">
      <h1 className="mx-auto text-5xl font-bold  rounded-xl w-3/4 bg-gray-700 shadow-lg p-5 ">Welcome to Page Edit Data</h1>
      <div className="mt-[110px]">
        <p>You can Access with this button to editing data.</p>
      </div>
      <div className="mt-20 p-2 border-solid bg-blue-800 shadow-md w-1/4 mx-auto rounded-lg my-4">
        <a className="text-2xl " href="http://localhost:3000/products">
          CLICK THIS BUTTON.
        </a>
      </div>
      <footer className="mt-[280px] bg-gray-800 w-full mx-auto my-4">
        <a className="text-2xl" href="https://github.com/Alimnfl?tab=repositories/">
          @alimnfl.
        </a>
      </footer>
    </div>
  );
}
