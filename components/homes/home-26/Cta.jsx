import React from "react";
import Image from "next/image";
import Members from "@/components/homes/home-26/Members";
export default function Cta() {
  return (
    <div className="flex flex-wrap mx-[-7.5px] !mt-[-50px] xl:!mt-0 lg:!mt-0 items-center">
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full">
        <figure className="m-0 p-0">
          <Image
            className="!w-[800px] !h-[615px] object-cover"
            srcSet="/assets/img/illustrations/3d3@2x.png 2x"
            alt="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuF_FXlwSEj016MYOs_fcaBE98MabbL4s_Q&s"
            width={800}
            height={615}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] xl:!mt-0 lg:!mt-0 max-w-full !ml-auto">
        <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
          Let’s Talk
        </h2>
        <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-semibold !mb-3">
          Let's make something great together. We are trusted by over 5000+
          clients.
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
          <Members />
      </div>
      {/*/column */}
    </div>
  );
}
