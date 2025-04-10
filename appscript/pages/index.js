import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';
import fetchProducts from '../utils/fetchProducts';
import { useState } from 'react';

export default function Home({ products }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const filters = [
    { name: 'Category', options: ['Men', 'Women', 'Baby & Kids'] },
  ];

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prev) => {
      const prevVals = prev[filterName] || [];
      const updatedVals = prevVals.includes(value)
        ? prevVals.filter((v) => v !== value)
        : [...prevVals, value];
      return { ...prev, [filterName]: updatedVals };
    });
  };

  const filteredProducts = products.filter((product) => {
    if (!selectedFilters.Category || selectedFilters.Category.length === 0)
      return true;
    return selectedFilters.Category.includes(product.category);
  });

  return (
    <>
      <Head>
        <title>Appscript - Product Listing</title>
        
      </Head>
      <Header />
      <main className={styles.main}>
        <Filters
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
       
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}
