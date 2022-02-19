import { DotsHorizontalIcon,
         HashtagIcon,
        InboxIcon,
        BookmarkIcon,
        ClipboardListIcon,
        UserIcon,
        DotsCircleHorizontalIcon,
     } from '@heroicons/react/outline'
import { ChartBarIcon, ChatIcon, ShareIcon, SwitchHorizontalIcon, TrashIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { Router } from 'next/router'
import React from 'react'
import { db } from '../firebase'

const Post = ({id, post, postPage}) => {

    const { data: session } = useSession()

  return (
    <div className='p-3 flex cursor-pointer border-b border-gray-700'>
        {!postPage && (
            <img src={post?.userProfile} 
            className="h-11 w-11 rounded-full mr-4"/>
        )}

        <div className='flex flex-col space-y-2 w-full'>
            <div className={`flex ${!postPage && "justify-between"}`}>
                {postPage  && (
                    <img 
                        src={post?.userProfile}
                        alt="profile Pic"
                        className="h-11 w-11 roumded-full mr-4"
                    />
                )}
                <div className='text-[#6e767d]'>
                    <div className='inline-block group'>
                        <h4 className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${!postPage && "inline-block"}`}>
                            {post?.username}</h4>
                        <span className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}>@{post?.tag}</span>
                    </div>{" "}
                    •{" "}
                    <span className='hover:underline text-sm sm:text-[15px]'>
                        {/* <Moment fromNow>{post?.timestamp?.todate()}</Moment> */}
                    </span>

                    {
                        !postPage && (<p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>
                            {post?.message}
                        </p>)
                    }
                </div>
                <div className='icon group flex-shrink-0 ml-auto'>
                    <DotsHorizontalIcon className='h-5 text-[#6e767d] group-hover:text-[#1d9bf0]'/>
                </div>
            </div>
            {postPage && (<p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>
                            {post?.message}
                        </p>)}
            <img 
                src={post?.imagePost}
                className="rounded-2xl max-h-[700px] object-cover mr-2"
            />
            <div className={`text-[#6e767d] flex justify-between w-10/12
            ${postPage && "mx-auto"}`}>
                {/* <div
                    className='flex items-center space-x-1 group'
                    onClick={(e)=>{
                        e.stopPropagation()
                        setPostId(id)
                        setIsOpen(true)
                    }}
                >
                    <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10'>
                        <ChatIcon className='h-5 group-hover:text-[#1d9bf0]'/>
                    </div>
                    {comments.length > 0 && (
                        <span className='group-hover:text-[#1d9bf0] text-sm'>
                            {comments.length}
                        </span>
                    )}
                </div> */}
                {session.user.uid === post?.id ? (
                    <div
                        className='flex items-center space-x-1 group'
                        onClick={(e)=>{
                            e.stopPropagation()
                            deleteDoc(doc(db, "posts", id))
                            Router.push("/")
                        }}
                    >
                        <div className='icon group-hover:bg-red-600/10'>
                            <TrashIcon className='h-5 group-hover:text-red-600'/>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center space-x-1 group'>
                        <div className='icon group-hover:bg-green-500/10'>
                            <SwitchHorizontalIcon className='h-5 group-hover:text-green-500'/>
                        </div>
                    </div>
                )}

                <div className='icon group'>
                    <ShareIcon className='h-5 group-hover:text-[#1d9bf0]'/>
                </div>
                <div className='icon group'>
                    <ChartBarIcon className='h-5 group-hover:text-[#1d9bf0]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post