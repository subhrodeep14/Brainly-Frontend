

import Hero from "./Hero"
import Sidebar from "./Sidebar"


function Dashboard() {


  return (
    <div>
      {
        <div className="flex h-screen">
          <div className=" w-1/5 border-2 ">
            <Sidebar />
          </div>
          <div className="bg-gray-100 w-4/5">
            <Hero />
          </div>
        </div>
      }
    </div>

  )
}

export default Dashboard
