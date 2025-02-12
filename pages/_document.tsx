import { Html, Head, Main, NextScript } from "next/document";
import { Image } from "@heroui/react";
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
      <footer className="p-10 lg:px-20 text-center footer">
        <div className="flex flex-col items-center justify-center gap-2 m-4 w-auto">
          <div className="flex items-center justify-center gap-2 m-4">

            <a href="https://wa.me/5565981135626" target="_blank" rel="noopener noreferrer">
              <Image
                alt="HeroUI hero Image"
                height={32}
                width={32}
                src="whatsapp_branco.png"
                className="opacity-1"
              />
            </a>
            <a href="https://wa.me/5565981135626" target="_blank" rel="noopener noreferrer">
              <h3>
                (65) 98113-5626
              </h3>
            </a>

          </div>

          <div className="flex flex-row items-center justify-center gap-2">

            <a href="https://www.instagram.com/silvanaaparecidasilva.psi/" target="_blank" rel="noopener noreferrer">
              <Image
                alt="HeroUI hero Image"
                height={32}
                width={32}
                src="instagram.png"
                className="opacity-1"
              />
            </a>
            <a href="https://www.instagram.com/silvanaaparecidasilva.psi/" target="_blank" rel="noopener noreferrer">
              <h3>
                @silvanaaparecidasilva.psi
              </h3>
            </a>

          </div>

          <div className="flex items-center justify-center gap-2 my-2">
            <h3>silvanaaparecidasilva.psi@gmail.com</h3>
          </div>

        </div>
        <p className="text-xs text-[#C4841D] mt-10 mb-4 text-center">
          Developer © 2025 
          <a 
            href="https://www.linkedin.com/in/luana-g/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F5A524] hover:text-[#F7B750] font-semibold transition-all duration-300"
          >
            {" "}linkedin.com/in/luana-g/
          </a>. 
          Built with <span className="font-medium text-[#936316]">React</span> and <span className="font-medium text-[#936316]">TailwindCSS</span>.
        </p>
      </footer>

    </Html>
  );
}
