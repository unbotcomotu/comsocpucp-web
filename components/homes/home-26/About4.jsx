import React from "react";
import Image from "next/image";
import Members from "@/components/homes/home-26/Members";
import { teamMembersI } from "@/data/team";

export default function About2() {
    return (
        <>
            {/* Usamos flex normal (sin reverse) para tener control total */}
            <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">

                {/* COLUMNA 1: IMAGEN (Izquierda) */}
                {/* CLAVE: Mantenemos '!mx-auto'.
             En el bloque de arriba, la imagen tiene mx-auto. Si se lo quitamos aquí,
             la imagen se pega al borde y el espacio visual cambia. Al dejarlo,
             la imagen se centra en su mitad, igual que arriba. */}
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full  px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0">
                    <figure className="m-0 p-0">
                        <Image
                            className="!w-[800px] !h-[615px] object-cover"
                            srcSet="/assets/img/illustrations/3d5@2x.png 2x"
                            alt="image"
                            src="/assets/img/area_investigacion.jpg"
                            width={800}
                            height={615}
                        />
                    </figure>
                </div>

                {/* COLUMNA 2: TEXTO (Derecha) */}
                {/* 1. '!ml-auto': Empuja todo este bloque a la derecha (Espejo del !mr-auto de arriba).
              2. 'xl:text-right lg:text-right': Alinea los textos a la derecha. */}
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full !mx-auto !ml-auto px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 xl:text-right lg:text-right">
                    <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
                        Innovación técnica en la vanguardia de la tecnología.
                    </h2>
                    <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-5">
                        Área de Investigación
                    </h3>
                    {/* ml-auto en el párrafo asegura que si el texto es corto, se pegue a la derecha */}
                    <p className="!mb-6 ml-auto">
                        Fomentamos la producción académica y el aprendizaje técnico. Organizamos papers, grupos de estudio y talleres especializados para profundizar en las últimas tendencias tecnológicas y científicas.
                    </p>

                    {/* IMPORTANTE: Flex justify-end para mover los avatares a la derecha */}
                    <div className="flex justify-start xl:justify-end lg:justify-end">
                        <Members members={teamMembersI} />
                    </div>
                </div>
            </div>
        </>
    );
}