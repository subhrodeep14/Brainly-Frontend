import AddIcon from "../icons/AddIcon"
import ShareIcon from "../icons/ShareIcon"
import Button from "./Button"


const Hero = () => {
  return (
    <>
    <div className="flex justify-end pt-5 pr-11">
      <Button text="Share Link" varient="primary" startIcon={<ShareIcon/>}/>
      <Button text="Add Content" varient="secondary" startIcon={<AddIcon/>}/>
    </div>
    </>
    
  )
}

export default Hero
