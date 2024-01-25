import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="separator"></div>
            <div className="flex justify-between p-7 md:px-10 lg:px-40 py-5 font-clash">
                <p className="text-white/50 text-sm">Copyright © 2023 <Link href="https://maxmhx.fr" target="_blank" className="duration-200 hover:duration-200 hover:text-white cursor-pointer">Maxence Mahieux</Link> </p>
                <div className="flex gap-8">
                    <p className="text-white/50 text-sm duration-200 hover:duration-200 hover:text-white cursor-pointer">Mentions légales</p>
                    <p className="text-white/50 text-sm duration-200 hover:duration-200 hover:text-white cursor-pointer">Conditions d'utilisations</p>
                </div>
            </div>
        </footer>
    )
}