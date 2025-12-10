import React from "react";
import Image from "next/image";
import Members from "@/components/homes/home-26/Members";
import { teamMembersRRHH } from "@/data/team";

export default function About() {
  return (
    <>
      {" "}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] !text-center">
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <div className="icon-wrapper mb-5 mx-auto w-[2.6rem] h-[2.6rem]">
              <div 
                className="w-12 h-12 mb-5 mx-auto bg-[#605dba]"
                style={{
                  maskImage: `url('/assets/img/icons/solid/team.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url('/assets/img/icons/solid/team.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </div>
            <h4>Recursos Humanos</h4>
            <p className="!mb-2">
              Reclutamiento, integración y clima organizacional.
            </p>
          </div>
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <div className="icon-wrapper mb-5 mx-auto w-[2.6rem] h-[2.6rem]">
              <div 
                className="w-12 h-12 mb-5 mx-auto bg-[#605dba]"
                style={{
                  maskImage: `url('/assets/img/icons/solid/bullhorn.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url('/assets/img/icons/solid/bullhorn.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </div>
            <h4>Marketing</h4>
            <p className="!mb-2">
              Redes sociales, diseño gráfico y publicidad.
            </p>
          </div>
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <div className="icon-wrapper mb-5 mx-auto w-[2.6rem] h-[2.6rem]">
              <div 
                className="w-12 h-12 mb-5 mx-auto bg-[#605dba]"
                style={{
                  maskImage: `url('/assets/img/icons/solid/calendar.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url('/assets/img/icons/solid/calendar.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </div>
            <h4>Gestión</h4>
            <p className="!mb-2">
              Logística, finanzas y planificación estratégica.
            </p>
          </div>
        </div>
        {/*/column */}
        <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full">
          <div className="md:!px-3 lg:!px-0 xl:!px-3">
            <div className="icon-wrapper mb-5 mx-auto w-[2.6rem] h-[2.6rem]">
              <div 
                className="w-12 h-12 mb-5 mx-auto bg-[#605dba]"
                style={{
                  maskImage: `url('/assets/img/icons/solid/bulb.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url('/assets/img/icons/solid/bulb.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </div>
            <h4>Investigación</h4>
            <p className="!mb-2">
              Papers, talleres técnicos y revistas.
            </p>
          </div>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      {/*/.row */}
      <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !mx-auto xl:!order-2 lg:!order-2 px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0">
          <figure className="m-0 p-0">
            <Image
              className="!w-[800px] !h-[615px] object-cover"
              srcSet="/assets/img/illustrations/3d5@2x.png 2x"
              alt="image"
              src="/assets/img/area_rrhh.jpg"
              width={800}
              height={615}
            />
          </figure>
        </div>
        {/*/column */}
        <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full !mr-auto px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0">
          <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35 !tracking-[0.02rem] !mb-3">
            El corazón de nuestra comunidad: integramos y potenciamos a cada miembro.
          </h2>
          <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-5 xxl:!pr-5">
            Área de Recursos Humanos
          </h3>
          <p className="!mb-6">
            Nos encargamos de reclutar nuevos talentos, fomentar la integración mediante dinámicas y velar por el bienestar de los miembros. Creamos el ambiente ideal para que la familia ComSoc siga creciendo unida.
          </p>
            <Members members={teamMembersRRHH} />
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
    </>
  );
}
