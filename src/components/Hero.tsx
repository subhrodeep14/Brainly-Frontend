
import { useState } from "react"
import DocumentIcon from "../icons/DocumentIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import Card from "./Card"
import ControlModal from "./ControlModal"


import Button from "./Button"
import ShareIcon from "../icons/ShareIcon"
import AddIcon from "../icons/AddIcon"


const Hero = () => {
  const [modalOpen,SetModalOpen]=useState(true)
  return (
    <div>
      <ControlModal open={modalOpen} onClose={()=>{
        SetModalOpen(false)
      }} />
      {!modalOpen && <div>

        <div>
            
            <div className="flex justify-between p-6">
            <div className="font-bold text-4xl">
                All Notes
            </div>
            <div >
                <Button text="Share Link" varient="primary" startIcon={<ShareIcon />} />
                <Button text="Add Content" onClick={()=>{
                  SetModalOpen(true)
                }} varient="secondary" startIcon={<AddIcon />} />
            </div>
        </div>
        
        
        
    </div>
        <div className="flex flex-wrap gap-4 ml-3">
          <Card type="Twitter" link="https://x.com/O_Anu_O/status/1863573403510403173" text="Project Idea" icon={<DocumentIcon />} />
          <Card type="Youtube" link="https://www.youtube.com/embed/jADTdg-o8i0?si=PEHB7Lg3gvB5ujB6" icon={<YoutubeIcon />} text="Hass Hass" />
          <Card type="Twitter" link="https://x.com/O_Anu_O/status/1863573403510403173" icon={<TwitterIcon />} />

        </div>

      </div>}

    </div>

  )
}

export default Hero
