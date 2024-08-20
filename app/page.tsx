"use client";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <section className="bg-slate-600 h-screen">
      <h2>Hi from Pita Pik</h2>
      <Link href="/dashboard/settings">Go to the Settings Page</Link>

      <Hero />
      <button onClick={() => router.push("/dashboard/about")}>
        Go to about page
      </button>
      <Contact />
    </section>
  );
};

export default Home;
