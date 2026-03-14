import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import QuickAccess from './components/QuickAccess';
import  Activity  from './components/Activity';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <div className="body__container">
        <div className="top__bar">
          <TopBar/>
        </div>
        <div className='main'>
          <Sidebar/>
          <QuickAccess/>
          <Activity/>
        </div>
      </div>
      
      
    </>
  )
}

export default App
