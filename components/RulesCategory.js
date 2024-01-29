import Link from "next/link";

export default function RulesCategory({title, link}) {
    return (
        <>
            <Link href={link} className="RulesCategory flex justify-between font-clash h-1/5 text-white/50 duration-200 hover:duration-200 hover:text-white hover:translate-x-2 p-5 border rounded border-white/50">
                <p className="font-medium text-lg">{title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Link>
        </>
    )
}