import Navbar from "@/components/Navbar";
import Image from "next/image";
import ChevronRight from "../../public/img/chevron-right.svg"
import Link from "next/link";
import Footer from "@/components/Footer";
import {useEffect} from "react";
import AOS from "aos";

export default function Discord() {
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
        <div className="Discord">
            <Navbar />
            <div className="pt-20 px-7 md:px-10 lg:px-40 text-white/50 flex gap-2 my-5 text-sm" data-aos="fade-right">
                <Link href="/rules" className="duration-200 hover:duration-200 hover:text-white">Règlement</Link>
                <Image src={ChevronRight} alt="Chevron droit" height={15} className="my-auto opacity-50" />
                <Link href="/rules/discord" className="duration-200 hover:duration-200 hover:text-white">Discord</Link>
            </div>
            <main className="px-7 md:px-10 lg:px-40 font-clash" data-aos="fade-up">
                <h1 className="text-white/50 text-center mt-10 text-7xl font-medium">Discord</h1>
                <p className="text-white/30 text-center mt-5 text-lg font-normal max-w-3xl mx-auto">Voici le règlement du serveur Discord de San Andreas Emergency ! Avant de participer à la communauté, il est impératif de lire et de respecter le règlement ci-dessous.</p>
                <div className="my-32">
                    <div className="mb-10">
                        <h2 className="text-white/50 mb-5 text-3xl font-medium">1. Généralités</h2>
                        <div className="ml-5 mb-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">1.1 Comportement Respectueux</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Soyez respectueux et courtois envers tous les membres du serveur.<br/>Aucun discours haineux, discriminatoire, ou harcèlement ne sera toléré.</p>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">1.2 Langue du Serveur</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">La langue principale de ce serveur est le français. Veuillez communiquer en français autant que possible pour une meilleure compréhension.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-white/50 mb-5 text-3xl font-medium">2. Contenu et Discussions</h2>
                        <div className="ml-5 mb-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">2.1 Contenu Inapproprié</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Aucun contenu NSFW (Not Safe For Work), politique, religieux ou controversé n'est toléré.</p>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">2.2 Autopromotion et Spam</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">L'autopromotion est autorisée uniquement dans les canaux dédiés.<br/>Le spam et le flood sont interdits.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-white/50 mb-5 text-3xl font-medium">3. Canaux</h2>
                        <div className="ml-5 mb-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">3.1 Utilisation des Canaux</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Utilisez les canaux pour leur but spécifique. Par exemple, toute question liée au support doit aller dans le canal <Link href="https://discord.com/channels/1194996482479230997/1195041258708664480" className="p-1 rounded duration-200 hover:duration-200 hover:bg-blue-500/40 bg-blue-500/30 text-white">🎫・ticket</Link> .</p>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">3.2 Messages Privés</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Évitez d'envoyer des messages privés non sollicités aux membres, surtout pour des fins commerciales ou promotionnelles.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-white/50 mb-5 text-3xl font-medium">4. Modération</h2>
                        <div className="ml-5 mb-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">4.1 Rôles et Permissions</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Les modérateurs ont le droit de supprimer des messages et de bannir des membres en cas de non-respect des règles.</p>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">4.2 Signalements</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Si vous rencontrez des problèmes avec un membre ou des messages spécifiques, veuillez contacter un modérateur.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-white/50 mb-5 text-3xl font-medium">5. Divers</h2>
                        <div className="ml-5 mb-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">5.1 Liens et Fichiers</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Partagez uniquement des liens et des fichiers provenant de sources sûres et pertinentes.</p>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-white/50 mb-2 text-xl font-medium">5.2 Confidentialité</h3>
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Ce qui se passe sur le serveur reste sur le serveur. Ne divulguez pas d'informations sensibles ou privées.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-white/50 mb-5 text-3xl font-medium">6. Conformité et Sanctions</h2>
                        <div className="ml-5 mb-5">
                            <p className="text-white/30 text-lg font-normal max-w-3xl">Le non-respect de ces règles peut entraîner des avertissements, des mutes ou des bans, à la discrétion de l'équipe de modération.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer glue={0} />
        </div>
    )
}