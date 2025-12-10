import Blogs from "@/components/blogs/Blogs";
import Sidebar from "@/components/blogs/Sidebar";
import Footer5 from "@/components/footers/Footer5";
import Header25 from "@/components/headers/Header25";
import React from "react";

export const metadata = {
  title:
    "Blogs 02 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function BlogPage2() {
  return (
    <>
      <div className="grow shrink-0">
        <Header25
        />
        <section className="section-frame overflow-hidden">
          <div className="wrapper !bg-[#edf2fc]">
            <div className="container pt-14 pb-7 xl:!pt-24 xl:!pb-12 lg:!pt-24 lg:!pb-12 md:!pt-24 md:!pb-12 !text-center">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                  <h1 className="!text-[2.5rem] md:!text-[3.5rem] xl:!text-[4.5rem] font-bold !leading-[1.1] !mb-4 text-[#343f52]">
                    Eventos
                  </h1>
                  <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] !leading-[1.65] text-[0.9rem] font-medium !mb-[.25rem]">
                    Conoce lo último que hemos preparado para ti, fan de la tecnología.
                  </p>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.wrapper */}
        </section>

        <div className="wrapper !bg-[#ffffff]">
          <div className="container py-[2.25rem] xl:!py-12 lg:!py-12 md:!py-12">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px]">
              <Blogs
                marginTop={false}
                parentClass="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full md:!px-[20px] lg:!px-[20px] xl:!px-[35px]"
              />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
