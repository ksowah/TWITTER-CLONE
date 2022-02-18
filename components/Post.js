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
            </div>
        </div>
    </div>
  )
}

export default Post