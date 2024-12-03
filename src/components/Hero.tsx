
import DocumentIcon from "../icons/DocumentIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import Card from "./Card"
import TopHero from "./TopHero"


const Hero = () => {
  return (
    <>
    <TopHero/>
    <div className="flex flex-wrap gap-4 ml-3">
        <Card type="Twitter" link="https://x.com/O_Anu_O/status/1863573403510403173" text="Project Idea" icon={<DocumentIcon/>}/>
        <Card type="Youtube" link="https://www.youtube.com/embed/jADTdg-o8i0?si=PEHB7Lg3gvB5ujB6" icon={<YoutubeIcon/>} text="Hass Hass"/>
        <Card type="Twitter" link="https://x.com/O_Anu_O/status/1863573403510403173" icon={<TwitterIcon/>}/>
        
    </div>
  
    </>
  )
}

export default Hero
