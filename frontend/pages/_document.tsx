import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=League+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={clsx(
          "body min-h-screen bg-background font-sans antialiased",
          fontSans.variable // Ensure `fontSans.variable` is defined correctly in `@/config/fonts`.
        )}
      >
        <Main />
        <NextScript />
      </body>
      <footer className="px-20 py-10 text-center footer">
        <p>
          &copy; {new Date().getFullYear()} <a href="https://heroui.com">HeroUI</a>'
        </p>
      </footer>
    </Html>
  );
}
