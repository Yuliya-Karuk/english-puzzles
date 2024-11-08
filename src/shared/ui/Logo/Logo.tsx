import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="flex flex-row items-center justify-center gap-[10px]">
    <Image src={logo} alt="logo" />
    <h1 className="text-[2rem] font-bold">English Puzzles</h1>
  </Link>
);
