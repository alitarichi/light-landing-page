import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div>
      <div className="container">
        <div>
          <Image src={acmeLogo} alt="acme logo" />
          <Image src={quantumLogo} alt="quantum logo" />
          <Image src={echoLogo} alt="echo logo" />
          <Image src={celestialLogo} alt="celestial logo" />
          <Image src={pulseLogo} alt="pulse logo" />
          <Image src={apexLogo} alt="apex logo" />
        </div>
      </div>
    </div>
  );
};
