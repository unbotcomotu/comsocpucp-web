import React from "react";
import Image from "next/image";
import Members from "@/components/homes/home-26/Members";
import { teamMembersM } from "@/data/team";

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
                            src="/assets/img/area_marketing.jpg"
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
                        Llevamos nuestra voz al mundo: creatividad que conecta.
                    </h2>
                    <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-5">
                        Área de Marketing
                    </h3>
                    {/* ml-auto en el párrafo asegura que si el texto es corto, se pegue a la derecha */}
                    <p className="!mb-6 ml-auto">
                        Gestionamos la identidad visual y las redes sociales del capítulo. Desde el diseño de piezas gráficas hasta estrategias de contenido, nos aseguramos de que cada evento y logro de IEEE ComSoc PUCP llegue a todos.
                    </p>

                    {/* IMPORTANTE: Flex justify-end para mover los avatares a la derecha */}
                    <div className="flex justify-start xl:justify-end lg:justify-end">
                        <Members members={teamMembersM} />
                    </div>
                </div>
            </div>
        </>
    );
}