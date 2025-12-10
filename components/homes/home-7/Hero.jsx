import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="wrapper bg-gradient-purple">
      <div className="container py-[4rem] xl:pt-20 lg:pt-20 md:pt-20 xl:pb-16 lg:pb-8 md:pb-8">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div
            className="w-full flex-[0_0_auto] px-4 max-w-full mx-auto"
            data-cues="zoomIn"
            data-group="welcome"
            data-interval={-200}
          >
            <h1 className="font-extrabold tracking-tight mb-6 leading-none">
              <span className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.2rem] text-[#343f52]">
                  Más que ingeniería,
              </span>
              <br />
              <span className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.2rem] text-transparent bg-clip-text bg-gradient-to-r from-[#605dba] to-[#747ed1]">
                creamos conexiones.
              </span>
            </h1>
            <p className="lead !text-[1.3rem] font-medium leading-relaxed text-gray-600 md:px-10 xl:px-32 mb-10 max-w-[900px] mx-auto">
              Somos el capítulo estudiantil IEEE ComSoc PUCP: donde la pasión por las telecomunicaciones se transforma en innovación y liderazgo.            </p>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div
          className="flex justify-center"
          data-cues="slideInDown"
          data-group="join"
          data-delay={900}
        >
          <span>
            <Link
              href={`/eventos`}
              className="btn btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] mx-1"
            >
              Ver eventos
            </Link>
          </span>
        </div>
        {/* /div */}
        <div
          className="flex flex-wrap mx-[-15px] !mt-[3.5rem]"
          data-cue="fadeIn"
          data-delay={1600}
        >
          <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <figure className="m-0 p-0">
              <Image
                className="max-w-full h-auto"
                srcSet="/assets/img/integracion1.jpg 2x"
                alt="image"
                src="/assets/img/integracion1.jpg"
                width={800}
                height={573}
              />
            </figure>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
