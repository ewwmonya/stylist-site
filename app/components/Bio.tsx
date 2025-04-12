import Image from "next/image";

const Bio = () => {
  return (
    <article className='px-6 '>
      <div className='flex justify-evenly gap-x-7'>
        <div className='flex items-center font-semibold'>
          <p className=''>Unique</p>
          <Image
            src={"/asset-1.min.png"}
            alt={""}
            className='block'
            width={90}
            height={90}
          />
        </div>
        <div className='flex items-center font-semibold'>
          <p className=''>Luxurious</p>
          <Image
            src={"/asset-2.min.png"}
            alt={""}
            className='block'
            width={90}
            height={90}
          />
        </div>
        <div className='flex items-center font-semibold'>
          <p className=''>Styles</p>
          <Image
            src={"/asset-3.min.png"}
            alt={""}
            className='block'
            width={90}
            height={90}
          />
        </div>
      </div>

      <div className='flex flex-col md:items-center mt-11 lg:mt-14 text-center'>
        <h2 className='text-2xl font-serif'>Our Roots and Commitments</h2>
        <div className='bg-emerald-950 h-1 mb-5 mx-auto rounded-2xl w-full max-w-xs lg:max-w-2xl' />
        <p className="mx-auto sm:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          doloremque.
        </p>
      </div>

      <div className='flex md:flex-row md:gap-x-20 max-w-2xl mx-auto flex-col-reverse gap-y-10 justify-between items-center mt-11 lg:mt-14'>
        <div>
          <p className="lg:max-w-3xs mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cumque magnam nobis iste. Non sint libero iste excepturi alias
            aspernatur aliquam, sunt et quod, asperiores quas temporibus maiores.
            Quod, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id, doloremque.
          </p>
          <button className="mt-9 rounded-lg font-medium bg-transparent border border-emerald-500 text-emerald-500 px-6 py-3 hover:border-emerald-900 hover:text-white hover:bg-emerald-900 duration-300">
            Request Information
          </button>
        </div>
        <Image src={"/bioImg.jpg"} alt={""} width={600} height={480} className="shadow-sm shadow-slate-600 rounded-2xl max-w-xs"/>
      </div>
    </article>
  );
};
export default Bio;
