import Image from "next/image";
import React from "react";

export default function Members({ members }) {
  return (
    <>
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
              
              {/* Card contenedor */}
              <div className="card2 overflow-hidden flex"> {/* Asegúrate que tenga flex si no lo tiene por clase CSS */}
                
                {/* CAMBIO 1: FIGURE
                   - Añadimos h-[300px] para fijar la altura igual que el ancho.
                   - Ahora es una caja de 300x300 rígida.
                */}
                <figure className="w-[300px] h-[300px] min-w-[300px] shrink-0 m-0 relative">
                  <Image
                    /* CAMBIO 2: IMAGE
                       - Quitamos width={300} y height={300}.
                       - Ponemos `fill` para que llene el figure.
                       - `object-cover` recorta lo que sobre.
                    */
                    className="object-cover !rounded-l-[0.4rem] !rounded-r-none !h-full !w-full"
                    srcSet={member.imageSrcSet}
                    alt={member.name || "Miembro del equipo"}
                    src={member.imageSrc}
                    fill 
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </figure>

                <div className="card-body px-6 py-5 flex flex-col justify-center">
                  <h4 className="!mb-1">{member.name}</h4>
                  <p className="!mb-0 text-[.85rem]">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}