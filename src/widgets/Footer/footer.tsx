'use client';

import githubIcon from '@/assets/github.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full h-[50px] text-font-dark blur-bg">
      <div className="flex flex-row items-center justify-between gap-[20px] h-full px-[20px] container">
        <Link href="https://github.com/Yuliya-Karuk/" className="flex flex-row items-center justify-center gap-[10px]">
          <Image src={githubIcon} alt="logo" />
          <span className="text-[2rem] font-bold">Yuliya</span>
        </Link>
        <p className="text-[2rem] font-bold">&#169; 2024</p>
      </div>
    </div>
  );
}
