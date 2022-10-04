import GlobalStyles from "../Components/GlobalStyles";
import Layout from "../Components/Layout";
//import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
