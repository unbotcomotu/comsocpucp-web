"use client";
import { projects3 } from "@/data/projects";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <div className="overflow-hidden py-10 xl:py-14 bg-[#fefefe]">
      <div className="container">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-[#343f52]">Nuestras actividades</h3>
        </div>

        <div className="relative">
          <Swiper
            className="swiper !pb-12"
            spaceBetween={25}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 }, // Mantener 2 slides si son anchos, o cambiar a 3
              1200: { slidesPerView: 2 },
            }}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
               prevEl: ".swiper-prev",
               nextEl: ".swiper-next",
            }}
          >
            {projects3.map((slide, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group relative rounded-lg overflow-hidden shadow-lg bg-white h-full border border-gray-100">
                  {/* Imagen: Usamos aspect-ratio video (16:9) para consistencia */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      alt={slide.title || "Evento"}
                      src={slide.src}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay oscuro al pasar el mouse */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Botón de enlace flotante */}
                    <Link
                        href={`/eventos/`+ slide.eventId}
                        className="absolute bottom-4 right-4 w-10 h-10 bg-white text-[#747ed1] rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#747ed1] hover:text-white"
                    >
                        <i className="uil uil-arrow-right" />
                    </Link>
                  </div>
                  
                  {/* (Opcional) Si quieres texto debajo de la imagen, descomenta esto: */}
                  {/* <div className="p-4">
                     <h4 className="font-bold text-lg">{slide.title || "Nombre del Evento"}</h4>
                  </div> 
                  */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
           {/* Flechas de navegación fuera del Swiper */}
           <div className="swiper-prev absolute top-1/2 -left-4 xl:-left-10 z-20 w-10 h-10 bg-white text-[#343f52] rounded-full shadow flex items-center justify-center cursor-pointer hover:text-[#747ed1] transition hidden md:flex -translate-y-1/2">
             <i className="uil uil-angle-left-b text-2xl" />
           </div>
           <div className="swiper-next absolute top-1/2 -right-4 xl:-right-10 z-20 w-10 h-10 bg-white text-[#343f52] rounded-full shadow flex items-center justify-center cursor-pointer hover:text-[#747ed1] transition hidden md:flex -translate-y-1/2">
             <i className="uil uil-angle-right-b text-2xl" />
           </div>

        </div>
      </div>
    </div>
  );
}