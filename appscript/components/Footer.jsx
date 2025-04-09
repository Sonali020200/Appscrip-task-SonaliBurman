import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <p>BE THE FIRST TO KNOW</p>
        <input type="email" placeholder="Enter your e-mail..." />
        <button>SUBSCRIBE</button>
      </div>

      <div className={styles.bottom}>
        <div>
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <p>CURRENCY - USD $</p>
        </div>

        <div>
          <p>mettà muse</p>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <p>QUICK LINKS</p>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Return & Refunds</li>
          </ul>
        </div>

        <div>
          <p>FOLLOW US</p>
          <p>📷 🎥</p>
          <p>We accept: Visa, Amex, Apple Pay, PayPal</p>
        </div>
      </div>
    </footer>
  );
}
