import Navbar from "@/components/Navbar";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            delay: 100,
        });
        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="Home">
            <Navbar />
            <main className="pt-20 h-full flex items-center px-7 md:px-10 lg:px-40" data-aos="fade-up">
                <div className="text-center md:text-left">
                    <p className="inline-block mb-5 text-xs md:text-sm px-3 py-1.5 rounded border border-white/5 bg-blue-500/20 text-white/60 font-clash">Plus de 500 personnes sont avec nous</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-clash font-bold max-w-2xl">BIENVENUE SUR <br/> <span className="text-red-650">SAN ANDREAS EMERGENCY</span></h1>
                    <p className="text-white/30 font-clash my-5 max-w-4xl text-xs md:text-sm">Explorez un San Andreas réaliste sur notre serveur FiveM. Vivez des aventures en tant que policier, pompier, ou citoyen, et forgez votre destinée dans un monde dynamique.</p>
                    <div className="flex gap-6 mt-12 md:mt-20 justify-center md:justify-start">
                        <Link href="https://discord.gg/geqTKHQxs3" target="_blank" className="px-6 py-3 text-xs md:text-sm font-clash bg-white rounded duration-200 hover:duration-200 hover:text-white/50 hover:bg-transparent border border-white hover:border-white/50">Notre Discord</Link>
                        <Link href="https://discord.gg/geqTKHQxs3" className="px-6 py-3 text-white/50 text-xs md:text-sm font-clash bg-transparent rounded duration-200 hover:duration-200 hover:text-black hover:bg-white border border-white/50 hover:border-white">Se Connecter</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
