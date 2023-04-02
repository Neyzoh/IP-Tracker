import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

type Props = {}

const Home = (props: Props) => {
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
        <div className="flex justify-evenly relative -mb-20 mt-14 mx-auto bg-white w-10/12 h-48 rounded-3xl p-8 " style={{zIndex: 1000}}>
        <div className='lg:border-r lg:border-slate-400 p-8 max-h-32 m-8 pt-2 '>
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider">Ip Adress</h2>
                <p className="font-bold text-slate-900 text-2xl pt-4">192.212.174.101</p>
            </div>
            <div className='lg:border-r lg:border-slate-400 p-8 max-h-32 m-8 pt-2 '>
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider">Location</h2>
                <p className="font-bold text-slate-900 text-2xl pt-4">Paris</p>
            </div>
            <div className='lg:border-r lg:border-slate-400 p-8 max-h-32 m-8 pt-2 '>
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider">Timezone</h2>
                <p className="font-bold text-slate-900 text-2xl pt-4">UTC-07:00</p>
            </div>
            <div className='lg:border-r lg:border-slate-400 p-8 max-h-32 m-8 pt-2 '>
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider">ISP</h2>
                <p className="font-bold text-slate-900 text-2xl pt-4">Ile de France</p>
            </div>
        </div>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '580px', width: "100vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Home;