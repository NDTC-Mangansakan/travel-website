import { RiMapPin2Fill } from "@remixicon/react"
import { useEffect } from "react"
import baseReveal from "../components/ScrollReveal"

const Destination = () => {
    useEffect(() => {
        baseReveal.reveal('.destination', {interval: 300, origin:'bottom'})
    })

  return (
    <section id="destination" className="py-15 px-[5%] lg:px-[10%]">
        <p className="section-title">FIND YOUR BEST <br />DESTINATION</p>
        <div className="mt-10 flex flex-col gap-y-10 max-w-[475px] mx-auto lg:flex-row lg:gap-x-10 lg:gap-y-0 lg:max-w-[1024px]">
            {/* Item 1 */}
            <div id="destination-1" className="destination h-[300px] flex items-end rounded-3xl lg:w-1/3">
                <div className="p-5 text-white bg-transparent backdrop-blur-sm w-full rounded-3xl">
                    <p className="font-semibold text-lg italic">Bali</p>
                    <p className="font-bold text-2xl">ISLAND</p>
                    <p className="text-sm flex items-center"><RiMapPin2Fill/> Indonesia</p>
                </div>
            </div>

              {/* Item 1 */}
              <div id="destination-2" className="destination h-[300px] flex items-end rounded-3xl lg:w-1/3">
                  <div className="p-5 text-white bg-transparent backdrop-blur-sm w-full rounded-3xl">
                      <p className="font-semibold text-lg italic">Banana</p>
                      <p className="font-bold text-2xl">Beach</p>
                      <p className="text-sm flex items-center"><RiMapPin2Fill /> Tailandia</p>
                  </div>
              </div>

              {/* Item 1 */}
              <div id="destination-3" className="destination h-[300px] flex items-end rounded-3xl lg:w-1/3">
                  <div className="p-5 text-white bg-transparent backdrop-blur-sm w-full rounded-3xl">
                      <p className="font-semibold text-lg italic">Santorini</p>
                      <p className="font-bold text-2xl">Island</p>
                      <p className="text-sm flex items-center"><RiMapPin2Fill /> Grecia</p>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Destination