import AddIcon from "../icons/AddIcon"
import ShareIcon from "../icons/ShareIcon"
import Button from "./Button"


function TopHero() {
    return (
        <div>
            <div className="flex items-center pt-8 justify-between px-7">
                <div className="font-bold text-4xl">
                    All Notes
                </div>
                <div >
                    <Button text="Share Link" varient="primary" startIcon={<ShareIcon />} />
                    <Button text="Add Content" varient="secondary" startIcon={<AddIcon />} />
                </div>
            </div>
        </div>
    )
}

export default TopHero
