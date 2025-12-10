import React from "react";

export default function Hero() {
  return (
    <section
      className="wrapper image-wrapper bg-cover bg-center bg-no-repeat relative z-0 min-h-[600px] xl:min-h-[700px] flex items-center justify-center"
      style={{ backgroundImage: "url(/assets/img/comsoc_antiguo.jpg)" }}
    >
      {/* CAMBIO CLAVE 1: Overlay más oscuro (60% o 70%) 
         para que el texto blanco resalte sin esfuerzo.
      */}
      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      <div className="container py-20 xl:pt-32 xl:pb-20 text-center">
        <div className="flex flex-wrap justify-center">
          
          {/* CAMBIO CLAVE 2: Eliminamos la caja (bg-white/...).
             Ahora el div es transparente y el texto flota libre.
          */}
          <div
            className="xl:w-10/12 w-full mt-10 xl:mt-24"
            data-cues="slideInDown"
            data-group="page-title"
            data-delay={500}
          >
            {/* TÍTULO */}
            {/* Usamos !text-white y drop-shadow-lg para legibilidad */}
            <h2 className="!text-[3rem] md:!text-[4rem] xl:!text-[5.5rem] font-bold !leading-[1.1] !mb-6 !text-white drop-shadow-xl">
              Un legado de{" "}
              {/* CAMBIO CLAVE 3: Color de acento LUMINOSO.
                 En lugar de morado oscuro (#605dba), usamos lila pastel (#b3b7ee)
                 para que brille sobre el negro.
              */}
              <span className="relative inline-block text-[#b3b7ee]">
                resiliencia
                {/* La línea decorativa ahora es blanca semi-transparente */}
                <span className="absolute bottom-2 left-0 w-full h-[6px] md:h-[8px] bg-white/30 -rotate-1 rounded-full"></span>
              </span>{" "}
              e innovación
            </h2>
            
            {/* SUBTÍTULO */}
            <p className="!text-[1.3rem] md:!text-[2rem] text-gray-200 font-medium mt-6 tracking-wide drop-shadow-md">
              Construyendo comunidad desde 2006
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}