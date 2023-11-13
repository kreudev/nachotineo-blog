import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  const meta = {
    title: "Blog by Nacho Tineo",
    description: "Explora el apasionante mundo de la tecnología y el software aquí, un espacio creado por un programador para programadores. Descubre análisis detallados, tutoriales prácticos y las últimas tendencias en desarrollo de software. Mejora tus habilidades mientras exploras temas como optimización de código, mejores prácticas y tecnologías emergentes. ¡Desarrolla tu conocimiento y creatividad en el mundo del desarrollo de software!",
    image: "/nachotineo_icon.png",
  };

  return (
    <Html lang="es">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nachotineo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
