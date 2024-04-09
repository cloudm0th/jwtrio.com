import Image from "next/image";

export default function Home() {
  return (
    <div className="rs-hide-scrollbars text-black bg-yellow-600 absolute left-0 top-0 h-[100dvh] w-full overflow-scroll flex flex-col items-center">
      <div>
        <div>
          <picture>
            <img className="w-16 h-auto" src="/images/jw-type-black.svg" />
          </picture>
        </div>
        <div>
          <picture>
            <img className="w-16 h-auto" src="/images/jw-mark-black.svg" />
          </picture>
        </div>
      </div>
      <div>
        <picture>
          <img className="w-auto h-16" src="/images/exclamation-black.svg" />
        </picture>
      </div>
      <div className="bg-white border border-t-8 border-black grow">
        <div>
          <div>ABOUT THE JAZZARDOUS WASTE TRIO:</div>
          <div>
            We are Jazzardous Waste - A jazz trio made up of students from the
            Oak Park & River Forest high school music program, native to the
            Chicago land area.
          </div>
        </div>
        <div>
          <div>BOOK US:</div>
          <div>
            We are always looking to play for any parties, block parties,
            restaraunts, etc. Please contact us for booking details!
          </div>
        </div>
        <div>
          <div>CONTACT US:</div>
          <div>apoiwehfpu9awhefuh@bromail.gov (placeholder)</div>
        </div>
        <div>
          <div>MEMBERS:</div>
          <div>
            <div>Roy Koerner - Piano</div>
            <div>Braden Estanilla - Bass</div>
            <div>Will Reinholdt - Drums</div>
          </div>
        </div>
        <div>inst you email venmo</div>
      </div>
    </div>
  );
}
