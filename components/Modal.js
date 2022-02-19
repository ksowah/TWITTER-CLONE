import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { doc, onSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useRecoilState } from 'recoil'
import { modalState, postIdState } from '../atoms/modalAtom'
import { db } from '../firebase'

export default function Modal() {

    const { data: session } = useSession()
    const [postId, setPostId] = useRecoilState(postIdState)
    const [post, setPost] = useState()
    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const [comment, setComment] = useState("")
    const router = useRouter()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(()=>{
    onSnapshot(doc(db, "posts", postId), (snapshot)=> {
        setPost(snapshot.data())
    })
  }, [db])

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#5b7083] bg-opacity-40 transition-opacity ">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md px-1.5 py-2 border-b border-gray-700 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl">
                    <div className='flex px-1.5 py-2 items-center  border-b border-gray-700'>
                        <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0'>
                            <XIcon className='h-[22px] text-white' onClick={() => setIsOpen(false)}/>
                        </div>
                    </div>
                <div className='flex px-4 pt-5 pb-2.5 sm:px-6'>
                    <div className='w-full'>
                        <div className='text-[#6e767d] flex relative'>
                            <span className='w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600'/>
                            <img src={post?.userProfile}
                                className='h-11 w-11 rounded-full '
                            />
                            <div>
                                <div className='inline-block group'>
                                    <h4 className='font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ml-2 inline-block '>{post?.username}</h4>
                                    <span className='ml-1.5 text-sm sm:text-[15px]'>
                                        @{post?.tag}
                                    </span>{" "}
                                    •{" "}
                                    <span className='hover:underline text-sm sm:text-[15px]'>
                                        <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                                   </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
