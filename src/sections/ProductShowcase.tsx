import producImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <h1 className="tag">Boost your productivity</h1>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just a few minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={producImage} alt="product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
          />
          <Image
            src={tubeImage}
            alt="tube image"
            height={248}
            className=" hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
