import { ReactElement } from "react"
import Deleted from "../icons/Deleted"
import ShareIcon from "../icons/ShareIcon"

interface cardProps {
  icon?: ReactElement,
  text:String,
  type?: String,
  link:string
}


const Card = ({ text, icon, link, type }: cardProps) => {
  return (
    <div className="p-4 mt-12 border-2 w-96 min-h-96 object-cover">
      <div className="flex justify-between">
        <div className="flex gap-2">
          {icon}
          <div className="text-xl">
            {text}
          </div>

        </div>
        <div className="flex gap-2">
          <div>
            <a href={link} target="_blank"></a>
            <ShareIcon />
          </div>

          <Deleted />

        </div>

      </div>
      <div className="mt-4 ">
        {type === "Youtube" && <iframe src={link?.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        {type==="Twitter"&&
        <div className="">
               <blockquote className="twitter-tweet"
      ><a href={link?.replace("x.com","twitter.com")}></a>
      </blockquote>

        </div>
   }

      </div>


      

    </div>
  )
}

export default Card
