import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Nav() {
    return (
      <div className="h-12 text-white p-2">
         <Image
          priority
          src={logo}
          alt="Follow us on Twitter"
        />
      </div>
    )
  }