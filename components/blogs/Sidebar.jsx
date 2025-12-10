"use client";
import { posts3 } from "@/data/blogs";
import { socialLinks } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full sidebar">

      {/* /.widget */}
      <div className="widget ">
        <h4 className="widget-title !mb-3">Sobre nosotros</h4>
        <p>
          Somos el capítulo estudiantil IEEE ComSoc PUCP. Conectamos a estudiantes con el futuro de las telecomunicaciones a través de la innovación, proyectos y eventos de impacto.
        </p>

        {/* /.social */}
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Publicaciones relevantes</h4>
        <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
          {posts3.map((post, i) => (
            <li
              key={post.id}
              className={`clear-both block overflow-hidden ${
                i !== 0 ? "!mt-4" : ""
              }`}
            >
                <figure className="!rounded-[.4rem] float-left w-20 h-20 relative mr-4 overflow-hidden">
                  <Link href={`/eventos/`+post.id}>
                    <Image
                      className="!rounded-[.4rem] !h-full object-cover transition-transform duration-300 hover:scale-105"
                      alt="imagen evento"
                      src={post.image}
                      fill // Llena el contenedor (w-20 h-20)
                      sizes="80px"
                    />
                  </Link>
                </figure>
                <div className="!relative !ml-[6rem] !mb-0">
                  <h6 className="!mb-2">
                  <Link
                    className="!text-[#343f52] hover:!text-[#3f78e0]"
                    href={`/eventos/`+post.id}
                  >
                    {post.title}
                  </Link>
                </h6>
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                  <li className="post-date inline-block">
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    <span>{post.date}</span>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
        {/* /.image-list */}
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Categorías</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              Técnico (2)
            </a>
          </li>
        </ul>
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Tags</h4>
        <ul className="pl-0 list-none tag-list">
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              IEEE
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              IEEE ComSoc
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Tecnología
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              PUCP
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Navidad
            </a>
          </li>

        </ul>
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Archivo</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
            <a className="!text-[#60697b] hover:!text-[#3f78e0]" href="#">
              2025
            </a>
          </li>
        </ul>
      </div>
      {/* /.widget */}
    </aside>
  );
}
