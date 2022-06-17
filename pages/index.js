import Head from "next/head";
import Image from "next/image";
import CryptoList from "../components/crypto/CryptoList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ coins }) {
  // console.log(coins);
  return (
    <div className={styles.container}>
      <Head>
        <title>CrytoX | Price updates</title>
        <meta name="description" content="crypto price updates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero />
          <CryptoList coins={coins.coins} />
        </Layout>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=50"
  );
  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  };
};
