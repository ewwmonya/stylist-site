type CardProps = {
    category: string;
    items: {
        name: string;
        price: number;
    }[];
}

const Card = ({category, items}: CardProps) => {

  return (
 

    <section aria-label={`${category} - service`} className={`my-6  min-w-[300px] ${category !== "Treatment" && "Combos – Technical + Styling" ? "flex-1" : ""} w-full`}>
        <div className="bg-emerald-50 p-6 rounded-4xl">
        <h3 className="font-semibold tracking-wider">{category}</h3>
            <ul className={` ${category === "Combos – Technical + Styling" ? "grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-48 p-6": " flex flex-col gap-y-7 p-6"}`} >
                {items.map((item)=>(
                    <li key={item.name} className="flex justify-between border-b border-dotted mb-2 ">
                    <span className="tracking-widest">{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
            
  )
}
  export default Card

