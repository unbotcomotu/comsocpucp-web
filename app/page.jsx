import Footer7 from "@/components/footers/Footer7";
import Header25 from "@/components/headers/Header25";
import About from "@/components/homes/home-7/About";
import Alianzas from "@/components/homes/home-7/Alianzas";
import Features from "@/components/homes/home-7/Features";
import Hero from "@/components/homes/home-7/Hero";
import Projects from "@/components/homes/home-7/Projects";
import Testimonials from "@/components/homes/home-7/Testimonials";
import React from "react";

export const metadata = {
  title:
    "IEEE ComSoc PUCP - Plataforma Web",
  description:
    "Descubre los eventos y actividades que está realizando IEEE ComSoc PUCP",
};
export default function DemoPage7() {
  return (
    <>
      <div className="color-purple font-thicccboi demo7">
        <div className="!font-THICCCBOI !text-[.85rem]">
          <div className="grow shrink-0">
            <Header25 />

            <>
              <Hero />
              {/* /section */}
              <section className="wrapper !bg-[#ffffff]">
                <About />
                {/* /.container */}
                <Projects />
                {/* /.overflow-hidden */}
                  <Alianzas />
              </section>
              {/* /section */}

            </>
          </div>
          <Footer7 />
        </div>
      </div>
    </>
  );
}
