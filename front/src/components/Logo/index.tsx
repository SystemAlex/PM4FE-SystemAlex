import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo_ShopTech.svg";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const heightClass = className || "h-[48px]";
  const textHeightClass = className ? "text-3xl" : "text-4xl";
  return (
    <Link href="/" className={`flex items-center ${heightClass} ${textHeightClass}`}>
      <Image
        src={logo}
        alt="Logo"
        width={0}
        height={0}
        fill={true}
        quality={100}
        className={`inline mr-2 !relative ${heightClass}`}
      />
      <span className="text-primary-light font-bold">Shop</span>
      <span className="text-primary-dark">Tech</span>
    </Link>
  );
};

export default Logo;
