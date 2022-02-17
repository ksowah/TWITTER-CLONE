import { useState } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/outline'

const Input = () => {

    const [input, setInput] = useState()
    const [selectedFile, setSelectedFile] = useState(null)

  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-auto`}>
        <img src="https://avatars.githubusercontent.com/u/80095257?v=4"
            className="h-11 w-11 rounded-full cursor-pointer"
        />

        <div className="w-full divide-y divide-gray-700">
            <div className={``}>
                <textarea value={input} rows='2'
                onChange={(e)=>setInput(e.target.value)}
                 placeholder='What are you currently working on?' 
                className='bg-transparent outline-none 
                text-[#d9d9d9] text-md placeholder-gray-500 tracking-wide w-full min-h-[50px]' 
                />
                {selectedFile && (
                     <div className='relative'>
                     <div className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                           onClick={() => setSelectedFile(null)} >
                         <XIcon className='text-white h-5'/>
                     </div>
                     <img src={selectedFile}
                         className='rounded-2xl max-h-80 object-contain'
                     />
                    </div>
                )}
               
            </div>

            <div className='flex items-center justify-between pt-2.5'>
                <div className='flex items-center'>
                    <div className=''>
                        <PhotographIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Input