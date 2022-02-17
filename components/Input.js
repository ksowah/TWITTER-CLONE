
const Input = () => {
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
        <img src="https://avatars.githubusercontent.com/u/80095257?v=4"
            className="h-11 w-11 rounded-full cursor-pointer"
        />

        <div className="w-full divide-y divide-gray-700">
            <div>
                <textarea />
            </div>
        </div>
    </div>
  )
}

export default Input