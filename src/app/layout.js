import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
    src: "../../public/Inter-VariableFont_slnt,wght.ttf",
    variable: "--font-inter",
});
const cal = localFont({
    src: '../../public/CalSans-SemiBold.woff2',
    variable: '--font-cal',
})

export const metadata = {
    title: "Sticker Smash landing",
    description: "Easily add, move, and scale stickers onto images. Create, customize, and save your sticker compositions with ease. Get started now!",
    icons: {
        apple: { url: '/apple-touch-icon.png', sizes: '76x76' },
        icon: [
            { url: '/favicon-32x32.png', type: 'image/png', sizes: "32x32" },
            { url: '/favicon-16x16.png', type: 'image/png', sizes: "16x16" }
        ],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${cal.variable}`}>{children}</body>
        </html>
    );
}
