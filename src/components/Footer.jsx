import bioterra from "../../public/20180512_160530.webp";

export default function Footer() {
  return (
    <footer className="flex h-63 justify-between">
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-around items-center flex-col gap-4 md:flex-row">
          <img className="h-20 rounded-2xl" src={bioterra} alt="" />
          <div>
            <a className="btn bg-orange-300 border-0 text-cyan-700 font-bold hover:bg-slate-600 hover:text-orange-300 h-14 w-44 text-xl">
              Book Now
            </a>
          </div>
        </div>
        <div className="text-center p-16">
          <p>
            Dav Mahal - Ouassen - Cap Sim - Essaouira - Contact +212 6 70251419
            (Tel & WhatsApp) - Mail : olivier.laffut@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
