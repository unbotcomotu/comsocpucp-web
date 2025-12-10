import Footer23 from "@/components/footers/Footer23";
import Header25 from "@/components/headers/Header25";
import About from "@/components/homes/home-26/About";
import About2 from "@/components/homes/home-26/About2";
import About3 from "@/components/homes/home-26/About3";
import About4 from "@/components/homes/home-26/About4";
import Analize from "@/components/homes/home-26/Analize";
import React from "react";
import MembersParado from "@/components/homes/home-26/MembersParado";
import Footer5 from "@/components/footers/Footer5";

export const metadata = {
  title:
    "Demo 26 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function DemoPage26() {
  return (
    <>
      <div className="color-grape font-urbanist demo26">
        <div className="grow shrink-0">
          <Header25 />
          <>

            {/* /section */}
            <section className="wrapper bg-[rgba(255,255,255)] opacity-100">
              <div className="container pt-20 pb-8 xl:pb-8 lg:pb-8 md:pb-8">
                  <MembersParado />
                  <div className="flex flex-wrap mx-[-15px] !text-center">
                  <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] xl:w-10/12 xl:!ml-[8.33333333%] xxl:w-8/12 xxl:!ml-[16.66666667%] flex-[0_0_auto] !px-[15px] max-w-full">
                    <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-9">
                      Conoce nuestras coordinaciones de trabajo
                    </h3>
                  </div>
                  {/* /column */}
                </div>
                {/* /.row */}

                <About />
                {/*/.row */}
                  <About2 />
                {/*/.row */}
                  <About3 />
                {/*/.row */}
                  <About4 />
              </div>
              {/* /.container */}
            </section>
            {/* /section */}

            {/* /section */}
          </>
        </div>
        <Footer5 hasMarginTop={false} />
      </div>
    </>
  );
}
