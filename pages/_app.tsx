import "../styles/globals.css";
import "prism-themes/themes/prism-shades-of-purple.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
