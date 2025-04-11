import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';
import fetchProducts from '../utils/fetchProducts';


export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Appscript - Product Listing</title>      
      </Head>
      <Header />
      <main className={styles.main}>
        <Filters/>       
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}
