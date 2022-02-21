import Image from 'next/image'
import SidebarItems from '../components/SidebarItems'
import { HomeIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import { HashtagIcon,
         BellIcon,
         InboxIcon,
         BookmarkIcon,
         ClipboardListIcon,
         UserIcon,
         DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {

    const { data: session } = useSession()

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
            <Image 
                src={'https://rb.gy/ogau5a'}
                width={30}
                height={30}
            />
        </div>
        <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
            <SidebarItems text='Home' Icon={HomeIcon} active/>
            <SidebarItems text='Explore' Icon={HashtagIcon}/>
            <SidebarItems text='Notifications' Icon={BellIcon}/>
            <SidebarItems text='Messages' Icon={InboxIcon}/>
            <SidebarItems text='Bookmarks' Icon={BookmarkIcon}/>
            <SidebarItems text='Lists' Icon={ClipboardListIcon}/>
            <SidebarItems text='Profile' Icon={UserIcon}/>
            <SidebarItems text='More ' Icon={DotsCircleHorizontalIcon}/>
        </div>
        <button className='hidden xl:inline ml-auto bg-[#1d9bf0] rounded-full text-white w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>Tweet</button>
        <div onClick={signOut}
         className='text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto'>
            <img 
                src={session.user.image}
                className='h-10 w-10 rounded-full xl:mr-2.5'
            />
            <div className='hidden xl:inline leading-5'>
                <h4 className='font-bold'>{session.user.name}</h4>
                <p className='text-[#6e767d]'>@{session.user.tag}</p>
            </div>
            <DotsHorizontalIcon className='h-5 hidden xl:inline ml-10' />
        </div>
    </div>
  )
}

export default Sidebar