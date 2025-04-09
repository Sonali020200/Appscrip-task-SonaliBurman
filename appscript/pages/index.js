import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import SortDropdown from '../components/SortDropdown';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';
import fetchProducts from '../utils/fetchProducts';
import { useState } from 'react';

export default function Home({ products }) {
  const [sort, setSort] = useState('');
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
    if (!selectedFilters.Category || selectedFilters.Category.length === 0) return true;
    return selectedFilters.Category.includes(product.category);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'Price Low to High') return a.price - b.price;
    if (sort === 'Price High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Head>
        <title>Metta Muse - Product Listing</title>
        <meta name="description" content="Shop trendy collections for Men, Women and Kids." />
      </Head>
      <Header />
      <main className={styles.main}>
        <Filters filters={filters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
        <section className={styles.content}>
          <SortDropdown
            options={['Price Low to High', 'Price High to Low']}
            selected={sort}
            onChange={setSort}
          />
          <div className={styles.grid}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}
