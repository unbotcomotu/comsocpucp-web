"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="container py-12 xl:py-16">
      
      {/* --- SECCIÓN 1: Misión, Visión y ¿Qué hacemos? --- */}
      <div className="flex flex-wrap lg:flex-nowrap gap-10 xl:gap-20 mb-12 lg:mb-16">        
        {/* COLUMNA IZQUIERDA: Misión y Visión (Checkerboard) */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          
          {/* FILA 1: Imagen Integración + Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-auto gap-6 md:gap-0">
            {/* Imagen: Se estira para igualar al texto */}
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
              <Image
                src="/assets/img/integracion2.jpeg"
                alt="Integración"
                fill
                className="object-cover"
              />
            </div>
            {/* Texto */}
            <div className="card shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-b-lg md:rounded-r-lg md:rounded-bl-none h-full">
              <div className="card-body p-8 flex flex-col justify-center h-full">
                <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none mb-4 w-12 h-12 inline-flex items-center justify-center rounded-full">
                  <i className="uil uil-monitor text-xl" />
                </div>
                <h4 className="text-lg font-bold mb-2">Misión</h4>
                <p className="mb-0 text-sm leading-relaxed">
                  Impulsar estudiantes y difundir las TIC con innovación, aprendizaje y conexiones globales.
                </p>
              </div>
            </div>
          </div>

          {/* FILA 2: Misión + Imagen Copa */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-auto gap-6 md:gap-0">
             {/* Texto (Primero en escritorio para efecto ajedrez) */}
             <div className="card shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-t-lg md:rounded-l-lg md:rounded-tr-none h-full order-2 md:order-1">
              <div className="card-body p-8 flex flex-col justify-center h-full">
                <div className="icon btn btn-circle btn-lg btn-soft-purple pointer-events-none mb-4 w-12 h-12 inline-flex items-center justify-center rounded-full">
                  <i className="uil uil-mobile-android text-xl" />
                </div>
                <h4 className="text-lg font-bold mb-2">Visión</h4>
                <p className="mb-0 text-sm leading-relaxed">
                  Ser capítulo líder en creatividad tecnológica, formando futuros profesionales destacados en la industria de las TIC.
                </p>
              </div>
            </div>
            {/* Imagen */}
            <div className="relative h-64 md:h-auto min-h-[300px] rounded-b-lg md:rounded-r-lg md:rounded-bl-none overflow-hidden order-1 md:order-2">
              <Image
                src="/assets/img/copa.png"
                alt="Copa"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: ¿Qué hacemos? */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">¿Qué hacemos?</h2>
          <p className="lead text-lg text-gray-600 font-medium mb-6">
            IEEE ComSoc PUCP es una comunidad que impulsa el aprendizaje y la innovación en tecnologías de comunicaciones.
          </p>
          <p className="text-gray-500 mb-6">
            Mediante proyectos, talleres y alianzas, fomentamos el crecimiento profesional y la colaboración. Más que un capítulo técnico, es un espacio donde la curiosidad se convierte en experiencia.
          </p>
        </div>
      </div>

      {/* --- SECCIÓN 2: Únete + Stats (Lado a Lado) --- */}
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-10 xl:gap-20">
        
        {/* Texto Únete (Izquierda) */}
        <div className="w-full lg:w-5/12">
            <h2 className="text-3xl font-bold mb-4">Únete a nuestra comunidad</h2>
            <p className="lead text-lg font-medium mb-4 text-gray-600">
                Forma parte de un capítulo donde la curiosidad, la tecnología y las ganas de aprender se encuentran.
            </p>
            <p className="text-gray-500 mb-6">
                En IEEE ComSoc PUCP te integrarás a una comunidad que impulsa tu crecimiento a través de proyectos, talleres y experiencias que conectan la teoría con la práctica.
            </p>
            {/* Opcional: Botón aquí si quisieras */}
        </div>

        {/* Grid de Stats (Derecha - Cuadrada 2x2) */}
        <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stat 1 */}
                <div className="card border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="card-body p-6 flex items-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-purple mr-4 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                            <i className="uil uil-presentation-check text-xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-0 text-[#343f52]">+10</h3>
                            <p className="mb-0 text-sm text-gray-500">Proyectos</p>
                        </div>
                    </div>
                </div>
                {/* Stat 2 */}
                <div className="card border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="card-body p-6 flex items-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-red mr-4 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                            <i className="uil uil-users-alt text-xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-0 text-[#343f52]">+50</h3>
                            <p className="mb-0 text-sm text-gray-500">Miembros</p>
                        </div>
                    </div>
                </div>
                {/* Stat 3 */}
                <div className="card border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="card-body p-6 flex items-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-yellow mr-4 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                            <i className="uil uil-user-check text-xl" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold mb-0 bg-clip-text text-transparent bg-gradient-to-r from-[#605dba] to-[#FF6B6B]">
                              +1000
                            </h3>
                            <p className="mb-0 text-sm text-gray-500">Seguidores</p>
                        </div>
                    </div>
                </div>
                {/* Stat 4 */}
                <div className="card border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="card-body p-6 flex items-center">
                        <div className="icon btn btn-circle btn-lg btn-soft-aqua mr-4 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                            <i className="uil uil-trophy text-xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-0 text-[#343f52]">2</h3>
                            <p className="mb-0 text-sm text-gray-500">Premios</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}