import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "../public/img/arrow-left.svg"

export default function Error404(){
    return (
        <>
            <main className="Error404 font-clash">
                <div className="flex justify-center items-center h-full">
                    <div>
                        <p className="text-white/50 font-medium text-center mb-2">ERROR</p>
                        <h1 className="text-white text-center font-bold text-9xl mb-5">404</h1>
                        <p className="text-white/30">La page que vous cherchez n'a pas été trouvée.</p>
                        <div className="mt-10 flex justify-center">
                            <Link href="/" className="inline-flex gap-2 px-6 py-3 text-white/50 text-xs md:text-sm font-clash bg-transparent rounded duration-200 hover:duration-200 hover:text-white hover:bg-white/5 border border-white/50 hover:border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" opacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Revenir à l'accueil
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}