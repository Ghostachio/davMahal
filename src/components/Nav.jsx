import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="p-3 pl-20 pr-20 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
        {/* Branding Section */}
        <div className="w-full flex justify-center sm:justify-start mb-4 sm:mb-0">
          <a className="btn text-lg md:text-2xl bg-orange-300 border-0 text-white h-10 md:h-20 hover:text-orange-300 hover:bg-white">
            Dav Mahal
          </a>
        </div>

        {/* Navigation Section */}
        <nav className="w-full flex flex-col items-center sm:flex-row sm:justify-center mb-4 sm:mb-0">
          <ul className="w-full text-lg flex flex-col sm:flex-row items-center sm:justify-center gap-2 sm:gap-4 sm:pr-14 sm:pl-14">
            <li className="transition duration-300 ease-in-out hover:border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/sports">Sports</Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/holistic">Holistic</Link>
            </li>
            <li className="transition duration-300 ease-in-out hover:border-b-orange-300 hover:border-b-2 rounded-none hover:scale-110 hover:cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Book Now Button */}
        <div className="w-full flex justify-center sm:justify-end">
          <a className="btn bg-orange-300 border-0 text-cyan-700 font-bold hover:bg-slate-600 hover:text-orange-300 text-lg">
            Book Now
          </a>
        </div>
      </header>
    </>
  );
}
