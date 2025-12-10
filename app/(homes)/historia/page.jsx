import Footer5 from "@/components/footers/Footer5";
import Header25 from "@/components/headers/Header25";
import Hero from "@/components/homes/home-27/Hero";
import Services from "@/components/homes/home-27/Services";
import React from "react";

export const metadata = {
  title: "Nuestra Historia | IEEE ComSoc PUCP",
  description: "Un legado de resiliencia e innovación desde 2006.",
};

export default function HistoriaPage() {
  return (
    <>
      <div className="color-navy demo27 bg-white">
        <div className="grow shrink-0">
          {/* TRUCO: Envolvemos el Header en un div relativo con z-index alto */}
          <div className="relative z-50 bg-white">
             <Header25 />
          </div>

          <main className="bg-white">
            <Hero />
            <Services />
          </main>
        </div>
        
        {/* Footer compacto como decidiste */}
        <Footer5 hasMarginTop={false} />
      </div>
    </>
  );
}