"use client";
import { brandImages } from "@/data/brands";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Grid } from "swiper/modules"; // Importamos Grid
import { Swiper, SwiperSlide } from "swiper/react";

// Estilos de Swiper necesarios
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export default function Alianzas() {
  return (
    <section className="wrapper !bg-[#ffffff] py-2 xl:py-3">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-10">
          
          {/* --- COLUMNA IZQUIERDA: TEXTO --- */}
          <div className="w-full lg:w-4/12 mb-6 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-sm uppercase text-[#aab0bc] tracking-wider mb-3">
              Nuestras Alianzas
            </h2>
            <p className="mt-4 text-gray-600">
            Contamos con más de 4 alianzas nacionales e internacionales

            </p>
            
            {/* Flechas de navegación (Opcional: ponerlas aquí abajo del texto) */}
            <div className="flex gap-4 mt-6">
               <div className="alianza-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#747ed1] hover:text-white hover:border-[#747ed1] transition text-[#343f52]">
                 <i className="uil uil-angle-left-b text-xl" />
               </div>
               <div className="alianza-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-[#747ed1] hover:text-white hover:border-[#747ed1] transition text-[#343f52]">
                 <i className="uil uil-angle-right-b text-xl" />
               </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: CARRUSEL DE LOGOS (2 FILAS) --- */}
          <div className="w-full lg:w-8/12">
            <Swiper
              modules={[Grid, Autoplay, Navigation]}
              grid={{
                rows: 2, // Fuerza 2 filas
                fill: "row", // Llena por filas
              }}
              spaceBetween={30} // Espacio entre logos
              slidesPerView={2} // En móvil: 2 columnas (total 4 logos visibles)
              breakpoints={{
                500: { slidesPerView: 3 }, // Tablet chica: 3 columnas (total 6 logos visibles)
                992: { slidesPerView: 3, spaceBetween: 40 }, // Desktop: 3 columnas grandes
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                 nextEl: ".alianza-next",
                 prevEl: ".alianza-prev"
              }}
              className="h-[280px] md:h-[240px]" // Altura fija necesaria para el modo Grid
            >
              {brandImages.map((src, index) => (
                <SwiperSlide key={index} className="!h-[calc((100%-30px)/2)] flex items-center justify-center">
                   {/* Contenedor del Logo: Limpio, sin cajas */}
                   <div className="relative w-full h-16 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
                      <Image
                        src={src}
                        alt="Logo alianza"
                        fill
                        className="object-contain"
                      />
                   </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}