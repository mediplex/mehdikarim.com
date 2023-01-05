import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] }); // inter.className

export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className="text-3xl font-bold underline ">Hello World</h1>
    </main>
  );
}
