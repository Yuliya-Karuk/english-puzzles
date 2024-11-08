import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1">
      Main part
      <Link href="/registration">registration</Link>
    </div>
  );
}
