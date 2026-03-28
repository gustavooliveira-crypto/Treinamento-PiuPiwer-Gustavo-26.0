import Link from "next/link";
import Image from "next/image";

function NavbarLogo({ isH2 }: { isH2?: boolean }) {
  return ( 
    <Link className="flex items-center gap-2" href="/">
      
      <Image
        src="/piupiwernavbar.png"
        alt="logo"
        width={50}
        height={50}
      />

      {isH2 ? 
        <h2 className="font-bold text-3xl">piupiwer</h2>
        :
        <h1 className="font-bold text-3xl">piupiwer</h1>
      }
    </Link>
   );
}

export default NavbarLogo;