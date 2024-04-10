import Image from "next/image";

export default function Home() {
  return (
    <div className="rs-hide-scrollbars text-black jwprimarycolor absolute left-0 top-0 h-[100dvh] w-full overflow-scroll flex flex-col items-center text-center">
      <div>
        <div className="mt-4 relative z-0">
          <img
            className="relative w-72 h-auto z-20"
            src="/images/jw-type-black.svg"
          />
          <img
            className="w-72 h-auto relative -top-[100px] z-10"
            src="/images/jw-type-shadow.svg"
          />
        </div>
        <div className="-mt-24">
          <img className="w-72 h-auto" src="/images/jw-mark-black.svg" />
        </div>
      </div>
      <div className="flex justify-center mt-4 bg-slate-400">
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
        <img className="h-10" src="/images/exclamation-box-dark.svg" />
        <img className="h-10" src="/images/exclamation-box-light.svg" />
      </div>
      <div className="bg-white border border-t-8 border-t-black grow w-full pt-4 px-4">
        <div className="max-w-lg mx-auto">
          {" "}
          <div>
            <div className="font-black">ABOUT THE JAZZARDOUS WASTE TRIO:</div>
            <div className="mt-1">
              We are Jazzardous Waste - A jazz trio made up of students from the
              Oak Park & River Forest high school music program, native to the
              Chicago land area.
            </div>
          </div>
          <div>
            <div className="font-black mt-4">BOOK US:</div>
            <div className="mt-1">
              Always looking to play for any parties, events, restaraunts, etc.
              Please contact us for booking details!
            </div>
          </div>
          <div className="mt-4">
            <div className="font-black">CONTACT US:</div>
            <div className="mt-1">
              apoiwehfpu9awhefuh@bromail.gov (placeholder)
            </div>
          </div>
          <div className="mt-4">
            <div className="font-black">MEMBERS:</div>
            <div className="mt-1">
              <div>Roy Koerner - Piano</div>
              <div>Braden Estanilla - Bass</div>
              <div>Will Reinholdt - Drums</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <img className="w-16 h-auto" src="/images/instabutton.svg" />

            <img className="w-16 h-auto" src="/images/venmobutton.svg" />

            <img className="w-16 h-auto" src="/images/youtubebutton.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
