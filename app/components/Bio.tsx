import Image from "next/image"

const Bio = () => {
  return (
    <article className="px-6">
        <div className="flex justify-center">
        <div className="flex border-amber-300 border-2 p-0 items-center font-semibold">
            <p className=" wrap-anywhere">Unique Styles Tailored for You</p>
            <Image src={"/asset-1.min.png"} alt={""} 
            className="block"
            width={90} height={90} />
        </div>
            <Image src={"/asset-2.min.png"} alt={""} width={90} height={90} />
            <Image src={"/asset-3.min.png"} alt={""} width={90} height={90} />
     </div>





    </article>
  )
}
export default Bio