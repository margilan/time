import React, { useState } from 'react';
import './App.css';

function App() {
  const [timerRunning, setTimerRunning] = useState(false);

  const handleStartStopClick = () => {
    setTimerRunning((prev) => !prev);
  };

  return (
    <div className='bg-red-500 w-full h-screen'>
      <div className="mx-auto w-1/3 py-3">
        <header className='flex justify-between border-b py-4 border-red-300'>
          <div className="logo">
            <span className='text-white cursor-pointer'>Pomofocus</span>
          </div>
          <nav className='flex gap-3'>
            <button className='flex gap-2 items-center bg-red-400 p-2 rounded text-white '>
              <i className="fa-solid fa-chart-column"></i>
              <span>Report</span>
            </button>

            <button className='flex gap-2 items-center bg-red-400 p-2 rounded text-white '>
              <i className="fa-solid fa-gears"></i>
              <span>Settings</span>
            </button>
          </nav>
        </header>
        
        <div className="main-card w-4/4 bg-red-300 mx-auto mt-10 py-5 mb-8 rounded">
          <div className="card-header w-3/4 flex justify-between gap-3 mx-auto">
            <span className='text-slate-100 cursor-pointer text-lg'>Pomodora</span>
            <span className='text-slate-100 cursor-pointer text-lg'>Short break</span>
            <span className='text-slate-100 cursor-pointer text-lg'>Long break</span>
          </div>

          <div className="timer w-3/4 mx-auto">
            <span className="text-9xl font-bold text-slate-100 text-center">20:00</span>
          </div>
          
          <div className="start-button text-center">
            <button 
              className={`bg-red-100 px-12 py-3 rounded mt-8 text-red-500 ${timerRunning ? 'stop' : ''}`}
              onClick={handleStartStopClick}
            >
              {timerRunning ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
