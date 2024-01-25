import Navbar from "@/components/Navbar";
import ShopItem from "@/components/ShopItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Shop() {
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
        <div className="Shop">
            <Navbar />
            <main className="pt-20" data-aos="fade-up">
                <p className="text-white/50 text-center my-10 font-clash text-7xl font-medium">Achats</p>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-12 mb-10 xl:max-w-6xl mx-auto px-10">
                    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="Acheter" />
                    <ShopItem title="Nouveau véhicule" description="Tu veux une voiture ? On ajoute celle que tu veux ! En revanche, pas de véhicules armés." ImageSrc="/img/VehiclePack.jpg" PaymentType="Acheter" selected={1} />
                    <ShopItem title="Maison au choix" description="Une maison au choix avec le style que tu veux et où tu veux dans la limite du raisonnable" ImageSrc="/img/HousePreview.jpg" PaymentType="Acheter" />
                </div>
                <p className="text-white/50 font-clash text-center mb-10 text-sm">Tu sais pas si ce que tu as choisi est raisonnable ? <Link href="https://discord.com/channels/1194996482479230997/1195041258708664480" target="_blank" className="Link text-blue-500 duration-200 hover:duration-200 hover:text-blue-700">Demande-le nous !</Link></p>
                {/*<p className="text-white/50 text-center my-10 font-clash text-7xl font-medium">Abonnements</p>*/}
                {/*<div className="flex-col columns-3 gap-12 mb-32 max-w-6xl mx-auto">*/}
                {/*    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="S'abonner" />*/}
                {/*    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="S'abonner" />*/}
                {/*    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="S'abonner" />*/}
                {/*</div>*/}
            </main>
        </div>
    )
}