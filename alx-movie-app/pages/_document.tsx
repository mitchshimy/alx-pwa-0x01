import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link the manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />

        {/* Optional: PWA mobile icons */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
