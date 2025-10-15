import { Head } from "@/components/new-layout/head";
import { fontMono, fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
		const variants = {
			hidden: { opacity: 0, y: 200 },
			enter: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: -200 },
		};

	return (
		<NextUIProvider>
			<NextThemesProvider>
				<Head />
				<AnimatePresence mode="wait" initial={false}>
					<motion.main
						key={router.asPath}
						variants={variants}
						initial="hidden"
						animate="enter"
						exit="exit"
						transition={{ type: "linear", duration: 0.3 }}
						style={{ minHeight: "100vh" }}
					>
						<Component {...pageProps} />
					</motion.main>
				</AnimatePresence>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
