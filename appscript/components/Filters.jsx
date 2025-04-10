import React, { useEffect, useState } from "react";
import styles from "../styles/Filters.module.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedCount, setSelectedCount] = useState(null);
  const [sortOption, setSortOption] = useState("RECOMMENDED");

  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [showCountDropdown, setShowCountDropdown] = useState(false);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredAndSortedProducts = [...products]
    .filter((product) => {
      if (selectedCategory && product.category !== selectedCategory)
        return false;
      if (selectedRating && Math.floor(product.rating.rate) < selectedRating)
        return false;
      if (selectedCount && product.rating.count < selectedCount) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "PRICE: LOW TO HIGH":
          return a.price - b.price;
        case "PRICE: HIGH TO LOW":
          return b.price - a.price;
        case "POPULAR":
          return b.rating.rate - a.rating.rate;
        case "NEWEST FIRST":
          return b.id - a.id;
        default:
          return 0;
      }
    });

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Armet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      <div className={styles.controls}>
        <div className={styles.leftControls}>
          <span className={styles.itemCount}>
            {filteredAndSortedProducts.length} ITEMS
          </span>
          <button className={styles.filterToggle} onClick={toggleFilters}>
            <FaChevronRight className={showFilters ? styles.rotate : ""} />
            {showFilters ? " HIDE FILTER" : " SHOW FILTER"}
          </button>
        </div>
        <div className={styles.selectWrapper}>
          <select
            className={styles.sortSelect}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
          <FaChevronDown className={styles.selectIcon} />
        </div>
      </div>

      <div className={styles.contentArea}>
        <aside
          className={`${styles.filterSection} ${
            showFilters ? styles.showFilter : ""
          }`}
        >
          <p className={styles.filterTitle}>CUSTOMIZBLE</p>

          {/* Category Filter */}
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              Category <FaChevronDown />
            </div>
            {showCategoryDropdown && (
              <div className={styles.dropdownContent}>
                {[
                  "men's clothing",
                  "women's clothing",
                  "jewelery",
                  "electronics",
                ].map((cat) => (
                  <label key={cat}>
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === cat ? null : cat
                        )
                      }
                    />
                    <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Rating Filter */}
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setShowRatingDropdown(!showRatingDropdown)}
            >
              Rating <FaChevronDown />
            </div>
            {showRatingDropdown && (
              <div className={styles.dropdownContent}>
                {[5, 4, 3].map((rate) => (
                  <label key={rate}>
                    <input
                      type="checkbox"
                      checked={selectedRating === rate}
                      onChange={() =>
                        setSelectedRating(selectedRating === rate ? null : rate)
                      }
                    />
                    {rate} stars & up
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Review Count Filter */}
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setShowCountDropdown(!showCountDropdown)}
            >
              Minimum Reviews <FaChevronDown />
            </div>
            {showCountDropdown && (
              <div className={styles.dropdownContent}>
                {[100, 200, 300].map((count) => (
                  <label key={count}>
                    <input
                      type="checkbox"
                      checked={selectedCount === count}
                      onChange={() =>
                        setSelectedCount(
                          selectedCount === count ? null : count
                        )
                      }
                    />
                    {count}+ reviews
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Product Grid */}
        <section className={styles.productSection}>
          {loading ? (
            <div className={styles.loading}>Loading products...</div>
          ) : filteredAndSortedProducts.length === 0 ? (
            <div className={styles.noProducts}>No products found.</div>
          ) : (
            <div className={styles.productGrid}>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Filters;
