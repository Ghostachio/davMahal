import domes from "../../public/58701f_c8875d0c275e493a90e52e9eb679688f~mv2_d_4256_2832_s_4_2.webp";

export default function Hero() {
  return (
    <section className="flex flex-col justify-start items-center bg-white">
      <div className=" pt-6 pr-2 pl-2 flex justify-center w-full h-[20rem] pb-6 md:pl-20 md:pr-20 md:h-[35rem]">
        <img
          src={domes}
          alt="Domes-view"
          className="rounded-xl object-bottom h-full w-full object-cover overflow-hidden "
        />
      </div>
      <div>
        <h1 className="text-5xl text-center pt-12 pb-4 font-semibold  text-cyan-700 bg-transparent md:text-7xl">
          Dav Mahal
        </h1>
        <h2 className="text-3xl text-center pb-3 text-orange-200 md:text-5xl ">
          Ecological Guesthouse
        </h2>
      </div>
      <div className="pt-20 pl-12 pr-12 text-center md:pl-32 md:pr-32">
        <p className="text-xl">
          This telluric piece of land found Olivier in 2011. Back then, he
          wanted to make a YogAshram with an Indian Yogini. It took 6 years of
          patience and holding the space to let the Dav Mahal concept emerge in
          its own divine timing. In 2016, the project finally came to life as an
          ecolodge and it never stopped growing since then with the help of many
          friends. DavMahal is located in the calm village of Sidi Ouassen
          perched on a cape, with an endless view above the Atlantic Ocean -
          twenty minutes of Essaouira. The style of the building is inspired by
          Richard Neutra and Buckminster Fuller, both american architects. The
          project is conceived according to ecological principles: raw earth
          dome, solar heated hammam, dry toilets, food composting, waste
          collection, use of grey water are a few of the circular systems
          implemented here.The kitchen philosophy is open. Here you can enjoy
          your own cooking (lunch and dinner) with others, or you can order a
          meal from the DavMahal team depending local food supplies. Breakfast
          is included in the room. Last but not least, this unique location
          offers many activities in nature: almost a private beach, a large yoga
          deck, breath taking walks in the stoney nature, countless meditation
          spots in front of the Ocean, surf - kite surf or windsurf schools and
          paddle boards. Enjoy a divine retreat at the DavMahal !
          <blockquote className="pt-10 text-right text-lg text-orange-300 font-semibold ">
            Let silence take you to the core of life - Rumy
          </blockquote>
        </p>
      </div>
    </section>
  );
}
