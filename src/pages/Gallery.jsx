import { useEffect } from "react"
import baseReveal from "../components/ScrollReveal"



const Gallery = () => {

    useEffect(() => {
        baseReveal.reveal('.gallery-item', {interval:300, origin:'bottom'})
    })
    return (
        <section id="gallery" className="py-15 px-[5%] lg:px-[10%]">
            <p className="section-title">Gallery</p>
            <div className="text-white mt-10 max-w-[475px] mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10 lg:max-w-[1024px]">

                {/* Item 1 */}
                <div className="gallery-item relative rounded-3xl overflow-hidden group">
                    <img src="./src/assets/img/gallery-img-1.png" alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-0 left-5 right-0 bottom-0 flex items-end">
                        <div className="p-5">
                            <p className="text-3xl font-semibold italic">Nusa</p>
                            <p className="text-4xl font-bold">Indonesia</p>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="gallery-item relative rounded-3xl overflow-hidden group">
                    <img src="./src/assets/img/gallery-img-2.png" alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-0 left-5 right-0 bottom-0 flex items-end">
                        <div className="p-5">
                            <p className="text-3xl font-semibold italic">Cook</p>
                            <p className="text-4xl font-bold">Nueva Zelanda</p>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="gallery-item relative rounded-3xl overflow-hidden group">
                    <img src="./src/assets/img/gallery-img-3.png" alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-0 left-5 right-0 bottom-0 flex items-end">
                        <div className="p-5">
                            <p className="text-3xl font-semibold italic">Bora Bora</p>
                            <p className="text-4xl font-bold">Polinesia</p>
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="gallery-item relative rounded-3xl overflow-hidden group">
                    <img src="./src/assets/img/gallery-img-4.png" alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-0 left-5 right-0 bottom-0 flex items-end">
                        <div className="p-5">
                            <p className="text-3xl font-semibold italic">Santorini</p>
                            <p className="text-4xl font-bold">Grecia</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Gallery