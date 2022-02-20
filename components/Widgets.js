import { SearchIcon } from "@heroicons/react/outline"

const Widgets = () => {
  return (
    <div className="hidden lg:inine ml-8 xl:w-[450px] py-1 space-y-5">
        <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
            <SearchIcon className="text-gray-500 h-5 z-50"/>
        </div>
    </div>
  )
}

export default Widgets