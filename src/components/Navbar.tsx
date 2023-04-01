
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
        <h1 className="text-4xl text-white font-medium text-center py-8">IP Adress Tracker</h1>
        <div className="flex justify-center py-2">
            <form action="">
                <button type="button"
                className="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" absolute inline h-14 w-16 px-6 py-5 rounded-r-[14px] ml-96 mt-1 bg-black"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
                </button>
                <input type="text"
                        name="search"
                        placeholder="Search for any IP adress or domain"
                        autoComplete="off" 
                        className="w-[30em] mx-2 py-4 text-center text-5xl placeholder-gray-400 text-black rounded-l-lg focus:outline-none focus:border-sky-500 focus:ring-gray-400 block sm:text-sm focus:ring-1"
                        >
                </input>
            </form>
        </div>
    </div>
  )
}

export default Navbar;