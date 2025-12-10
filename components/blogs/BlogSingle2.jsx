import React from "react";
import RelatedBlogs from "./RelatedBlogs2";
import Image from "next/image";

export default function BlogSingle2({ marginTop = true }) {
  return (
    <div className={`blog single ${marginTop ? "!mt-[-7rem]" : ""} `}>
      <div className="card shadow-lg border-0">
        
        {/* IMAGEN DE PORTADA */}
        <figure className="card-img-top">
          <Image
            alt="Taller Videojuegos Portada"
            src="/assets/img/telecomunicaciones_videojuegos_portada.png" // ¡Asegúrate de cambiar esto por tu imagen real!
            width={960}
            height={600}
            className="w-full h-auto object-cover"
          />
        </figure>

        <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.8rem_3rem_2.8rem] lg:!p-[2.8rem_3rem_2.8rem] md:!p-[2.8rem_3rem_2.8rem]">
          <div className="classic-view">
            <article className="post !mb-8">
              
              <div className="relative !mb-5 text-gray-600 leading-relaxed text-lg text-justify space-y-6">
                
                {/* INTRODUCCIÓN GAMER */}
                <h2 className="h2 !mb-4 !leading-[1.3] text-[#343f52]">
                  ¿Lag en tu partida? Descubre la ingeniería detrás del juego
                </h2>
                <p>
                  Si alguna vez has perdido una partida por culpa del "ping" o te has preguntado cómo es posible jugar con alguien al otro lado del mundo en tiempo real, este evento es para ti.
                  El <strong>martes 13 de agosto</strong>, IEEE ComSoc PUCP presenta el taller interactivo <strong>"Telecomunicaciones Aplicadas a los Videojuegos"</strong>.
                </p>
                <p>
                  Prepárate para una sesión presencial en el <strong>Aula V305 de la PUCP</strong>, donde dejaremos la teoría aburrida para ensuciarnos las manos. 
                  Combinaremos cables, servidores y tus juegos favoritos para entender las redes desde adentro.
                </p>

                {/* CITA DESTACADA */}
                <blockquote className="border-l-[#605dba] !leading-[1.7] font-medium !pl-4 border-l-[0.15rem] border-solid !text-[1rem] !my-8 italic text-gray-700">
                  <p>
                    "No es solo jugar; es entender la autopista por donde viajan tus datos. Aprende a optimizar tu conexión y domina la tecnología que hace posible el multiplayer."
                  </p>
                </blockquote>

                {/* AGENDA DEL TALLER */}
                <h3 className="h3 !mb-4 font-bold text-[#343f52]">Niveles del Taller</h3>
                <p className="!mb-6">
                  Hemos diseñado una experiencia de 3 horas dividida en fases prácticas para que aprendas haciendo (y jugando):
                </p>

                {/* Bloque 1: Fundamentos */}
                <div className="mb-8 p-6 bg-[#f9faff] rounded-xl border border-gray-100">
                  <h4 className="h5 !mb-2 font-bold text-[#605dba]">
                    Nivel 1: Arquitectura de Red y LAN
                  </h4>
                  <p className="text-sm text-gray-500 !mb-2 font-semibold">🛠️ Hardware & Conceptos</p>
                  <p className="mb-0">
                    Empezaremos desde cero. Aprenderás sobre servidores, redes LAN y multijugador. 
                    Además, realizaremos una dinámica de <strong>cableado básico</strong> para montar nuestra propia red local en el aula.
                  </p>
                </div>

                {/* Bloque 2: Protocolos en Vivo */}
                <div className="mb-8 p-6 bg-[#f9faff] rounded-xl border border-gray-100">
                  <h4 className="h5 !mb-2 font-bold text-[#605dba]">
                    Nivel 2: TCP vs UDP en Acción
                  </h4>
                  <p className="text-sm text-gray-500 !mb-2 font-semibold">🎮 Minecraft & CS:GO</p>
                  <p className="mb-0">
                    ¿Por qué algunos juegos usan TCP y otros UDP? Lo pondremos a prueba en vivo. 
                    Usaremos <strong>Minecraft</strong> para testear la fiabilidad del protocolo TCP y <strong>Counter-Strike (CS:GO)</strong> para ver la velocidad del UDP.
                  </p>
                </div>

                {/* Bloque 3: Torneo */}
                <div className="mb-8 p-6 bg-[#f9faff] rounded-xl border border-gray-100">
                  <h4 className="h5 !mb-2 font-bold text-[#605dba]">
                    Boss Fight: Torneo y Optimización
                  </h4>
                  <p className="text-sm text-gray-500 !mb-2 font-semibold">🏆 Competencia</p>
                  <p className="mb-0">
                    Aprende técnicas reales para <strong>reducir el ping</strong> (uso de VPNs y enrutamiento). 
                    Finalizaremos con un <strong>Minitorneo de Minecraft</strong> donde pondrás a prueba tu destreza (¡y tu conexión!). Habrá premios para los ganadores.
                  </p>
                </div>

                {/* PONENTE */}
                <h3 className="h3 !mb-4 font-bold text-[#343f52]">Tu Instructor</h3>
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-grow">
                    <h5 className="font-bold text-[#605dba] mb-1">Área de Investigación de IEEE ComSoc PUCP</h5>
                  </div>
                </div>

                {/* BENEFICIOS */}
                <h3 className="h3 !mb-4 font-bold text-[#343f52]">Beneficios de participar</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#605dba]">
                  <li><strong>Merchandising:</strong> Premios exclusivos del capítulo para los ganadores de las dinámicas.</li>
                  <li><strong>Full Práctica:</strong> Nada de diapositivas aburridas; todo será demostrativo.</li>
                  <li><strong>Certificación:</strong> Constancia de participación para potenciar tu CV.</li>
                </ul>

                {/* --- ZONA DE 3 BOTONES --- */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-12">
                  
                  {/* 1. REGISTRO (Forms) - Principal */}
                  <a 
                    href="https://forms.gle/7Qed6XMJcFfxANwu9" 
                    target="_blank" 
                    className="btn !rounded-[50rem] !bg-[#605dba] !border-[#605dba] !text-white hover:!bg-[#4a47a3] hover:!border-[#4a47a3] !px-6 !py-3 !shadow-md hover:!shadow-lg hover:!translate-y-[-0.2rem] transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                  >
                    <span>¡Inscribirme Ahora!</span>
                  </a>

                  {/* 2. VTOOLS - Secundario */}
                  <a 
                    href="https://events.vtools.ieee.org/m/513848" 
                    target="_blank" 
                    className="btn !rounded-[50rem] !bg-white !border-[#605dba] !text-[#605dba] hover:!bg-[#605dba] hover:!text-white !px-6 !py-3 !shadow-md hover:!shadow-lg hover:!translate-y-[-0.2rem] transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                  >
                    <i className="uil uil-info-circle" />
                    <span>vTools</span>
                  </a>

                  {/* 3. INSTAGRAM - Terciario */}
                  <a 
                    href="https://www.instagram.com/p/DNOwk-chtWV/" 
                    target="_blank" 
                    className="btn !rounded-[50rem] !bg-white !border-[#d62976] !text-[#d62976] hover:!bg-[#d62976] hover:!text-white !px-6 !py-3 !shadow-md hover:!shadow-lg hover:!translate-y-[-0.2rem] transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                  >
                    <i className="uil uil-instagram" />
                    <span>Instagram</span>
                  </a>

                </div>

              </div>
              
              {/* Footer del post (Tags y Share) */}
              <div className="post-footer xl:!flex xl:!flex-row xl:!justify-between lg:!flex lg:!flex-row lg:!justify-between md:!flex md:!flex-row md:!justify-between !items-center !mt-8">
                <div>
                  <ul className="pl-0 list-none tag-list !mb-0">
                    {["IEEE", "IEEE ComSoc", "PUCP", "Navidad", "Tecnología"].map((tag, i) => (
                      <li key={i} className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                        <a href="#" className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]">
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="!mb-0 xl:!mb-2 lg:!mb-2 md:!mb-2 mt-4 md:mt-0">
                  <div className="dropdown share-dropdown btn-group">
                    <button 
                      className="btn btn-sm btn-red !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle !mb-0 hover:!bg-[#e2626b] hover:!text-white" 
                      data-bs-toggle="dropdown" 
                      aria-haspopup="true" 
                      aria-expanded="false"
                    >
                      <i className="uil uil-share-alt !mr-[0.3rem]" /> Compartir
                    </button>
                    <div className="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]">
                      <a className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#">
                        <i className="uil uil-twitter w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem]" /> Twitter
                      </a>
                      <a className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#">
                        <i className="uil uil-facebook-f w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem]" /> Facebook
                      </a>
                      <a className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#">
                        <i className="uil uil-linkedin w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem]" /> Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </article>
          </div>

          <hr />

          {/* CAJA DE AUTOR (Nilo Cori - Manteniendo consistencia) */}
          <div className="author-info xl:!flex lg:!flex md:!flex items-center !mb-3 mt-8">
            <div className="flex items-center">
              <figure className="w-12 h-12 !relative !mr-4 rounded-[100%]">
                <Image
                  className="rounded-[50%] object-cover"
                  alt="Nilo Cori"
                  src="/assets/img/nilo_cori.png"
                  width={120}
                  height={120}
                />
              </figure>
              <div>
                <h6>
                  <a className="!text-[#343f52] font-bold hover:text-[#605dba]">Nilo Cori</a>
                </h6>
                <span className="!text-[0.75rem] !text-[#aab0bc] m-0 p-0 list-none">
                  Vicepresidente IEEE ComSoc PUCP
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mb-6">
            Estudiante de Ingeniería de las Telecomunicaciones en la Pontificia Universidad Católica del Perú. 
            Apasionado por las redes de comunicación y la tecnología. Lidero iniciativas para fomentar el conocimiento técnico.
          </p>
          
          <nav className="nav social mb-10">
            <a className="text-[1rem] transition-all hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="https://www.facebook.com/nilorikel.coriramos">
              <i className="text-[1rem] !text-[#4470cf] uil uil-facebook-f" />
            </a>
            <a className="text-[1rem] transition-all hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="https://www.instagram.com/nilo_cori/">
              <i className="text-[1rem] !text-[#d53581] uil uil-instagram" />
            </a>
            <a className="text-[1rem] transition-all hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="https://www.linkedin.com/in/nilocori/">
              <i className="text-[1rem] !text-[#0077b5] uil uil-linkedin" />
            </a>
          </nav>

          <hr />

          <h3 className="!mb-6 !mt-8">Quizás también te interese</h3>
          <RelatedBlogs />

        </div>
      </div>
    </div>
  );
}