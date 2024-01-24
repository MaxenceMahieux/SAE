import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head />
            <link rel="icon" href="/img/Favicon.ico" type="image/x-icon" />
            <meta name="keywords" content="San, Andreas, Emergency, FivePD, ToKu, FiveM, Maxence, Mahieux" />
            <meta name="description" content="Explorez un San Andreas réaliste sur notre serveur FiveM. Vivez des aventures en tant que policier, pompier, ou citoyen, et forgez votre destinée dans un monde dynamique."/>
            <title>San Andreas Emergency - FivePD</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
