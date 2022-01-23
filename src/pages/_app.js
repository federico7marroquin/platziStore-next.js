import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import Header from "@components/Header";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <Head>
        <meta name="viewport" description="width=device-width, initial-scale=1.0" />
        <meta name="description" description="Tienda en linea de platzi en next.js" />
        <title>Reactshop</title>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <AppContext.Provider value={initialState}>
        <Header />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3L5NY1033J" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-3L5NY1033J');`}</Script>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
