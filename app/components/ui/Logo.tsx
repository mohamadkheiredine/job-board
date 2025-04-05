import Image from "next/image";
import Link from "next/link";
import JobSearchIcon from '@/assets/job-search.png';

const Logo = ({
  className = ''
}: {
  className?: string;
}) => {
  return (
    <Link href={'/'} className={`relative select-none text-xl drop-shadow-md font-audiowide uppercase whitespace-nowrap text-black flex items-center gap-3 ${className}`}>
      <Image src={JobSearchIcon} alt="Job Search" width={30} height={30} priority/>
      <h4 className="text-base sm:text-sm md:text-lg lg:text-xl text-black">
        Job Board
      </h4>
    </Link>
  );
}
 
export default Logo;