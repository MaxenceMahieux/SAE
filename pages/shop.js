import Navbar from "@/components/Navbar";
import ShopItem from "@/components/ShopItem";
import Link from "next/link";

export default function Shop() {
    return  (
        <div className="Shop">
            <Navbar />
            <div className="pt-20">
                <p className="text-white/50 text-center my-10 font-clash text-7xl font-medium">Achats</p>
                <div className="lg:columns-2 xl:columns-3 xl:gap-12 mb-10 xl:max-w-6xl mx-auto">
                    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="Acheter" />
                    <ShopItem title="Nouveau véhicule" description="Tu veux une voiture ? On ajoute celle que tu veux ! En revanche, pas de véhicules armés." ImageSrc="/img/VehiclePack.jpg" PaymentType="Acheter" selected={1} />
                    <ShopItem title="Maison au choix" description="Une maison au choix avec le style que tu veux et où tu veux dans la limite du raisonnable" ImageSrc="/img/HousePreview.jpg" PaymentType="Acheter" />
                </div>
                <p className="text-white/50 font-clash text-center mb-32 text-sm">Tu sais pas si ce que tu as choisi est raisonnable ? <Link href="https://discord.com/channels/1194996482479230997/1195041258708664480" target="_blank" className="Link text-blue-500 duration-200 hover:duration-200 hover:text-blue-700">Demande-le nous !</Link></p>
                <p className="text-white/50 text-center my-10 font-clash text-7xl font-medium">Abonnements</p>
                <div className="flex-col columns-3 gap-12 mb-32 max-w-6xl mx-auto">
                    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="S'abonner" />
                    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="S'abonner" />
                    <ShopItem title="Plaque personnalisée" description="Choisi le texte sur le véhicule de votre choix sous condition qu'il vous appartienne déjà." ImageSrc="/img/LicencePlate.jpg" PaymentType="S'abonner" />
                </div>
            </div>
        </div>
    )
}