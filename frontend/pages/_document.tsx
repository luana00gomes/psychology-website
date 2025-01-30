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
        <p className="flex flex-row items-center justify-center gap-2">
          <a href="https://www.instagram.com/silvanaaparecidasilva.psi/" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-pink-500"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25Zm-4.25 4.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5-.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />
          </svg>
          </a>
          <a href="https://www.instagram.com/silvanaaparecidasilva.psi/" target="_blank" rel="noopener noreferrer">
            @silvanaaparecidasilva.psi
          </a>
        </p>
      
        <p className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-yellow-100"
          >
            <path d="M20.52 3.48A11.67 11.67 0 0 0 12 0a11.67 11.67 0 0 0-8.52 3.48A11.67 11.67 0 0 0 0 12a11.43 11.43 0 0 0 1.53 5.71L0 24l6.38-1.68A11.67 11.67 0 0 0 12 24a11.67 11.67 0 0 0 8.52-3.48A11.67 11.67 0 0 0 24 12a11.67 11.67 0 0 0-3.48-8.52Zm-8.52 19A9.68 9.68 0 0 1 6.48 21L6 20.89l-3.81 1 1-3.81-.14-.39a9.68 9.68 0 0 1 1-9.84 9.79 9.79 0 0 1 7.81-3.86 9.79 9.79 0 0 1 7.81 3.86A9.68 9.68 0 0 1 21 17.52a9.79 9.79 0 0 1-7.81 3.86ZM18 14.09c-.24-.12-1.44-.71-1.66-.8s-.39-.12-.56.12-.64.8-.8 1c-.16.17-.3.2-.55.08s-1-.39-1.91-1.22a7.18 7.18 0 0 1-1.33-1.64c-.08-.17-.01-.32.08-.44s.19-.24.3-.36.4-.48.56-.73.08-.28 0-.4-.56-1.33-.77-1.81c-.21-.48-.43-.42-.56-.43h-.47a.9.9 0 0 0-.64.32 2.71 2.71 0 0 0-.85 2.08 4.71 4.71 0 0 0 1 2.36 11.71 11.71 0 0 0 4.36 4.12A9.57 9.57 0 0 0 17 16.55a2.18 2.18 0 0 0 1.12-1.6c.08-.16 0-.28-.08-.4s-.2-.12-.4-.24Z" />
          </svg>
          (65) 98113-5626
        </p>

        <p>Email: contact@example.com</p>

        <p>Address: 123 Main Street, Springfield, USA</p>
        <div className="text-sm my-4">
          <a href="/terms" className="text-gray-500 hover:text-gray-900">Terms of Service</a> |
          <a href="/privacy" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
        </div>
        <p className="text-xs text-gray-500">© 2025 Your Company. Built with React and TailwindCSS.</p>
      </footer>

    </Html>
  );
}
