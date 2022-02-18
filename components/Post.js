import React from 'react'

const Post = ({id, post, postPage}) => {
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
                        <h4 className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline`}>
                            {post?.username}</h4>
                        <span>@{post?.tag}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post