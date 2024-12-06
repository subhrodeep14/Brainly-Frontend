import DocumentIcon from "../icons/DocumentIcon"
import LinkIcon from "../icons/LinkIcon"
import Logo from "../icons/Logo"
import TagsIcon from "../icons/TagsIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SidebarItems from "./SidebarItems"


const Sidebar = () => {
    return (
        <div>
         <div className=" pt-5 flex justify-center items-center mb-5">
                <Logo />
                <div className="text-gray-700 font-semibold pl-4 text-3xl">
                    Brainly
                </div>
        </div>
        <div className="mt-20">
            <SidebarItems text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItems text="Youtube" icon={<YoutubeIcon/>}/>
            <SidebarItems text="Document" icon={<DocumentIcon/>}/>
            <SidebarItems text="Links" icon={<LinkIcon/>}/>
            <SidebarItems text="Tags" icon={<TagsIcon/>}/>
        </div>
        </div>

    )
}

export default Sidebar
