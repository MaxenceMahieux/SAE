import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export default function ShopItem({title, description, ImageSrc, PaymentType, selected}) {
    return (
        <>
            <div className={`p-5 ${selected ? 'border-blue-500/50' : 'border-white/50 mb-10'} mx-auto shadow shadow-black backdrop-blur-sm border-2 rounded-xl font-clash max-w-96`}>
                <Image src={ImageSrc} alt="" className="rounded-lg mb-2" width={341} height={192}/>
                <p className="text-white font-semibold text-lg">{title}</p>
                <p className="text-gray-500">{description}</p>
                <Link href="#" className={`px-6 py-3 ${selected ? 'bg-white text-blue-500 hover:bg-slate-300' : 'bg-blue-500 text-white hover:bg-blue-700'} block mt-8 rounded-lg font-semibold duration-200 hover:duration-200 text-center`}>{PaymentType}</Link>
            </div>
            <div className={`text-center`}>
                <p className={`${selected ? 'inline-block mb-10' : 'hidden'} font-clash font-medium text-white p-2 border-r-2 border-b-2 border-l-2 backdrop-blur-sm border-blue-500/50 rounded-b-lg`}>Plus populaire</p>
            </div>
        </>
    )
}