import view from "../../public/contactus.webp";
import R from "../../public/rachida.webp";
import H from "../../public/Hamid.webp";

export default function Contact() {
  return (
    <section>
      <div className="p-12">
        <img
          src={view}
          alt="view"
          className=" w-full rounded-md object-cover object-bottom "
        />
      </div>
      <div>
        <h1 className="uppercase text-5xl font-semibold text-cyan-700 text-center p-11">
          Contact
        </h1>
        <p className="pt-16 pl-36 pr-36 pb-16 text-3xl text-slate-600 text-center">
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
      <div className="grid grid-cols-4 w-full pt-20 pl-32 pr-32 pb-20 gap-8">
        <img
          src={R}
          alt="R"
          className="col-span-2 object-cover w-full h-full"
        />

        <img
          src={H}
          alt="H"
          className="col-span-2 object-cover w-full h-full "
        />
      </div>
      <h2 className="text-center text-slate-600 font-semibold text-3xl pt-12 pb-12">
        See you soon !
      </h2>
    </section>
  );
}
