import { services } from "@/data/services"
import Card from "../components/Card"

const ServicesPage = () => {
  return (
    <main className="min-h-screen px-6 py-10 md:mx-40">
    <h2 className="text-3xl font-sans mb-20 tracking-wider">Services</h2>

    <div className="flex flex-wrap justify-between gap-x-6 items-center">
        {services.map((service)=>{
            return <Card key={service.category} {...service} />
        })}
            </div> 
    </main>
  )
}
export default ServicesPage