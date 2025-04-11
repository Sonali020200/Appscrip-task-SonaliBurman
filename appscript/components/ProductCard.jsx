import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  const [wishlist, setWishList] = useState(false);

  const rating = product.rating?.rate || 0;
  const reviewCount = product.rating?.count || 0;

  // Round rating and build star string
  const fullStars = Math.floor(rating);
  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);

  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <h4 className={styles.productName}>{product.title}</h4>
      <p className={styles.productDetails}>${product.price}</p>

      <div className={styles.ratingBox}>
        <span className={styles.stars}>{stars}</span>
        <span className={styles.reviewCount}>({reviewCount} reviews)</span>
      </div>

      <span
        className={styles.wishlist}
        onClick={() => setWishList(!wishlist)}
      >
        <FaHeart color={wishlist ? "red" : "gray"} />
      </span>
    </div>
  );
}
