import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="navbar p-3 pl-20 pr-20 ">
        <div className="navbar-start">
          <a className="btn text-2xl bg-orange-300 border-0 text-white h-20 hover:text-orange-300 hover:bg-white">
            Dav Mahal
          </a>
        </div>
        <div className="navbar-center ">
          <ul className="w-96 text-lg h-20 flex justify-between items-center gap-2 ">
            <li className="transition duration-300 ease-in-out hover: border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="ransition duration-300 ease-in-out hover: border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="ransition duration-300 ease-in-out hover: border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/sports">Sports</Link>
            </li>
            <li className="ransition duration-300 ease-in-out hover: border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/holistic">Holistic</Link>
            </li>
            <li className="ransition duration-300 ease-in-out hover: border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn bg-orange-300 border-0 text-cyan-700 font-bold hover:bg-slate-600 hover:text-orange-300 w-36 text-lg">
            Book Now
          </a>
        </div>
      </header>
    </>
  );
}
