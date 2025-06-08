import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="flex flex-col gap-[24px] w-full max-w-[600px] h-[60vh] justify-center items-center p-[24px] mx-auto text-slate-700 text-center">
        <h1 className="font-semibold text-xl">Next MDX Setup Tutorial</h1>
        <p>A full walkthrough of integrating next-mdx, rehype-pretty-code, Shiki, and Tailwind typography in Next.js 15.3.3</p>
        <div className="flex">
          <Link href="/test">
            <button className="bg-violet-400 py-2 px-4 text-white">View Test Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
