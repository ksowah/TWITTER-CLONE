import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'

export default function Modal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
              <div className="inline-block w-full max-w-md px-1.5 py-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl">
              
                    <div className='hoverAnimation border-b border-gray-700 w-full h-9 flex items-center justify-center xl:px-0'>
                        <XIcon className='h-[22px] text-white' onClick={() => setIsOpen(false)}/>
                    </div>
                <div className='flex px-4 pt-5 pb-2.5 sm:px-6'>
                    <div className='w-full'>
                        <div className='text-[#6e767d] flex-gap-3 relative'>
                            <span className='w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600'/>
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
