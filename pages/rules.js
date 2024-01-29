import Navbar from "@/components/Navbar";
import {useEffect} from "react";
import AOS from "aos";
import RulesCategory from "@/components/RulesCategory";
import Footer from "@/components/Footer";

export default function Rules() {
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
    return  (
        <div className="Rules">
            <Navbar />
            <main className="pt-20 px-7 md:px-10 lg:px-40" data-aos="fade-up">
                <p className="text-white/50 text-center my-10 font-clash text-7xl font-medium">Règles</p>
                <div className="flex flex-col gap-4">
                    <RulesCategory title="Discord" link="/rules/discord"/>
                    <RulesCategory title="FiveM" link="/rules/fivem"/>
                    <RulesCategory title="Équipe" link="/rules/team"/>
                </div>
            </main>
            <Footer glue={1} />
        </div>
    )
}