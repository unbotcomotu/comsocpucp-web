import React from "react";

export default function Services() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-16 xl:py-24">
        
        <div className="flex flex-wrap mx-[-15px] !text-center mb-16">
          <div className="md:w-11/12 lg:w-10/12 xl:w-10/12 w-full flex-[0_0_auto] px-4 mx-auto">
            
            {/* AGREGADO EL '!' AQUÍ TAMBIÉN */}
            {/* !text-[2rem] en móvil, !text-[3.5rem] en pantallas grandes */}
            <h3 className="!text-[1.5rem] md:!text-[2.5rem] xl:!text-[3.3rem] font-bold !leading-[1.15] tracking-tight text-[#343f52] !mb-8">
              Más que un capítulo, somos un hogar de innovación que demuestra que la tecnología nos une a todos.
            </h3>
            
            <div className="w-24 h-1.5 bg-[#605dba] mx-auto rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="lg:w-10/12 xl:w-9/12 w-full px-4">
            <div className="prose prose-lg xl:prose-xl text-gray-600 text-justify mx-auto space-y-8 font-serif-primary">
              
              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">El inicio (2006)</span>
                La historia de IEEE ComSoc PUCP es un testimonio de resiliencia. Nuestro capítulo nació formalmente en 2006, fundado por el estudiante Dennis Zárate y un grupo visionario, con el impulso clave de Angelo Velarde como primer asesor. Tras un periodo de inactividad, en 2009 Victor Chang lideró el primer gran renacimiento, enfrentando el reto de "volver a juntar a la gente" sin traspasos previos.
              </p>

              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">Innovación Práctica (2010-2013)</span>
                Durante esta gestión, el capítulo destacó por su creatividad. Lanzaron el evento estrella "Telecomunicaciones Aplicadas a los Videojuegos", utilizando una partida de <em>Counter-Strike 1.6</em> para explicar modelos OSI y TCP/IP, inspirando a una nueva generación de estudiantes. También realizaron proyectos técnicos como conexiones P2P entre pabellones.
              </p>

              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">La Era Digital (2021-2022)</span>
                Tras una pausa, el capítulo resurgió en plena pandemia gracias a Darwin Aponte, expandiéndose a redes sociales. En 2022, bajo el liderazgo de Diana Sologuren, alcanzamos nuestro máximo esplendor histórico: ganamos el <strong>1er lugar internacional</strong> en el "WICE Exemplary Contest", consolidando nuestra presencia global.
              </p>

              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">El Futuro Interdisciplinario (2025)</span>
                Hoy, bajo la presidencia de Josh Yauri, vivimos una nueva era de consolidación. La nueva Mesa Directiva refleja nuestra evolución: ya no somos solo telecomunicaciones, somos una familia interdisciplinaria que incluye Ingeniería Industrial, Psicología e Informática. ComSoc PUCP sigue siendo cuna de líderes y fundadores de empresas.
              </p>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}