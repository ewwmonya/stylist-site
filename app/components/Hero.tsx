
const Hero = () => {
  return (
<section className="relative bg-cover bg-center h-[90vh] text-white px-6 grid grid-cols-2" style={{backgroundImage: `url('./heroImgNewMin.jpg')`}}>

        <div className="flex items-center mx-0 max-w-6xl min-h-48">

             <div className="text-center"> {/*  Text */}
                <h2 className="text-4xl text-emerald-700  font-bold tracking-wide mb-4 ">Natural Beauty. Feel Bold</h2>
                <p className="capitalize text-lime-100 text-2xl mb-6 font-sans tracking-widest">hair that empowers. Style the Shine</p>
                <button className="inline-flex items-center justify-center px-5 py-3 font-sans font-semibold tracking-wide text-white bg-emerald-700 hover:bg-green-950 hover:border-emerald-700 rounded-lg hover:px-4 border-2 border-green-950 duration-500">
                          Book Now
                        </button>
            </div>


        </div>
        </section>
  )
}
export default Hero