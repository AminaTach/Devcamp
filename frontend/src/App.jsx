import { useState } from 'react'

import Sidebar from './components/sidebar'
import InventoryTable from './pages/InventoryTable'

function App() {


  return (
    <div className="flex justify-start flex-row w-screen bg-bg">
       <Sidebar />
      <div className="flex-grow">
      <InventoryTable/>
       
      </div>
    </div>
  )
}

export default App
