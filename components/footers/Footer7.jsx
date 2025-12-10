"use client";
import { footerLinks } from "@/data/footerLinks";
import { socialLinks } from "@/data/socials";
import Link from "next/link";
import React from "react";

export default function Footer7() {
  return (
    <footer className="bg-gradient-reverse-purple pt-16 xl:pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* COLUMNA 1 (Izquierda) - Ocupa 4 columnas de 12 */}
          <div className="lg:col-span-4">
            <div className="widget">
              <h3 className="text-2xl font-bold mb-4 text-[#343f52]">
                Únete a la comunidad
              </h3>
              <p className="lead text-base mb-5 text-[#60697b] font-medium">
                Hagamos el futuro de las TIC mejor juntos. Mantente atento a anuncios de convocatorias por nuestras redes sociales.
              </p>
            </div>
          </div>

          {/* ESPACIO VACÍO - Ocupa 2 columnas para separar visualmente */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-3"></div>

          {/* COLUMNA 2 (Derecha - Links) - Ocupa 2 o 3 columnas */}
          <div className="lg:col-span-3 xl:col-span-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-base font-bold text-[#343f52]">
                Descubre más
              </h4>
              <ul className="list-none p-0 m-0 space-y-2">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <Link
                      className="text-[#60697b] hover:text-[#747ed1] transition-colors"
                      href={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMNA 3 (Derecha - Contacto) - Ocupa 3 columnas */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="widget">
              <h4 className="widget-title mb-3 text-base font-bold text-[#343f52]">
                Mantente en contacto
              </h4>
              <address className="not-italic mb-4 text-[#60697b]">
                Av. Universitaria 1801, <br /> San Miguel, Lima, Perú
              </address>
              <a
                href="mailto:comsoc.pucp@ieee.org"
                className="text-[#60697b] hover:text-[#747ed1] block mb-1"
              >
                comsoc.pucp@ieee.org
              </a>
              <span className="text-[#60697b]">+51 955260700</span>
            </div>
          </div>

        </div>
        {/* /.row */}

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mb-0 text-sm text-[#60697b] text-center md:text-left">
            © {new Date().getFullYear()} IEEE ComSoc PUCP. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4">
            {socialLinks.map((elm, i) => (
              <a
                key={i}
                className="text-[#60697b] hover:text-[#747ed1] text-lg transition-transform hover:-translate-y-1"
                href={elm.href}
              >
                <i className={`uil ${elm.icon}`} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}