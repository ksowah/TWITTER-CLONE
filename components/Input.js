import { useState } from 'react'

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
                <div className='relative'>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Input