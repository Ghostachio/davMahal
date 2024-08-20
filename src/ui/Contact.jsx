import view from "../../public/contactus.webp";
import R from "../../public/rachida.webp";
import H from "../../public/Hamid.webp";

export default function Contact() {
  return (
    <section>
      <div className="h-[15rem] p-8 md:h-[24rem]">
        <img
          src={view}
          alt="view"
          className=" w-full h-full rounded-md object-cover object-left-bottom md:object-left"
        />
      </div>
      <div>
        <h1 className="uppercase text-2xl font-semibold text-cyan-700 text-center p-11 md:text-5xl">
          Contact
        </h1>
        <p className="pt-16 pl-12 pr-12 pb-16 text-xl text-slate-600 text-center md:pl-36 md:pr-36 md:pb-16 md:pt-16">
          From Essaouira: take the direction to Ghazoua (south of Essaouira),
          cross Ghazoua and continue to Agadir for about 5 km. After airport
          sign (500m), turn right in the direction of Sidi Kaouki. Continue
          about 9 km then turn right (when you see the ocean) in direction of
          the wind turbine to the village of Ouassen-Cap Sim. Cross the village,
          continue to the end of the asphalt road then you will see the 2
          geodesic dômes on the left. Turn left after passing on the path
          through the houses ... here you are !
        </p>
      </div>
      <div className="flex flex-wrap flex-center w-full pt-3 pl-20 pr-20 pb-3 gap-8  md:grid md:grid-cols-4 md:pr-52 md:pl-52 ">
        <img
          src={R}
          alt="R"
          className="md:col-span-2 object-cover w-full h-full"
        />

        <img
          src={H}
          alt="H"
          className="col-span-2 object-cover w-full h-full "
        />
      </div>
      <h2 className="text-center text-slate-600 font-semibold text-xl pt-12 pb-12 md:text-3xl">
        See you soon !
      </h2>
    </section>
  );
}
