import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function App() {
  const [color, setColor] = useState(1);
  const [images, setImages] = useState([
    "/assets/image.jpg",
    "/assets/image.jpg",
    "/assets/image.jpg",
  ]);

  return (
    <div className="relative w-[1728px] h-[895px] rounded-[28px] rotate-0 opacity-100 bg-[linear-gradient(180deg,#373E44_-100%,#191B1F_100%)] shadow-[10px_10px_40px_10px_#00000080]">
      <div className="w-[836px] h-[689px] rounded-[27px] rotate-0 opacity-100 absolute top-[96px] left-[29px] border border-[#96BEE7] bg-[#616161D1]"></div>

      <div className="flex relative">
        <div className=" z-50 w-[24px] h-[159.6878px] opacity-100 rotate-0 absolute top-[116px] left-[934px] flex flex-col justify-between items-center">
          <div className="w-[24px] h-[24px] rounded-full p-[2px] bg-[linear-gradient(0deg,#4A4E54,#A3ADBA)]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-semibold">
              ?
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-[1.38px] mb-[4px]">
            <div className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] bg-[#4A4E54]"></div>
            <div className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] bg-[#4A4E54]"></div>

            <div className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] bg-[#4A4E54]"></div>
            <div className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] bg-[#4A4E54]"></div>

            <div className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] bg-[#4A4E54]"></div>
            <div className="w-[9.3122px] h-[9.3122px] rounded-[1.16px] bg-[#4A4E54]"></div>
          </div>
        </div>

        <div className="bg-[#363C43] flex justify-center w-[720px] h-[316px] rotate-0 opacity-100 relative top-[96px] left-[922px] rounded-2xl">
          <div className="text-[#969696] justify-around items-center rounded-2xl flex absolute bg-black w-[597px] h-[49px] top-[23px] left-[0 px] rotate-0 opacity-100 gap-[6px]">
            <button
              onClick={() => {
                setColor(1);
              }}
              className={`rounded-xl p-2 w-3/10 ${
                color != 1 ? "hover:bg-zinc-900" : ""
              } hover:text-white ${color == 1 ? "bg-zinc-700 text-white" : ""}`}
            >
              About Me
            </button>

            <button
              onClick={() => {
                setColor(2);
              }}
              className={`rounded-xl p-2 w-3/10 ${
                color != 2 ? "hover:bg-zinc-900" : ""
              } hover:text-white ${color == 2 ? "bg-zinc-700 text-white" : ""}`}
            >
              Experiences
            </button>

            <button
              onClick={() => {
                setColor(3);
              }}
              className={`rounded-xl p-2 w-3/10 ${
                color != 3 ? "hover:bg-zinc-900" : ""
              } hover:text-white ${color == 3 ? "bg-zinc-700 text-white" : ""}`}
            >
              Recommended
            </button>
          </div>

          <div className=" flex absolute w-[611px] h-[175px] top-[96px] left-[0 px] rotate-0 opacity-100 font-sans font-normal text-[#969696] text-[20px] leading-[100%] tracking-[0%] pt-5">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY & have been living in
            Santa Carla for the past 10 years with my wife Tiffany and my
            4-year-old twin daughters, Emma and Ella. Both of them are just
            starting school, so my calendar is usually blocked between 9-10 AM.
            This is a...
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-[#363C43] w-[720px] h-[330px]   rounded-2xl  rotate-0 opacity-100 absolute top-[453px] left-[922px]">
          <div className="justify-center flex h-1/4">
            <div className="w-9/10 flex justify-between items-center bg-[#363C43] ">
              <button className="bg-black p-3 px-8 rounded-xl text-white">
                Gallary
              </button>

              <div className="flex gap-4 w-1/2 justify-between">
                <button
                  onClick={() => setImages([...images, "/assets/image.jpg"])}
                  className="bg-[#363C43] hover:bg-zinc-900 top-4 cursor-pointer border-gray-200 border p-3 px-4 rounded-3xl text-white shadow-lg shadow-gray-500"
                >
                  + Add More
                </button>
                <div src="src\assets\react.svg">
                  <GoArrowLeft
                    size={40}
                    className="border-white border cursor-pointer hover:bg-zinc-900 shadow-lg shadow-gray-500 bg-zinc-700  rounded-4xl text-white"
                  />
                </div>
                <div src="src\assets\react.svg">
                  <GoArrowRight
                    size={40}
                    className="border-white border  cursor-pointer hover:bg-zinc-900 shadow-lg shadow-gray-500 bg-zinc-700 text-white rounded-4xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" justify-center flex h-11/16">
            <div className="overflow-y-hidden overflow-x-auto  mt-4 gap-9 w-9/10 flex items-center">
              {images.map((img, index) => (
                <img
                  key={index}
                  className=" filter grayscale transition-transform duration-400 hover:scale-120 hover:grayscale-0   origin-top-left shrink-0 w-[190px] h-[179px] rounded-[24px]"
                  src={img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
