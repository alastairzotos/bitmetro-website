import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

export const Head = () => {
	return (
		<NextHead>
			<title>{siteConfig.name}</title>
			<meta content={siteConfig.description} name="description" />
			<meta
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				name="viewport"
			/>
			<link href="/favicon.ico" rel="icon" />

			<meta property="og:title" content={siteConfig.name} />
			<meta property="og:description" content={siteConfig.description} />
			<meta property="og:image" content="https://i.imgur.com/XYyKLdD.png" />
			<meta property="og:image:width" content="2000" />
			<meta property="og:image:height" content="1000" />
		</NextHead>
	);
};
