
import { useState } from "react"
import DocumentIcon from "../icons/DocumentIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import Card from "./Card"
import ControlModal from "./ControlModal"
import Button from "./Button"
import ShareIcon from "../icons/ShareIcon"
import AddIcon from "../icons/AddIcon"
import { useContent } from "../hooks/useContent"



const Hero = () => {
  const [modalOpen, SetModalOpen] = useState(false)
  const contents = useContent();
  useContent();


  return (
    <div>
      <ControlModal open={modalOpen} onClose={() => {
        SetModalOpen(false)
      }} />
      {!modalOpen && <div className="">
        <div>
          <div className="flex justify-between p-6">
            <div className="font-bold text-4xl">
              All Notes
            </div>
            <div >
              <Button fullWidth={false} text="Share Link" varient="primary" startIcon={<ShareIcon />} />
              <Button fullWidth={false} text="Add Content" onClick={() => {
                SetModalOpen(true)
              }} varient="secondary" startIcon={<AddIcon />} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 ml-3">
          {
            contents.map(({title,link,type}) =>
              <Card text={title} link={link} type={type} />)
          }

        </div>



      </div>}


    </div>

  )
}

export default Hero
