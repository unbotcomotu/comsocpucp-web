import React from "react";
import RelatedBlogs from "./RelatedBlogs1";
import Image from "next/image";

export default function BlogSingle({ marginTop = true }) {
  return (
    <div className={`blog single ${marginTop ? "!mt-[-7rem]" : ""} `}>
      <div className="card shadow-lg border-0">
        
        {/* IMAGEN DE PORTADA */}
        <figure className="card-img-top">
          <Image
            alt="CyberSpace Portada"
            src="/assets/img/cyberspace_portada.png"
            width={960}
            height={600}
            className="w-full h-auto object-cover"
          />
        </figure>

        <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.8rem_3rem_2.8rem] lg:!p-[2.8rem_3rem_2.8rem] md:!p-[2.8rem_3rem_2.8rem]">
          <div className="classic-view">
            <article className="post !mb-8">
              
              {/* CONTENIDO DEL ARTÍCULO */}
              <div className="relative !mb-5 text-gray-600 leading-relaxed text-lg text-justify space-y-6">
                
                {/* Introducción - Usando clases estándar h2 */}
                <h2 className="h2 !mb-4 !leading-[1.3] text-[#343f52]">
                  Prepárate para blindar tu futuro digital
                </h2>
                <p>
                  El mundo digital es un campo de batalla en constante evolución. ¿Estás preparado para enfrentarlo? 
                  Del <strong>23 al 25 de octubre de 2025</strong>, IEEE ComSoc PUCP presentará <strong>CyberSpace</strong>, 
                  un ciclo de webinars internacionales diseñado para llevar tus conocimientos de seguridad informática al siguiente nivel.
                </p>
                <p>
                  Este evento virtual, transmitido vía Zoom, reunirá a expertos de talla mundial para abordar temas críticos como 
                  la ciberhigiene, la seguridad ofensiva y el uso de Inteligencia Artificial para la detección de vulnerabilidades.
                </p>

                {/* Cita Destacada - Formato original de bloque */}
                <blockquote className="border-l-[#3f78e0] !leading-[1.7] font-medium !pl-4 border-l-[0.15rem] border-solid !text-[1rem] !my-8 italic text-gray-700">
                  <p>
                    "No se trata solo de proteger sistemas, sino de entender la mente del atacante. En CyberSpace, descifraremos las tácticas más avanzadas de explotación y defensa."
                  </p>
                </blockquote>

                {/* AGENDA - Mantenemos los recuadros bonitos pero con tipografía nativa */}
                <h3 className="h3 !mb-4 font-bold text-[#343f52]">Agenda Exclusiva</h3>
                <p className="!mb-6">
                  Hemos diseñado tres sesiones de alto impacto con ponentes que están definiendo el futuro de la industria:
                </p>

                {/* Día 1 */}
                <div className="mb-8 p-6 bg-[#f9faff] rounded-xl border border-gray-100">
                  <h4 className="h5 !mb-2 font-bold text-[#605dba]">
                    Día 1: Ciberhigiene y Autocuidado Digital
                  </h4>
                  <p className="text-sm text-gray-500 !mb-2 font-semibold">📅 Jueves 23 Octubre | 🕓 4:00 PM</p>
                  <p className="mb-0">
                    Iniciaremos con <strong>David Pereira (CEO de SecPro)</strong>, experto en computación forense con más de 
                    28 años de experiencia. Instructor del EC-Council y consultor para el <strong>FBI y US Marines</strong>, nos enseñará sobre autocuidado en la era de la IA.
                  </p>
                </div>

                {/* Día 2 */}
                <div className="mb-8 p-6 bg-[#f9faff] rounded-xl border border-gray-100">
                  <h4 className="h5 !mb-2 font-bold text-[#605dba]">
                    Día 2: Hacking Ofensivo con BEEF
                  </h4>
                  <p className="text-sm text-gray-500 !mb-2 font-semibold">📅 Viernes 24 Octubre | 🕔 5:00 PM</p>
                  <p className="mb-0">
                    Pasaremos a la acción con <strong>Gianpaul Custodio</strong> ("HackeMate"). Especialista en seguridad ofensiva, 
                    realizará una demostración técnica sobre <em>"Browser Exploitation Framework (BeEF)"</em>, revelando vulnerabilidades en navegadores.
                  </p>
                </div>

                {/* Día 3 */}
                <div className="mb-8 p-6 bg-[#f9faff] rounded-xl border border-gray-100">
                  <h4 className="h5 !mb-2 font-bold text-[#605dba]">
                    Día 3: IA vs Vulnerabilidades
                  </h4>
                  <p className="text-sm text-gray-500 !mb-2 font-semibold">📅 Sábado 25 Octubre | 🕕 6:00 PM</p>
                  <p className="mb-0">
                    <strong>Leandro Pazmiño</strong>, investigador y candidato a PhD, explorará cómo los Modelos de Lenguaje (LLM) 
                    pueden adaptarse para detectar vulnerabilidades de código automáticamente.
                  </p>
                </div>

                {/* BENEFICIOS */}
                <h3 className="h3 !mb-4 font-bold text-[#343f52]">¿Por qué asistir?</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-[#605dba]">
                  <li><strong>Certificación:</strong> Se entregarán certificados de participación a los asistentes.</li>
                  <li><strong>Dinámicas:</strong> Participa en sesiones de Kahoot y gana premios.</li>
                  <li><strong>Networking:</strong> Conecta con una comunidad internacional de entusiastas.</li>
                </ul>

                {/* --- ZONA DE 3 BOTONES --- */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-12">
                  
                  {/* 1. REGISTRO (Forms) - Principal / Sólido */}
                  <a 
                    href="https://forms.gle/1qY8zHcEHKxgs7AR6" 
                    target="_blank" 
                    className="btn !rounded-[50rem] !bg-[#605dba] !border-[#605dba] !text-white hover:!bg-[#4a47a3] hover:!border-[#4a47a3] !px-6 !py-3 !shadow-md hover:!shadow-lg hover:!translate-y-[-0.2rem] transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                  >
                    <span>¡Inscribirme Ahora!</span>
                  </a>

                  {/* 2. VTOOLS - Secundario / Borde Morado */}
                  <a 
                    href="https://events.vtools.ieee.org/m/513858" 
                    target="_blank" 
                    className="btn !rounded-[50rem] !bg-white !border-[#ff8000] !text-[#ff8000] hover:!bg-[#ff8000] hover:!text-white !px-6 !py-3 !shadow-md hover:!shadow-lg hover:!translate-y-[-0.2rem] transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                  >
                    <i className="uil uil-info-circle" />
                    <span>vTools</span>
                  </a>

                  {/* 3. INSTAGRAM - Terciario / Borde Rosa */}
                  <a 
                    href="https://www.instagram.com/p/DQDZOJ2DIrA" 
                    target="_blank" 
                    className="btn !rounded-[50rem] !bg-white !border-[#d62976] !text-[#d62976] hover:!bg-[#d62976] hover:!text-white !px-6 !py-3 !shadow-md hover:!shadow-lg hover:!translate-y-[-0.2rem] transition-all flex items-center justify-center gap-2 flex-grow sm:flex-grow-0"
                  >
                    <i className="uil uil-instagram" />
                    <span>Instagram</span>
                  </a>

                </div>

              </div>
              
              {/* FOOTER DEL POST (Estilo Original Restaurado) */}
              <div className="post-footer xl:!flex xl:!flex-row xl:!justify-between lg:!flex lg:!flex-row lg:!justify-between md:!flex md:!flex-row md:!justify-between !items-center !mt-8">
                
                {/* Tags */}
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

                {/* Share Buttons */}
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

          {/* CAJA DE AUTOR (Estilo Original) */}
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
                  Vicepresidente IEEE ComSoc PUCP 2025
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

          {/* BLOGS RELACIONADOS */}
          <h3 className="!mb-6 !mt-8">Quizás también te interese</h3>
          <RelatedBlogs />

        </div>
      </div>
    </div>
  );
}