import imgOne from "../../public/58701f_1529b93f16a6415f9f22c8ae1c965ce4~mv2_d_2768_1844_s_2.webp";
import imgTwo from "../../public//58701f_c8875d0c275e493a90e52e9eb679688f~mv2_d_4256_2832_s_4_2.webp";
import imgThree from "../../public/8e1567_e45fcdd2e15d4d2b926f3d8d1ab68f8d~mv2.webp";
import imgfour from "../../public/1.webp";
import imgfive from "../../public/2.webp";
import imgsix from "../../public/3.webp";
import imgseven from "../../public/4.webp";

export default function Images() {
  return (
    <div>
      <div className="md:grid md:grid-cols-4 md:grid-rows-3 md:gap-9 md:p-20 w-full flex flex-col pr-4 pl-4 pt-12 gap-10 pb-12">
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl "
          src={imgOne}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgThree}
          alt=""
        />
        <img
          className="col-span-2 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl "
          src={imgTwo}
          alt=""
        />
        <img
          className="col-span-3 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgOne}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgTwo}
          alt=""
        />
        <img
          className="col-span-2 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl object-right -bottom"
          src={imgTwo}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl object-right-top "
          src={imgOne}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgThree}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgfour}
          alt=""
        />
        <img
          className="col-span-2 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgfive}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgsix}
          alt=""
        />
        <img
          className="col-span-2 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgseven}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgfive}
          alt=""
        />
        <img
          className="col-span-1 object-cover h-full transition duration-300 ease-in-out hover:scale-105 rounded-xl"
          src={imgThree}
          alt=""
        />
      </div>
    </div>
  );
}
