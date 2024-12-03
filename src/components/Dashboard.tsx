import Sidebar from "./Sidebar"


function Dashboard() {


    return (
      <div className="flex h-screen">
        <div className=" w-1/5 border-2">
            <Sidebar/>
        </div>
        <div className="bg-gray-100 w-4/5">
            hero 
        </div>
      
      </div>
    )
  }
  
  export default Dashboard
  