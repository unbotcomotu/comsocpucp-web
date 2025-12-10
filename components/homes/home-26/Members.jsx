
import Image from "next/image";
import React from "react";

export default function Members({members}) {
    return (
        <>
            {/*/.row */}
            <div className="flex flex-wrap grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px]">
                {members?.map((member, index) => (
                    <div
                        key={index}
                        className="md:w-12/12 lg:w-12/12 xl:w-12/12 w-full flex-[0_0_auto] xl:!px-[25px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full"
                    >
                        <div className="!relative">
                            <div
                                className="shape !rounded-[.4rem] !bg-[#f2f3fb] rellax xl:block lg:block md:block absolute"
                                data-rellax-speed={0}
                                style={{
                                    bottom: "-0.75rem",
                                    right: "-0.75rem",
                                    width: "98%",
                                    height: "98%",
                                    zIndex: 0,
                                }}
                            />
                            {/* card2 ya tiene flex-row, por lo que los hijos se ponen lado a lado */}
                            <div className="card2 overflow-hidden">
                                {/* CAMBIOS EN FIGURE:
                                    1. w-[300px]: Forzamos el ancho que quieres.
                                    2. shrink-0: Evita que la imagen se encoja si el texto es muy largo.
                                    3. m-0: Quitamos márgenes por defecto de figure.
                                    4. relative: Necesario para el posicionamiento interno.
                                */}
                                <figure className="w-[300px] min-w-[300px] shrink-0 m-0 relative">
                                    <Image
                                        /* CAMBIOS EN IMAGE:
                                           1. absolute inset-0: Fuerza a la imagen a ocupar todo el espacio del figure.
                                           2. w-full h-full: Ocupa el 100% de alto y ancho del contenedor padre.
                                           3. object-cover: Recorta la imagen si el alto cambia, evitando que se vea "estirada".
                                        */
                                        className="w-full h-full object-cover !rounded-l-[0.4rem] !rounded-r-none"
                                        srcSet={member.imageSrcSet}
                                        alt="image"
                                        src={member.imageSrc}
                                        width={300}
                                        height={300}
                                    />
                                </figure>
                                <div className="card-body px-6 py-5" style={{alignContent: "center"}}>
                                    <h4 className="!mb-1">{member.name}</h4>
                                    <p className="!mb-0 text-[.85rem]">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/*/column */}
            </div>
        </>
    );
}