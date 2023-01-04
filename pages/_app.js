import Head from "next/head";
import dynamic from "next/dynamic";
import useWindowSize from "../src/hooks/useWindowSize";
import "../public/styles/globals.scss";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
  const Navbar = dynamic(() => import("../src/components/Navbar"));
  const Footer = dynamic(() => import("../src/components/Footer"));
  const FooterMobile = dynamic(() => import("../src/components/FooterMobile"));

  const { width } = useWindowSize();
  return (
    <>
      <Head>
        <title>Deseuri electronice</title>
        <meta name="robots" content="index,follow,all" />
        <meta name="date" content="2021-08-08" />
        <meta name="revisit-after" content="after 30 days" />
        <meta name="expires" content="0" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="Romania" />
        <meta name="geo.placename" content="Bucuresti, Romania" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Reciclare deseuri electronice &amp; servicii de colectare fier vechi si deseuri electronice in Bucuresti, Otopeni si Giurgiu)✅ Scapa de deseurile electronice care iti ocupa spatiu si transforma-le in bani✅"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="deseuri electronice, remat, fier vechi, rabla electrocasnice, placi electronice"
        />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Reciclare &amp; colectare fier vechi centru - deee-uri ✅"
        />
        <meta
          property="og:description"
          content="Reciclare fier &amp; servicii de colectare fier vechi si deseuri electronice in Bucuresti, Otopeni si Giurgiu))✅ Scapa de deseurile electronice care iti ocupa spatiu si transforma-le in bani✅"
        />
        <meta
          property="og:url"
          content="https://deee-uri.ro/calculator-deseuri/"
        />
        <meta property="og:site_name" content="Titlu paginii" />
        <meta property="og:image" content="https://deee-uri.ro/" />
        <meta property="og:image:secure_url" content="https://deee-uri.ro/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Reciclare fier &amp; servicii de colectare fier vechi si deseuri electronice in Bucuresti, Otopeni si Giurgiu)✅ Scapa de deseurile electronice care iti ocupa spatiu si transforma-le in bani✅"
        />
        <meta
          name="twitter:title"
          content="Reciclare &amp; colectare fier vechi centru - deee-uri ✅"
        />
        <meta
          name="twitter:image"
          content="https://deee-uri.ro/wp-content/uploads/2017/01/icon-two.png"
        />
        <meta name="author" content="deee-uri – https://deee-uri.ro/"></meta>
        <link rel="dns-prefetch" href="//apis.google.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Component {...pageProps} />
      {width && width < 770 && <FooterMobile />}
      <Footer />
    </>
  );
}
