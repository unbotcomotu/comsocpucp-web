import React from "react";

export default function Services() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-16 xl:py-24">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="flex flex-wrap mx-[-15px] !text-center mb-16">
          <div className="md:w-11/12 lg:w-10/12 xl:w-10/12 w-full flex-[0_0_auto] px-4 mx-auto">
            <h3 className="!text-[1.5rem] md:!text-[2.5rem] xl:!text-[3.3rem] font-bold !leading-[1.15] tracking-tight text-[#343f52] !mb-8">
              Más que un capítulo, somos un hogar de innovación que demuestra que la tecnología nos une a todos.
            </h3>
            <div className="w-24 h-1.5 bg-[#605dba] mx-auto rounded-full opacity-50"></div>
          </div>
        </div>

        {/* CONTENIDO HISTÓRICO EXPANDIDO */}
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-10/12 xl:w-9/12 w-full px-4">
            <div className="prose prose-lg xl:prose-xl text-gray-600 text-justify mx-auto space-y-8 font-serif-primary">
              
              {/* Párrafo 1: Fundación y Primeros Pasos */}
              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">El Origen y la Resiliencia (2006-2009)</span>
                La historia de IEEE ComSoc PUCP es un testimonio vivo de resiliencia. Nuestro capítulo nació formalmente en 2006, fundado por el estudiante <strong>Dennis Zárate</strong> y un grupo visionario, contando con el impulso clave de Angelo Velarde como primer asesor. Tras un periodo inicial de actividad y una posterior pausa, en 2009 se sentaron las bases para nuestro primer gran renacimiento. El estudiante <strong>Victor Chang</strong> asumió el inmenso reto de "volver a juntar a la gente" sin un traspaso de gestión previo, demostrando que la pasión por la tecnología puede superar cualquier obstáculo.
              </p>

              {/* Párrafo 2: Creatividad Técnica */}
              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">Ingenio en Acción (2010-2013)</span>
                Durante esta etapa, la gestión se enfocó en la difusión creativa de la carrera. El capítulo lanzó su evento estrella: <em>"Telecomunicaciones Aplicadas a los Videojuegos"</em>, donde utilizaron una partida de <strong>Counter-Strike 1.6</strong> para explicar de forma práctica conceptos complejos como los modelos OSI y TCP/IP. Además, llevaron la teoría a la práctica realizando conexiones P2P reales entre diversos pabellones de la universidad, inspirando a una nueva generación de estudiantes.
              </p>

              {/* Párrafo 3: La Era Digital */}
              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">Renacimiento Digital (2021-2022)</span>
                Tras un segundo periodo de pausa, el capítulo resurgió con fuerza en plena pandemia. En 2021, <strong>Darwin Aponte</strong> y su equipo reactivaron la comunidad adaptándose al mundo virtual y lanzando nuestra primera cuenta de Instagram. Este impulso alcanzó su máximo esplendor histórico en 2022 bajo el liderazgo de <strong>Diana Sologuren</strong>. Con el asesoramiento de Eduardo Campos, expandimos nuestra huella a TikTok y LinkedIn, logrando un hito internacional: ganar el <strong>1er lugar en el "WICE International Women's Day 2022 Exemplary Contest"</strong>.
              </p>

              {/* Párrafo 4: Retorno a la Presencialidad */}
              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">De Vuelta al Campus (2023-2024)</span>
                La gestión 2023, liderada por <strong>Angelo Ramos</strong>, capitalizó el éxito digital para traer esa energía de vuelta a los eventos presenciales post-pandemia, reconectando a los miembros cara a cara. Aunque 2024 marcó una breve pausa de reestructuración, sirvió como preámbulo para la etapa más ambiciosa de nuestra historia.
              </p>

              {/* Párrafo 5: Tu párrafo personalizado */}
              <p>
                <span className="font-bold text-[#343f52] block !mb-2 !text-[1.3rem]">Consolidación actual (2025)</span>
                Hoy, bajo la presidencia de Josh Yauri, vivimos una nueva era de consolidación interdisciplinaria. Este esfuerzo sostenido culminó el 22 de noviembre de 2025, cuando fuimos reconocidos como el <strong>Capítulo Estudiantil Ejemplar de la Sección IEEE Perú</strong>. Este hito histórico, logrado por primera vez en nuestra trayectoria, premia la excelencia técnica y el compromiso de una familia que ahora integra talentos de Telecomunicaciones, Ingeniería Industrial, Psicología, Informática, entre muchas más comunidades.
              </p>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}