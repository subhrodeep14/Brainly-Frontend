import { ReactElement } from "react"
import Deleted from "../icons/Deleted"
import ShareIcon from "../icons/ShareIcon"

interface cardProps {
  text?: String,
  icon?: ReactElement,
  link?: string,
  type: "Youtube" | "Twitter"
}


const Card = ({ text, icon, link, type }: cardProps) => {
  return (
    <div className="p-8 mt-12 border-2 w-96 max-h-96 object-cover">
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

        {type==="Twitter"&&<blockquote className="twitter-tweet max-h-fit"
      ><a href={link?.replace("x.com","twitter.com")}></a>
      </blockquote>}

      </div>


      

    </div>
  )
}

export default Card
