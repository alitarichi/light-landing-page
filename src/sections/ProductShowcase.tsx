import producImage from "@/assets/product-image.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <h1 className="tag">Boost your productivity</h1>
          </div>
          <h2 className="text-center text-3xl mt-5 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just a few minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={producImage} alt="product Image" className="mt-10" />
        </div>
      </div>
    </section>
  );
};
