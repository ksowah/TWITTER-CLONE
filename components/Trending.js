
const Trending = ({result}) => {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03]
    px-4 py-3 cursor-pointer transition duration-200 ease-out flex 
    items-center justify-between">
        <div className="space-y-0.5">
            <p className="text-[#6e767d] text-xs font-medium">
                {result?.heading}
            </p>
            <h6 className="font-bold max-w-[250px] text-sm">
                {result?.description}
            </h6>
            <p className="">
                Trending with {result.tags.map((tag, index) => (
                    <span key={index} className='tag'>
                        {tag}
                    </span>
                ))}
            </p>
        </div>
    </div>
  )
}

export default Trending