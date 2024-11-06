import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} font-sans text-gray-900 antialiased`}
        >
        <div className="flex flex-col min-h-screen">
            {/*<header className="px-4 lg:px-6 h-20 flex items-center border-b border-[#F5C4C0]/20">*/}
            {/*    <Link className="flex items-center justify-center gap-2" href="/">*/}
            {/*        <Image src="/logo.svg" width={60} height={60} alt="Logo"/>*/}
            {/*        <span className="text-xl font-bold text-[#1B365D]">Mamás DANA</span>*/}
            {/*    </Link>*/}
            {/*</header>*/}
            <main className="flex-1">
                {children}
            </main>
            {/*<footer*/}
            {/*    className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#F5C4C0]/20">*/}
            {/*    <p className="text-xs text-[#1B365D]/60">© 2024 Mamás DANA. Todos los derechos reservados.</p>*/}
            {/*    <nav className="sm:ml-auto flex gap-4 sm:gap-6">*/}
            {/*        <Link className="text-xs hover:underline underline-offset-4" href="#">*/}
            {/*            Términos de Servicio*/}
            {/*        </Link>*/}
            {/*        <Link className="text-xs hover:underline underline-offset-4"*/}
            {/*              href="/politica-de-privacidad">*/}
            {/*            Política de privacidad*/}
            {/*        </Link>*/}
            {/*    </nav>*/}
            {/*</footer>*/}
        </div>
        </body>
        </html>
    );
}
