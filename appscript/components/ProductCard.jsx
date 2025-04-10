import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  const [wishlist, setWishList] = useState(false);

  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <h4 className={styles.productName}>{product.title}</h4>
      <p className={styles.productDetails}>${product.price}</p>
      <span
        className={styles.wishlist}
        onClick={() => setWishList(!wishlist)}
      >
        <FaHeart color={wishlist ? "red" : "gray"} />
      </span>
    </div>
  );
}
